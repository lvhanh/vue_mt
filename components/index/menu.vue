<template>
	<div class="m-menu">
		<dl class="menu"
		@mouseleave="leave">
			<dt>全部分类</dt>
			<dd
			v-for="(item,index) in $store.state.menu.menu.menu"
			:key="index"
			@mouseenter="enter">
				<i :class="item.type"/>
				<span class="menuList">{{ item.name }}</span>
				<span class="arrow">></span>
			</dd>
		</dl>
		<div class="detail"
		v-if="kind"
		@mouseover="childEnter"
		@mouseleave="childLeave">
			<dl v-for="(item,index) in hoverTitle.child"
			:key="index">
				<h3>{{ item.title }}<span>更多></span></h3>
				<dd v-for="(i,index) in item.child" :key="index">
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
			curKind : ''
		}
	},
	// created : function(){
	// 	this.menu = this.$store.state.menu.menu.menu
	// 	console.log(this.menu)
	// },
	computed : {
		hoverTitle : function(){
			let kinds=this.kind
			return this.$store.state.menu.menu.menu.filter(function(x){
				return kinds === x.type
			})[0]
		}
	},		
	methods : {
		enter : function(e){
			this.kind=e.currentTarget.querySelector('i').getAttribute("class")
			this.curKind = this.kind
			//console.log(this.menu)
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