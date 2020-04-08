<template>
	<div class="lists">
		<h4 class="menu">
			{{ more.length }}个优惠商品
		</h4>
		<div class="content" v-for="(item,index) in more" :key="index">
			<img :src="item.photo">
			<div class="text">
				<div class="name">{{ item.name }}</div>
				<div class="price">
					<b>￥</b>
					<span>{{ item.cost }}</span>
				</div>
			</div>
			<div class="button">
				<el-button type="primary" round
				@click="toCart(item)">立即抢购</el-button>
			</div>
		</div>
	</div>
</template>

<script>
import axios from 'axios'
export default {
	props : {
		more : {
			type : Array,
			default : []
		}
	},
	methods : {
		toCart(items){
			let year = new Date().getFullYear().toString().substr(0,2)
			let random = Math.random()*1000000
			let id = `${year}${random.toString().substr(0,5)}`
			let _this = this
			axios.post('/cart/createCart',{
				cartNo : id,
				price : items.cost,
				cartName : items.name
			}).then(function(res){
				if(res.status===200&&res.data.code===0){
					_this.$router.push({path: 'cart',query: {id: id}})
				}
			})
		}
	}
}
</script>

<style>

</style>