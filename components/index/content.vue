<template>
	<div class="m-content">
		<div class="quality">
			<div class="tab">
				<ul>
					<li class="mainTitle nav-item">有格调</li>
					<li v-for="(item,index) in list" :key="index"
					class="title nav-item"
					@mouseenter="enter(item)">
						{{ item.name }}
						<div v-if="item.type === kind">
							<span class="select"></span>
						</div>
					</li>
				</ul>
			</div>
			<div class="area"
			v-if="kind">
				<div class="lists"
				v-for="(item,index) in hover.list_items" :key="index">
					<img :src="item.url" />
					<div class="text">
						<div class="store">{{ item.store }}</div>
						<div class="intru">{{ item.intru }}</div>
						<div class="price-address">
							<span class="price">{{ item.price }}</span>
							<span class="address">{{ item.address }}</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data(){
		return {
			kind : 'all',
			child : [{
				type : 'all',
				name : '全部'
			},{
				type : 'jucan',
				name : '约会聚餐'
			}],
			list : [{
				type : 'all',
				name : '全部',
				list_items:[{
					url 		: '//p1.meituan.net/bbia/9df1f9c41362aaf62a5eb4c41c92637893449.jpg@368w_208h_1e_1c',
					store 	: '欧贝蛋糕（苏州分店）',
					intru 	: '提拉米苏卡布基诺重轻芝士抹茶芒果蓝莓草莓酸奶巧克力香草慕斯1个，约9英寸，圆形',
					price 	: '158',
					address : '观前街地区'
				},{
					url 		: '//p0.meituan.net/shopmainpic/42a4f4ad96e8a084ef19f3526b8fcaa9296126.jpg@368w_208h_1e_1c',
					store 	: '二姑娘生日婚礼庆典定制蛋糕',
					intru 	: '小天使蛋糕1个，约6英寸，圆形',
					price 	: '199',
					address : '景德路沿线'
				},{
					url 		: '//p0.meituan.net/bbia/850ce195a4db8d447644429ac6e32c20330100.jpg@368w_208h_1e_1c',
					store 	: '咔哆麦蛋糕',
					intru 	: '蛋糕29选1',
					price 	: '108',
					address : '火车站地区'
				},{
					url 		: '//p1.meituan.net/bbia/7a6c17a0a05cbe21f447bf20fb57b58266917.jpg@368w_208h_1e_1c',
					store 	: '储缘蛋糕（长江路店）',
					intru 	: '6英寸（一磅）升级版时尚手工蛋糕1个，约6英寸，圆型',
					price 	: '79',
					address : '木渎东区'
				},{
					url 		: '//p1.meituan.net/msmerchant/392bb3d2b9c7918141773e16f10897fa61660.jpg@368w_208h_1e_1c',
					store 	: '礼颂至品（新康花园店）',
					intru 	: '红丝绒圆舞曲1个，约6英寸，圆形',
					price 	: '108',
					address : '桐泾公园'
				},{
					url 		: '//p1.meituan.net/bbia/a5e9429515e29bae8a588a97b137a251407280.jpg@368w_208h_1e_1c',
					store 	: '克莉丝汀（何山桥店）',
					intru 	: '椰香心语8号（蛋糕）1个，约8号，圆',
					price 	: '193',
					address : '西环路沿线'
				}]
			},{
				type : 'jucan',
				name : '约会聚餐',
				list_items:[{
					url 		: '//p0.meituan.net/msmerchant/934922047bb7c77c428de2d6a1dfd3c0492637.jpg@368w_208h_1e_1c',
					store 	: '炉鱼（石路天虹店）',
					intru 	: '新款海鲈鱼套餐，建议2人使用',
					price 	: '抢光了',
					address : '石路地区'
				},{
					url 		: '//p1.meituan.net/msmerchant/ed6dc14956a81b47c666f07b51948835404489.jpg@368w_208h_1e_1c',
					store 	: '爱舍·梵小鲜·墨西哥小厨（龙湖店）',
					intru 	: '必吃双人套餐1份',
					price 	: '288',
					address : '塔园路'
				},{
					url 		: '//p1.meituan.net/msmerchant/0b26ed17fb4be9dd67b9f9d08510f1741181081.jpg@368w_208h_1e_1c',
					store 	: 'Alto Vino 峰酿西餐厅',
					intru 	: '经典二人餐1份，提供免费WiFi',
					price 	: '388',
					address : '三香路沿线'
				},{
					url 		: '//p1.meituan.net/msmerchant/0b26ed17fb4be9dd67b9f9d08510f1741181081.jpg@368w_208h_1e_1c',
					store 	: 'Alto Vino 峰酿西餐厅',
					intru 	: '经典二人餐1份，提供免费WiFi',
					price 	: '388',
					address : '三香路沿线'
				},{
					url 		: '//p1.meituan.net/msmerchant/0b26ed17fb4be9dd67b9f9d08510f1741181081.jpg@368w_208h_1e_1c',
					store 	: 'Alto Vino 峰酿西餐厅',
					intru 	: '经典二人餐1份，提供免费WiFi',
					price 	: '388',
					address : '三香路沿线'
				},{
					url 		: '//p1.meituan.net/msmerchant/0b26ed17fb4be9dd67b9f9d08510f1741181081.jpg@368w_208h_1e_1c',
					store 	: 'Alto Vino 峰酿西餐厅',
					intru 	: '经典二人餐1份，提供免费WiFi',
					price 	: '388',
					address : '三香路沿线'
				}]
			}]
		}
	},
	computed : {
		hover : function(){
			let _this = this
			return this.list.filter(function(x){
				return _this.kind === x.type
			})[0]
		}
	},
	methods : {
		enter : function(x){
			this.kind = x.type
		}
	}
}
</script>

<style>

</style>