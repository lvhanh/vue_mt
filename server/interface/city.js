import Router from 'koa-router'
import province from '../dbs/models/province'
import city from '../dbs/models/city'
import axios from '../interface/utils/axios'

const router = new Router()

router.get('/city/getPosition',async (ctx)=>{
    let res = await axios.get('https://apis.map.qq.com/ws/location/v1/ip?key=E5KBZ-GZ2ES-BVIOV-6LVSP-XH7L7-YJBEZ')
    if(res.status===200){
        ctx.body = {
            province : res.data.result.ad_info.province,
            city     : res.data.result.ad_info.city,
            district : res.data.result.ad_info.district
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
    let res = await province.find()
    ctx.body = {
        province : res.map(item=>{
            return {
                id       : item.id,
                province : item.value
            }
        })
    }
})

router.get('/city/province/:id',async (ctx)=>{
    let res = await city.findOne({id : ctx.params.id})
    ctx.body = {
        cities : res.value.map(item=>{
            return {
                id   : item.id,
                city : item.province,
                name : item.name
            }
        })
    }
})

export default router