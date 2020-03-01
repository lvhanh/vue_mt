<template>
	<div class="m-slider">
		<div class="top">
			<div class="block">
    		<el-carousel>
      		<el-carousel-item v-for="(item,index) in Epic" :key="index">
        		<img :src="item.url" />
      		</el-carousel-item>
    		</el-carousel>
			</div>
			<div class="relax">
				<img src="http://p0.meituan.net/codeman/e473bb428f070321269b23370ff02ba956209.jpg" />
			</div>
			<div class="login">
				<div class="head-img">
					<img src="http://s0.meituan.net/bs/fe-web-meituan/e350c4a/img/avatar.jpg"/>
					<span>Hi! 你好</span>
				</div>
				<div class="button">
					<button>注册</button>
					<button>登录</button>
				</div>
			</div>
		</div>
		<div class="bottom">
			<div class="hotel">
				<img src="http://p1.meituan.net/codeman/8cce56c467a17e04f3094d1e455462a0132772.png"/>
			</div>
			<div class="study">
				<img src="http://p1.meituan.net/codeman/16442c19da1f1c4544f794e29d99c92051716.jpg"/>
			</div>
			<div class="bussiness">
				<img src="http://p1.meituan.net/codeman/5b21cddb4bb1cbc3a9c3bce0f726c75940469.jpg"/>
			</div>
			<div class="download">
				<div class="top-img">
					<img src="http://s1.meituan.net/bs/fe-web-meituan/60ac9a0/img/download-qr.png"/>
				</div>
				<div class="word">
					<h3>美团APP手机版</h3>
					<span>1元起</span>吃喝玩乐
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data(){
		return {
			Epic : [{
				path : '/',
				url	 : 'http://p0.meituan.net/codeman/daa73310c9e57454dc97f0146640fd9f69772.jpg'
			},{
				path : '/',
				url	 : 'http://p1.meituan.net/codeman/826a5ed09dab49af658c34624d75491861404.jpg'
			},{
				path : '/',
				url  : 'http://p0.meituan.net/codeman/a97baf515235f4c5a2b1323a741e577185048.jpg'
			},{
				path : '/',
				url  :'http://p0.meituan.net/codeman/33ff80dc00f832d697f3e20fc030799560495.jpg'
			}]
		}
	}
}
</script>

<style>

</style>