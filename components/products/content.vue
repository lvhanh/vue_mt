<template>
	<div class="content">
		<div class="list" id="list" v-for="(item,index) in product" :key="index">
			<div class="img">
				<img :src="item.photo" />
			</div>
			<div class="text">
				<div class="name">
					<!-- <a :href="'/detail?city='+city+'&keyword='+encodeURIComponent(item.name)+'&type='+item.type">{{ item.name }}</a> -->
					<router-link :to="{path: 'detail',query: {city: city,keyword: item.name,type: item.type}}">{{ item.name }}</router-link>
				</div>
				<div class="rate">
					<el-rate
					v-model="item.rate"
					disabled
					show-score
					text-color="#ff9900">
					</el-rate>
					<p v-if="item.rate>4">很好</p>
					<p v-else-if="item.rate>3">不错</p>
					<p v-else>差</p>
				</div>
				<div class="address">
					<span>{{ item.type }}</span>
					<span>{{ item.adr }}</span>
				</div>
				<div class="price">
					<span>人均{{ item.cost }}</span>
				</div>
				<div class="tag">
					{{ item.tag	}}
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props : {
		product : {
			type : Array,
			default : []
		},
		city : {
			type : String,
			default: ''
		}
	}
}
</script>

<style>

</style>