<template>
	<div class="register">
		<header>
			<div class="header">
				<div class="tp">
					<img src="//s0.meituan.net/bs/file/?f=fe-sso-fs:build/assets/logo.6a89007.png" />
				</div>
				<div class="login">
					<span>已有美团账号？</span>
					<nuxt-link to="/login">
						<button>登录</button>
					</nuxt-link>
				</div>
			</div>
		</header>
		<div class="formList">
			<form class="form">
				<div class="mheight">
					<label class="label">用户名</label>
					<input type="text" ref="username" class="input"
					v-model.trim="form.username" @blur="checkUser">
					<span class="status">{{ Msg.username }}</span>
				</div>
				<div class="mheight">
					<label class="label">邮箱</label>
					<input type="text" ref="email" class="input"
					v-model.trim="form.email" @blur="checkEmail">
					<span class="status">{{ Msg.email }}</span>
				</div>
				<div class="email">
					<input type="button" value="发送邮箱验证码"
					@click="verify">
					<span class="status">{{ Msg.expire }}</span>
				</div>
				<div class="mheight">
					<label class="label">验证码</label>
					<input type="text" ref="code" class="input"
					v-model.trim="form.code" @blur="checkCode">
					<span class="status">{{ Msg.code }}</span>
				</div>
				<div class="mheight">
					<label class="label">密码</label>
					<input type="password" ref="pwd" class="input"
					v-model.trim="form.pwd" @blur="checkPwd">
					<span class="status">{{ Msg.pwd }}</span>
				</div>
				<div class="mheight">
					<label class="label">确认密码</label>
					<input type="password" ref="ckpwd" class="input"
					v-model.trim="form.ckpwd" @blur="checkPwdO">
					<span class="status">{{ Msg.ckpwd }}</span>
				</div>
				<div class="registerButton">
					<input type="button" value="同意以下协议并注册"
					@click="checkLogin">
				</div>
				<div class="term">
					<a href="https://rules-center.meituan.com/rules-detail/4" target="_blank">
					《美团点评用户服务协议》
					</a>
					<a href="https://rules-center.meituan.com/rules-detail/2" target="_blank">
					《美团点评隐私政策》
					</a>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
import axios from 'axios'
export default {
	layout : 'blank',
	data(){
		return{
			Msg  : {
				username : '',
				pwd 		 : '',
				ckpwd		 : '',
				email		 : '',
				code		 : '',
				expire	 : ''
			},
			error : '',
			form  : {
				username : '',
				pwd 		 : '',
				ckpwd		 : '',
				email		 : '',
				code		 : ''
			}
		}
	},
	computed : {
		
	},
	methods :{
		validate : function(val,type){
			if (type === 'require'){
				return !!val
			}
			if (type === 'email'){
				return /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(val)
			}
		},
		checkUser : function(){
			if(!this.validate(this.form.username,'require')){
				return this.Msg.username = '请输入用户名'
			}else{
				return this.Msg.username = ''
			}
		},
		checkEmail : function(){
			if(!this.validate(this.form.email,'email')){
				return this.Msg.email='邮箱格式不正确'
			}else{
				return this.Msg.email = ''
				//console.log(this.validate((this.form.email),'require'))
			}
		},
		checkCode : function(){
			if(!this.validate(this.form.code,'require')){
				return this.Msg.code='请输入验证码'
			}else{
				return this.Msg.code = ''
			}
		},
		checkPwd : function(){
			if(this.form.pwd.length < 6){
				return this.Msg.pwd='密码不足6位'
			}else{
				return this.Msg.pwd = ''
			}
		},
		checkPwdO : function(){
			if(this.form.pwd !== this.form.ckpwd){
				return this.Msg.ckpwd='两次输入的密码不一致，请重新输入'
			}else{
				return this.Msg.ckpwd = ''
			}
		},
		checkLogin : function(){
			this.checkUser();
			this.checkEmail();
			this.checkCode();
			this.checkPwd();
			this.checkPwdO();
		},
		verify : function(){
			this.checkUser();
			this.checkEmail();
			let ckemail = this.Msg.email,
					ckuser 	= this.Msg.username,
					username= this.form.username,
					email		= this.form.email,
					_this 	= this
			if(!ckemail&&!ckuser){
				axios.post('/users/verify',{
					username : encodeURIComponent(username),
					email		 : email
				}).then(function(res){
					if(res.data&&res.status === 200&&res.data.code === 0){
						let count = 60
						_this.timer = setInterval(function(){
							_this.Msg.expire = `验证码已发送，${count--}秒后可重新获取`
						},1000)
						if(count === 0){
								_this.Msg.expire = ''
							}
					}else{
						_this.Msg.expire = data.msg
					}
				})
			}
		}
	}
}
</script>

<style lang="scss">
	@import '../assets/css/register/register.scss'
</style>