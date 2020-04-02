<template>
	<div class="title">
		<div class="left">
			<div class="name">
				<span>{{ product.name }}</span>
				<div class="rating">
					<el-rate
					v-model="product.rate"
					disabled
					show-score
					text-color="#ff9900">
					</el-rate>
					<span>人均￥{{ product.cost }}</span>
				</div>
			</div>
			<div class="text">
				<div class="addr normal">地址：{{ product.addr }}</div>
				<div class="phone normal">电话：{{ product.phone }}</div>
				<div class="time normal">营业时间：{{ product.time }}</div>
			</div>
		</div>
		<div class="right">
			<img :src="product.photo" />
		</div>
	</div>
</template>

<script>
export default {
	props : {
		product : {
			type : Object,
			default: {}
		}
	},
	mounted(){
		console.log(this.product)
	}
}
</script>

<style>

</style>