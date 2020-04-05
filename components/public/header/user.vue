<template>
	<div class="user">
		<template v-if="user">
			欢迎！<span>{{ user }}</span>
			<div @click="logout">[退出]</div>
		</template>
		<template v-else>
			<nuxt-link to="/login" class="login">立即登录</nuxt-link>
			<nuxt-link to="/register" class="register">注册</nuxt-link>
		</template>
	</div>
</template>

<script>
import axios from 'axios'
export default {
	data(){
		return {
			user : ''
		}
	},
	mounted : function(){
		let _this = this
		axios.get('/users/getUser').then(function(res){
			if(res.status===200){
				_this.user = res.data.user
			}
		})
	},
	methods : {
		logout : function(){
			let _this = this
			axios.get('/users/logout').then(function(res){
				if(res.status===200&&res.data&&res.data.code===0){
					_this.user = ''
				}
			})
			this.$router.go(0)
		}
	}
}
</script>

<style>
</style>