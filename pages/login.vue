<template>
	<div class="login">
		<div class="header">
			<div class="img">
				<img src="http://s0.meituan.net/bs/file/?f=fe-sso-fs:build/assets/sp-retina.b95a7dd.png" />
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
					<div class="tip">{{ msg }}</div>
					<span>账号登录</span>
					<el-input placeholder="请输入用户名" class="input">
						<template slot="prepend">+86></template>
					</el-input>
					<el-input placeholder="请输入密码" class="input">
						<template slot="prepend">
							<i class="el-icon-lock"></i>
						</template>
					</el-input>
					<a href="">忘记密码？</a>
					<button class="button">登录</button>
					<p class="signup">还没有账号？
						<a href="">免费注册</a>
					</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	layout : 'blank',
	data(){
		return {
			form : {
				username : '',
				email 	 : ''
			},
			msg  : ''
		}
	}
}
</script>

<style lang="scss">
	@import '../assets/css/login/index.scss'
</style>