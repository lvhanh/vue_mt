<template>
	<div class="hot">
		热门城市：
		<ul v-for="item in hotCity" :key="item.id">
			<li class="hotCity" 
			@click="click" @mouseenter="enter(item)">{{ item.value }}</li>
		</ul>
	</div>
</template>

<script>
import axios from 'axios'
export default {
	data(){
		return {
			hotCity   : [],
			enterCity : ''
		}
	},
	mounted : function(){
		let _this = this
		axios.get('/city/hotCity').then(function(res){
			if(res.status===200){
				_this.hotCity = res.data.hotCity.map(item=>{
					return {
						id    : item.id,
						value : item.name==='市辖区'?item.province:item.name
					}
				})
			}
		})
	},
	methods : {
		click : function(){
			window.sessionStorage.setItem('changeCity',this.enterCity)
			location.href='/'
		},
		enter : function(item){
			this.enterCity = item.value
		}
	}
}
</script>

<style>

</style>