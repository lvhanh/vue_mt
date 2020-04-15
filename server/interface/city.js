import Router from 'koa-router'
import province from '../dbs/models/province'
import city from '../dbs/models/city'
import axios from '../interface/utils/axios'

const router = new Router()

router.get('/city/getPosition',async (ctx)=>{
    let res = await axios.get('https://apis.map.qq.com/ws/location/v1/ip?key=E5KBZ-GZ2ES-BVIOV-6LVSP-XH7L7-YJBEZ')
    //let res = await axios.get('http://cp-tools.cn/geo/getPosition')
    if(res.status===200){
        ctx.body = {
            province : res.data.result.ad_info.province,
            city     : res.data.result.ad_info.city,
            district : res.data.result.ad_info.district
            // province : res.data.province,
            // city     : res.data.city
        }
    }else{
        ctx.body = {
            province : '',
            city     : '',
            district : ''
        }
    }
})

router.get('/city/menu',async (ctx)=>{
    // let res = await menu.findOne()
    // ctx.body = {
    //     menus : res.menu
    // }
    let res = await axios.get('http://cp-tools.cn/geo/menu')
    if (res.status === 200) {
      ctx.body = {
        menus:res.data.menu
      }
    } else {
      ctx.body = {
        menus: []
      }
    }
})

router.get('/city/province',async (ctx)=>{
    // let res = await province.find()
    // ctx.body = {
    //     province : res.map(item=>{
    //         return {
    //             id       : item.id,
    //             province : item.value
    //         }
    //     })
    // }
    let res = await axios.get('http://cp-tools.cn/geo/province')
    if(res.status===200){
        ctx.body = {
            code : 0,
            province : res.data.province
        }
    }else{
        ctx.body = {
            code : -1,
            province : []
        }
    }
})

router.get('/city/province/:id',async (ctx)=>{
    // let res = await city.findOne({id : ctx.params.id})
    // ctx.body = {
    //     cities : res.value.map(item=>{
    //         return {
    //             id   : item.id,
    //             city : item.province,
    //             name : item.name
    //         }
    //     })
    // }
    let res = await axios.get(`http://cp-tools.cn/geo/province/${ctx.params.id}`)
    if(res.status===200){
        ctx.body = {
            code : 0,
            cities : res.data.city
        }
    }else {
        ctx.body = {
            code : -1,
            cities : []
        }
    }
})

router.get('/city/getCity',async (ctx)=>{
    let res = await axios.get('http://cp-tools.cn/geo/city')
    if(res.status===200){
        ctx.body = {
            code : 0,
            city : res.data.city
        }
    }else{
        ctx.body = {
            code : -1,
            city : []
        }
    }
})

router.get('/city/hotCity',async (ctx)=>{
    let res = await axios.get('http://cp-tools.cn/geo/hotCity')
    if(res.status===200){
        ctx.body = {
            code    : 0,
            hotCity : res.data.hots
        }
    }else {
        ctx.body = {
            code    : -1,
            hotCity : []
        }
    }
})

export default router