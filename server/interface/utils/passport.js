import passport from 'koa-passport'
import LocalStrategy from 'passport-local'
import UserModel from '../../dbs/models/users'

passport.use(new LocalStrategy(
	 function(username,password,done){
		let where = {
			username
		}
		UserModel.findOne(where).then(function(result){
			if(result !=null){
				if(result.password === password){
					return done(null,result)
				}else{
					return done(null,false,'密码错误')
				}
			}else{
				return done(null,false,'没有此用户，请重新输入用户名')
			}
		}).catch(function(err){
			log.error(err.message)
			return done(null,false,{message: err.message})
		})
	}
))

passport.serializeUser(function(user,done){
  done(null,user)
})
passport.deserializeUser(function(user,done){
  return done(null,user)
})

export default passport