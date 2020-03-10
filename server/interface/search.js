import Router from 'koa-router'
import axios from '../interface/utils/axios'
import poi from '../dbs/models/poi'

const router = new Router()

router.get('/search/top',async (ctx)=>{
    //let input = new RegExp(ctx.query.input,'i')
    // let top = await poi.find({
    //     'name' : input,
    //     'city' : ctx.query.city
    // })
    // if(top){
    //     ctx.body = {
    //         code: 0,
    //         top : top.map(item=>{
    //             return {
    //                 name : item.name,
    //                 type : item.type
    //             }
    //         })
    //     }
    // }else{
    //     ctx.body = {
    //         code: -1,
    //         top : []
    //     }
    // }
    let top = await axios.get('http://cp-tools.cn/search/top',{
        params : {
            input : ctx.query.input,
            city : ctx.query.city
        }
    })
    if(top.status===200){
        ctx.body = {
            code : 0,
            top  : top.data.top
        }
    }else{
        ctx.body = {
            code : -1,
            top  : []
        }
    }
})

router.get('/search/hot',async (ctx)=>{
    // let hot = await poi.find({
    //     city : ctx.query.city
    // })
    // if(hot){
    //     ctx.body = {
    //         code: 0,
    //         hot : hot.map(item=>{
    //             return {
    //                 name : item.name,
    //                 type : item.type
    //             }
    //         }) 
    //     }
    // }else{
    //     ctx.body = {
    //         code: -1,
    //         top : []
    //     }
    // }
    let hot = await axios.get('http://cp-tools.cn/search/hotPlace',{
        params : {
            city : ctx.query.city
        }
    })
    if(hot.status===200){
        ctx.body = {
            code : 0,
            hot  : hot.data.result.map(item=>{
                return {
                    name : item.name,
                    type : item.type
                }
            })
        }
    }else{
        ctx.body = {
            code : -1,
            hot  :[]
        }
    }
})

export default router