import Router from 'koa-router'
import Redis from 'koa-redis'
import City from '../dbs/models/city'
import axios from '../interface/utils/axios'

const router = new Router()

router.get('/city/getPosition',async (ctx)=>{
    let res = await axios.get('https://apis.map.qq.com/ws/location/v1/ip?key=E5KBZ-GZ2ES-BVIOV-6LVSP-XH7L7-YJBEZ')
    if(res.status){
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

export default router