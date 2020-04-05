<template>
	<div class="login">
		<div class="header">
			<div class="img">
				<a href="/" class="logo"></a>
			</div>
		</div>
		<div class="content">
			<div class="left">
				<div class="b-img">
					<img src="//s0.meituan.net/bs/file/?f=fe-sso-fs:build/page/static/banner/www.jpg" />
				</div>
			</div>
			<div class="right">
				<div class="form">
					<div class="tip" :class="{active:msg}">{{ msg }}</div>
					<span>账号登录</span>
					<el-input placeholder="请输入用户名" class="input"
					v-model="form.username">
					</el-input>
					<el-input placeholder="请输入密码" class="input"
					v-model="form.pwd" @keyup.enter.native="Login">
					</el-input>
					<a href="">忘记密码？</a>
					<button class="button"
					@click="Login">登录</button>
					<p class="signup">还没有账号？
						<router-link to="/register">免费注册</router-link>
					</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import axios from 'axios'
import Crypto from 'crypto-js'
import _ from 'lodash'
export default {
	layout : 'blank',
	data(){
		return {
			form : {
				username : '',
				pwd 	 : ''
			},
			msg  : ''
		}
	},
	methods : {
		Login : function(){
			let username = this.form.username,
					password = this.form.pwd,
					msg		   = this.msg,
					_this 	 = this
			axios.post('/users/signin',{
				username : encodeURIComponent(username),
				password : Crypto.MD5(password).toString()
			}).then(function(res){
				if(res.status===200){
					_this.msg = ''
					if(res.data&&res.data.code===0){
						clearTimeout(_this.timer)
						let hostname = _this.$route.query.redirect
						if(location.name = hostname){
							_this.$router.go(-1)
						}else{
							_this.$router.push({path : '/'})
						}
					}else{
						_this.msg = res.data.msg
						_this.timer = setTimeout(function(){
							_this.msg = ''
						},2000)
					}
				}else{
					_this.msg = `连接服务器出错，${res.status}`
				}
			})
		}
	}
}
</script>

<style lang="scss">
	@import '../assets/css/login/index.scss'
</style>