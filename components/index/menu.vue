<template>
	<div class="m-menu">
		<dl class="menu"
		@mouseleave="leave">
			<dt>全部分类</dt>
			<dd
			v-for="(item,index) in menu"
			:key="index"
			@mouseenter="enter">
				<i :class="item.type" />
				<span v-for="(i,index) in item.title" :key="index" class="menuList">
					<nuxt-link to="/">{{ i.tmenu_name }}</nuxt-link>
					<span v-if="i.num > 1"> / </span>
				</span>
				<span class="arrow">></span>
			</dd>
		</dl>
		<div class="detail"
		v-if="kind"
		@mouseover="childEnter"
		@mouseleave="childLeave">
			<dl v-for="(item,index) in hoverTitle.child"
			:key="index">
				<h3>{{ item.menu_name }}<span>更多></span></h3>
				<dd v-for="(i,index) in item.child_name" :key="index">
					{{ i }}
				</dd>
			</dl>
		</div>
	</div>
</template>

<script>
export default {
	data(){
		return {
			kind : '',
			curKind : '',
			menu : [{
				type : 'food',
				title:[{
						num 			 : 1,
						tmenu_name : '美食'
					}],
				child:[{
					menu_name : '美食',
					child_name: ['代金券','甜点食品','火锅','自助餐','小吃快餐','日韩料理']
				}]
			},
			{
				type : 'takeout',
				title: [{
						num 		   : 1,
						tmenu_name : '外卖'
						}],
				child:[{
					menu_name : '外卖',
					child_name: ['美团外卖']
				}]
			},
			{
				type : 'hotel',
				title:[{
						num 			 : 1,
						tmenu_name : '酒店'}],
				child:[{
					menu_name : '酒店星级',
					child_name: ['经济型','舒适/三星','高档/四星','豪华/五星']
				}]	
			},
			{
				type : 'apartment',
				title:[{
						num 			 : 1,
						tmenu_name : '榛果民宿'
					}],
				child:[{
					menu_name : '热门城市',
					child_name: ['上海','成都','北京','重庆','南京']
				},{
					menu_name : '热门房源',
					child_name: ['复式Loft','别墅']
				}]	
			},
			{
				type : 'ticket',
				title:[{
						num 			 : 2,
						tmenu_name : '机票'
					},
					{
						num				 : 1,
						tmenu_name : '火车票'
					}],
				child:[{
					menu_name : '机票',
					child_name: ['国内机票','国际/港澳台机票']
				},{
					menu_name : '火车票',
					child_name: ['火车票']
				}]	
			}]
		}
	},
	computed : {
		hoverTitle : function(){
			let kinds=this.kind
			return this.menu.filter(function(x){
				return kinds === x.type
			})[0]
		}
	},		
	methods : {
		enter : function(e){
			this.kind=e.currentTarget.querySelector('i').getAttribute("class")
			this.curKind = this.kind
			//console.log(this.curKind)
		},
		leave : function(){
			let _this = this
			this.timer=setTimeout(function(){
				_this.kind=''
			},200)
		},
		childEnter : function(){
			//this.kind = this.curKind
			clearTimeout(this.timer)
		},
		childLeave : function(){
			this.kind=''
		}
	}
}
</script>

<style>

</style>