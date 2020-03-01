import Router from 'koa-router'
import Redis from 'koa-redis'
import User from '../dbs/models/users'
import nodemailer from 'nodemailer'
import axios from '../interface/utils/axios'
import passport from '../interface/utils/passport'
import config from '../dbs/config'

const router = new Router()
const store = new Redis().client

router.post('/users/signup', async function(ctx){
	const {username,password,email,code} = ctx.request.body
	if(code){
		let postCode = await store.hget(`${username}`,'code')
		let postExpire=await store.hget(`${username}`,'expire')
		let ndate = new Date().getTime()
		if(code === postCode){
			if(ndate - postExpire >0){
				ctx.body = {
					code : -1,
					msg  : '验证码已过期'
				}
				return false
			}	
		}else{
			ctx.body = {
				code : -1,
				msg  : '请输入正确的验证码'
			}
		}
	}else{
		ctx.body = {
			code : -1,
			msg  : '请输入验证码'
		}
	}
	let user = await User.find({username})
	if(user){
		ctx.body = {
			code : -1,
			msg  : '该用户已存在'
		}
		return
	}
	let newUser = await User.create({
		username : username,
		password : password,
		email    : email
	})
	if(newUser){
		let res = await axios.post('/users/signin',{username,password})
		if(res.data&&res.data.code===0){
			ctx.body = {
				code : 0,
				msg  : '注册成功！',
				user : res.data.user
			}
		}else{
			ctx.body = {
				code : -1,
				msg  : 'error'
			}
		}
	}else{
		ctx.body = {
			code : -1,
			msg  : '注册失败'
		}
	}
})

router.post('/users/signin',async function(ctx,next){
	return passport.authenticate('local',function(err,user,info,status){
		if(err){
			ctx.body = {
				code : -1,
				msg  : err
			}
		}else{
			if(user){
				ctx.body = {
					code : 0,
					msg  : '登录成功',
					user
				}
				return ctx.login(user)
			}else{
				ctx.body = {
					code : -1,
					msg  : info
				}
			}
		}
	})(ctx,next)
})

router.post('/users/verify',async function(ctx,next){
	let transporter = nodemailer.createTransport({
		service : 'qq',
		auth : {
			user : config.smtp.user(),
			pass : config.smtp.pass()
		}
	})
	let mail = {
		code 	 : config.smtp.code(),
		expire : config.smtp.expire(),
		email	 : ctx.request.body.email,
		user	 : ctx.request.body.username
	}
	let mailOptions = {
		from 		: `"认证" ${config.smtp.user()}`,
		to   		: mail.email,
		subject : '仿美团注册码',
		html		: `您在仿美团上注册，注册码是${mail.code}`
	}
	await transporter.sendMail(mailOptions,(error,info)=>{
		if(error){
			return console.log(error)
		}else{
			store.hmset(`${mail.user}`,'code',mail.code,'expire',mail.expire,'email',mail.email)
		}
	})
	ctx.body = {
		code : 0,
		msg  : '验证码已发送，请登录邮箱查看'
	}
})

router.get('/users/logout',async function(ctx,next){
	await ctx.logout()
	if(!ctx.isAuthenticate()){
		ctx.body = {
			code : 0
		}
	}else{
		ctx.body = {
			code : -1
		}
	}
})

router.get('/users/getUser',async function(ctx){
	if(ctx.isAuthenticate()){
		let {username,email} = ctx.session.passport.user
		ctx.body = {
			user : username,
			email
		}
	}else{
		ctx.body = {
			user : '',
			email: ''
		}
	}
})

export default router