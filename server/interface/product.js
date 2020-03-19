import Router from 'koa-router'
import axios from '../interface/utils/axios'
import product from '../dbs/models/product'

const router = new Router()

router.get('/product/area',async ctx=>{
	let type = await product.findOne()
	let res = await axios.get('http://cp-tools.cn/categroy/crumbs',{
		params : {
			city : ctx.query.city.replace('市','')
		}
	})
	ctx.body = {
		sort : type?type.types:[],
		area : res.status===200?res.data.areas:[]
	}
})

export default router