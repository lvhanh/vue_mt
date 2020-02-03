<template>
	<div>
		<ul class="navFirst">
			<li>
				<nuxt-link to="/myMt">我的美团</nuxt-link>
				<ul class="navFirstDown">
					<li><nuxt-link to="/myList">我的订单</nuxt-link></li>
					<li><nuxt-link to="/myCollect">我的收藏</nuxt-link></li>
					<li><nuxt-link to="/myTicket">抵用券</nuxt-link></li>
					<li><nuxt-link to="/set">账户设置</nuxt-link></li>
				</ul>
			</li>
			<li><nuxt-link to="/myPhone">我的手机</nuxt-link></li>
		</ul>
	</div>
</template>