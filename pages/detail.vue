<template>
    <div class="m-detail">
			<mcrumb
			:city="city"
			:keyword="keyword"
			:type="type" />
			<div class="m-title">
				<mtitle
				:product="product" />
			</div>
		</div>
</template>

<script>
import axios from 'axios'
import Mcrumb from '../components/detail/crumb'
import Mtitle from '../components/detail/title'
export default {
    components : {
			Mcrumb,
			Mtitle
		},
		data(){
			return {
				type    : '',
				city    : '',
				keyword : '',
				product : [],
				more    : [],
				login   : Boolean
			}
		},
		async asyncData(ctx){
			let {city,keyword,type}=ctx.query
			let res = await ctx.$axios.get('/search/product',{
				params : {
					city : decodeURIComponent(city),
					keyword : decodeURIComponent(keyword),
				}
			})
			if(res.status===200){
				return {
					type    : decodeURIComponent(type),
					city    : decodeURIComponent(city),
					keyword : decodeURIComponent(keyword),
					product : {
						name : res.data.product.name,
						rate : Number(res.data.product.biz_ext.rating),
						cost : Number(res.data.product.biz_ext.cost),
						addr : res.data.product.address,
						phone: res.data.product.tel,
						time : '周一至周日 10:30-21:00',
						photo: res.data.product.photos.length?res.data.product.photos[0].url:''
					},
					more    : res.data.more,
					login   : res.data.login
				}
			}else {
				return {
					type    : decodeURIComponent(type),
					city    : decodeURIComponent(city),
					keyword : '',
					product : {},
					more    : [],
					login   : false
				}
			}
		}
}
</script>

<style lang="scss">
	@import '../assets/css/detail/index.scss'
</style>