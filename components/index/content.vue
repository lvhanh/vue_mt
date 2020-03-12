<template>
	<div class="m-content">
		<div class="quality">
			<div class="tab">
				<ul>
					<li class="mainTitle nav-item">有格调</li>
					<li v-for="(item,index) in child" :key="index"
					class="title nav-item"
					@mouseenter="enter(item)">
						{{ item.name }}
						<div v-if="item.type === kind">
							<span class="select"></span>
						</div>
					</li>
				</ul>
			</div>
			<div class="area"
			v-if="kind">
				<div class="lists"
				v-for="(item,index) in list" :key="index">
					<img :src="item.url" class="img" />
					<div class="text">
						<div class="store">{{ item.store }}</div>
						<div class="intru">{{ item.intru }}</div>
						<div class="price-address">
							<span class="price">￥{{ item.price }}</span>
							<span class="address">{{ item.address }}</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import axios from 'axios'
export default {
	data(){
		return {
			kind : 'all',
			child : [{
				type : 'all',
				name : '全部'
			},{
				type : 'part',
				name : '约会聚餐'
			},{
				type : 'spa',
				name : '丽人SPA'
			},{
				type : 'movie',
				name : '电影演出'
			},{
				type : 'travel',
				name : '品质出游'
			}],
			list : []
		}
	},
	mounted : function(){
		let _this = this
		axios.get('/search/resultsByKeywords',{
				params: {
					city    : _this.$store.state.city.position.city.replace('市',''),
					keyword : 'all'
				}
			}).then(function(res){
				if(res.status===200){
					let pois = res.data.pois.filter(item=>item.photos.length>0)
					.map(item=>{
						return {
							url    : item.photos[0].url,
							store  : item.name,
							intru  : item.type,
							price  : item.biz_ext.cost.length?item.biz_ext.cost:'暂无',
							address: item.address
						}
					}).slice(0,6)
					_this.list = pois
				}
			})

	},
	methods : {
		enter : function(x){
			this.kind = x.type
			let keyword = this.kind,
				_this   = this
			axios.get('/search/resultsByKeywords',{
				params: {
					city    : _this.$store.state.city.position.city.replace('市',''),
					keyword : keyword
				}
			}).then(function(res){
				if(res.status===200){
					let pois = res.data.pois.filter(item=>item.photos.length>0)
					.map(item=>{
						return {
							url    : item.photos[0].url,
							store  : item.name,
							intru  : item.type,
							price  : item.biz_ext.cost.length?item.biz_ext.cost:'暂无',
							address: item.address
						}
					}).slice(0,6)
					_this.list = pois
				}
			})
		}
	}
}
</script>

<style>

</style>