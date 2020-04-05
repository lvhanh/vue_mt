<template>
	<div class="lists">
		<h4 class="menu">
			{{ more.length }}个类似商家
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
				>立即抢购</el-button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props : {
		more : {
			type : Array,
			default : []
		}
	},
	mounted(){
		console.log(this.more)
	}
}
</script>

<style>

</style>