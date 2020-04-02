<template>
	<div class="search-panel">
		<div class="searchBar">
			<el-row>
				<el-col :span="6" class="mt-img">
					<nuxt-link to="/">
						<img src="//s0.meituan.net/bs/fe-web-meituan/fa5f0f0/img/logo.png" alt="美团">
					</nuxt-link>
				</el-col>
				<el-col :span="12">
					<div class="input_btn">
						<el-input
						placeholder="搜索商家和地点"
						v-model="search" class="input"
						@focus="Focus"
						@blur="blur"
						@input="input"
						@keyup.enter.native="submit" />
						<el-button type="primary" icon="el-icon-search" class="button"
						@click="button" />
						<dl class="noinput" v-if="isFocus">
							<dt>热门搜索</dt>
							<dd v-for="(item,index) in this.$store.state.menu.hotPlace.slice(0,5)" :key="index">
								<!-- <router-link :to="{path: 'product',query: {city: city,keyword: item.name}}">{{ item.name }}</router-link> -->
								<a :href="'/product?city='+city+'&keyword='+item.name">{{ item.name }}</a>
							</dd>
						</dl>
						<dl class="hasInput" v-if="isInput">
							<dd v-for="(item,index) in searchList" :key="index">
								<!-- <router-link :to="{path: '/product',query: {city: city,keyword: item.name}}">{{ item.name }}</router-link> -->
								<a :href="'/product?city='+city+'&keyword='+item.name">{{ item.name }}</a>
							</dd>
						</dl>
					</div>
				</el-col>
				<el-col :span="6"></el-col>
			</el-row>
		</div>
		<div class="search-list">
			<ul>
				<li class="takeout"><nuxt-link to="/">美团外卖</nuxt-link></li>
				<li class="mymovie"><nuxt-link to="/">猫眼电影</nuxt-link></li>
				<li class="hotel"><nuxt-link to="/">美团酒店</nuxt-link></li>
				<li class="apartment"><nuxt-link to="/">民宿/公寓</nuxt-link></li>
				<li class="business"><nuxt-link to="/">商家入驻</nuxt-link></li>
				<li class="benefit"><nuxt-link to="/">美团公益</nuxt-link></li>
			</ul>
		</div>
	</div>
</template>

<script>
import _ from 'lodash'
import axios from 'axios'
export default {
	data(){
		return{
			search 		 : '',
			isFocus		 : false,
			hotList 	 : [],
			searchList : [],
			city       : ''
		}
	},
	created : function(){
		let _this = this
			if(process.client){
            _this.city = window.sessionStorage.getItem('changeCity')?window.sessionStorage.getItem('changeCity'):_this.$store.state.city.position.city
			}
	},
	watch : {
		'$route' (to,from){
			this.$router.go(0)
		}
	},
	computed:{
		isFocused : function(){
			return this.isFocus && !this.search;
		},
		isInput : function(){
			return this.isFocus && this.search;
		}
	},
	methods:{
		Focus : function(){
			this.isFocus = true;
		},
		blur : function(){
			let _this = this
			setTimeout(function(){
				_this.isFocus = false
			},200)
		},
		input : _.debounce(function(){
			let _this = this
			axios.get('/search/top',{
				params : {
					input : _this.search,
					city  : _this.city.replace('市','')
				}
			}).then(function(res){
				_this.searchList = res.status===200?res.data.top.slice(0,5):[]
			})
		},200),
		button : function(){
			let _search = this.search,
				_city   = this.city
			location.href=`/product?city=${_city}&keyword=${_search}`
			//this.$router.push({path: 'product',query: {city: _city,keyword: _search}})
		},
		submit : function(){
			this.button()
		}
	}
}
</script>

<style lang="scss">

</style>