<template>
	<dl class="tab">
		<dt @mouseenter="enter"
		@mouseleave="leave">{{ name }}<i class="el-icon-caret-bottom" /></dt>
		<dd v-if="active" @mouseenter="enter" @mouseleave="leave">
			<h3>{{ name }}</h3>
			<span v-for="(item,index) in list" :key="index">{{ item }}</span>
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
		enter : _.debounce(function(){
			this.active = true
		},400),
		leave : _.debounce(function(){
			this.active = false
		},400)
	}
}
</script>

<style>

</style>