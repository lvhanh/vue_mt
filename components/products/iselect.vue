<template>
	<dl class="tab">
		<dt @mouseenter="enter"
		@mouseleave="leave">{{ name }}<i class="el-icon-caret-bottom" /></dt>
		<dd v-if="active" @mouseenter="childEnter" @mouseleave="leave" class="menu">
			<h3>{{ name }}</h3>
			<div class="item">
				<span v-for="(item,index) in list" :key="index">{{ item }}</span>
			</div>
		</dd>
	</dl>
</template>

<script>
import _ from 'lodash'
export default {
	props : {
		name : {
			type : String,
			default : ''
		},
		list : {
			type : Array,
			default : []
		}
	},
	data(){
		return {
			active : false
		}
	},
	methods : {
		enter : function(){
			this.active = true
		},
		leave : function(){
			let _this = this
			this.timer = setTimeout(function(){
				_this.active = false
			},200)
		},
		childEnter : function(){
			clearTimeout(this.timer)
		}
	}
}
</script>

<style>

</style>