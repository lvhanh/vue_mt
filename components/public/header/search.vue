<template>
	<div class="search-panel">
		<div class="searchBar">
			<el-row>
				<el-col :span="6" class="mt-img">
					<nuxt-link to="//su.meituan.com">
						<img src="//s0.meituan.net/bs/fe-web-meituan/fa5f0f0/img/logo.png" alt="美团">
					</nuxt-link>
				</el-col>
				<el-col :span="12" class="input_btn">
					<div>
						<el-input
						placeholder="搜索商家和地点"
						v-model="search" class="input"
						@focus="Focus"
						@blur="blur"
						@input="input" />
						<el-button type="primary" icon="el-icon-search" class="button" />
						<dl class="noinput" v-if="isFocused">
							<dt>热门搜索</dt>
							<dd v-for="(item,index) in hotList" :key="index">
								<a href="/">{{ item }}</a>
							</dd>
						</dl>
						<dl class="hasInput" v-if="isInput">
							<dd v-for="(item,index) in searchList" :key="index">
								<a href="/">{{ item }}</a>
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
export default {
	data(){
		return{
			search 		 : '',
			isFocus		 : false,
			hotList 	 : ['火锅','火锅','火锅'],
			searchList : ['火锅','火锅','火锅']
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
			let _this = this;
			setTimeout(function(){
				_this.isFocus = false;
			},200)
		},
		input : function(){
			console.log(this.search)
		}
	}
}
</script>

<style lang="scss">

</style>