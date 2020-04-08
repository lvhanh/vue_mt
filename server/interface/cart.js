import Router from 'koa-router'
import axios from '../interface/utils/axios'
import Cart from '../dbs/models/cart'

const router = new Router()

router.post('/cart/createCart',async ctx=>{
	if(ctx.isAuthenticated()){
        let {cartNo,price,cartName} = ctx.request.body
        let user = ctx.session.passport.user,
            time = new Date()
        let cart = new Cart({cartNo,price,cartName,username:user,time})
        let result = await cart.save()
        if(result){
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

router.post('/cart/getCart',async ctx=>{
    let cartNo = ctx.request.body.cartNo
    let result = await Cart.findOne({cartNo:cartNo})
    if(result){
        ctx.body = {
            code : 0,
            list : result
        }
    }else{
        ctx.body = {
            code : -1,
            list : {}
        }
    }
})

export default router