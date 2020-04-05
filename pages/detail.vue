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
		<div class="m-list">
			<h3 class="title">
				更多商家
			</h3>
			<div class="list">
				<mlist
				:more="more" v-if="login" />
				<div class="login" v-if="!login">
					<img 
					src="//p0.meituan.net/codeman/56a7d5abcb5ce3d90fc91195e5b5856911194.png" 
					alt="登录查看" />
					<span>请登录后查看详细团购优惠</span>
					<el-button type="primary" round
					@click="goLogin">立即登录</el-button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import axios from 'axios'
import Mcrumb from '../components/detail/crumb'
import Mtitle from '../components/detail/title'
import Mlist from '../components/detail/list'
export default {
    components : {
			Mcrumb,
			Mtitle,
			Mlist
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
					more    : res.data.more.length?res.data.more.map(item=>{
						return {
							name : item.name,
							cost : Number(item.biz_ext.cost),
							photo: item.photos.length?item.photos[0].url:''
						}
					}):[],
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
		},
		methods : {
			goLogin(){
				this.$router.push({
					path : 'login',
					query:{redirect: location.hostname}
				})
			}
		}
}
</script>

<style lang="scss">
	@import '../assets/css/detail/index.scss'
</style>