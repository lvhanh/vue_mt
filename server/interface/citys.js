import Router from 'koa-router'
import Redis from 'koa-redis'
import City from '../dbs/models/users'
import axios from '../interface/utils/axios'

const router = new Router()

router.get('/citys/getPosition',async (ctx)=>{
    let province,city,district
    let position = await axios.get('https://apis.map.qq.com/ws/location/v1/ip?key=E5KBZ-GZ2ES-BVIOV-6LVSP-XH7L7-YJBEZ')
    if(position){
        ctx.body = {
            province : position.result.ad_info.province,
            city     : position.result.ad_info.city,
            district : position.result.ad_info.district
        }
    }else{
        ctx.body = {
            province : '',
            city     : '',
            district : ''
        }
    }
})