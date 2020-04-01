<template>
    <div class="m-detail">
			<mcrumb
			:city="city"
			:keyword="keyword"
			:type="type" />
		</div>
</template>

<script>
import axios from 'axios'
import Mcrumb from '../components/detail/crumb'
export default {
    components : {
			Mcrumb
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
					product : res.data.product,
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

</style>