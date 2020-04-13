import Router from 'koa-router'
import axios from '../interface/utils/axios'
import Cart from '../dbs/models/cart'
import Order from '../dbs/models/order'

const router = new Router()

router.post('/order/createOrder',async ctx=>{
	if(ctx.isAuthenticated()){
        let {cartNo,price,count,orderNo} = ctx.request.body
        let user = ctx.session.passport.user,
            time = new Date()
		let cart = await Cart.findOne({cartNo:cartNo})
		let order = new Order({
			orderNo : orderNo,
			count   : count,
			total   : price*count,
			cartName: cart.cartName,
			username: user,
			time    : time,
			imgs    : cart.imgs,
			status  : 0
		})
        let result = await order.save()
        if(result){
			await cart.remove()
            ctx.body = {
                code : 0,
				msg  : ''
            }
        }else{
            ctx.body = {
                code : -1,
				msg  : 'fail'
            }
        }
    }else {
        ctx.body = {
            code : -1,
            msg  : '请登录'
        }
    }
})

router.post('/order/getOrder',async ctx=>{
    if(!ctx.isAuthenticated()){
			ctx.body = {
				code : -1,
				msg  : '请登录',
				list : {}
			}
		}else {
			try {
				let result = await Order.find()
				if(result){
					ctx.body = {
						code : 0,
						list : result
					}
				}else {
					ctx.body = {
						code : -1,
						list : {}
					}
				}
			}
			catch(err){
				ctx.body = {
					code : -1,
					msg  : err,
					list : {}
				}
			}
		}
})

router.post('/order/status',async ctx=>{
	let orderNo = ctx.request.body.orderNo
	let result = await Order.findOne({orderNo:orderNo})
	if(result){
		await result.update({status : 1})
		ctx.body = {
			code : 0
		}
	}else {
		ctx.body = {
			code : -1
		}
	}
})

export default router