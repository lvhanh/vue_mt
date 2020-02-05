<template>
	<div class="user">
		<template v-if="isLogin == 1">
			欢迎！<span>{{ user }}</span>
		</template>
		<template v-else>
			<nuxt-link to="/login" class="login">立即登录</nuxt-link>
			<nuxt-link to="/register" class="register">注册</nuxt-link>
		</template>
	</div>
</template>

<script>
export default {
	data(){
		return {
			user : '',
			isLogin : 0
		}
	}
}
</script>

<style>
</style>