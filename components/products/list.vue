<template>
	<div class="m-list left-width">
		<div class="m-sort">
			<msort />
		</div>
		<div class="m-content">
			<mcontent 
			:product="newlist" />
		</div>
	</div>
</template>

<script>
import Msort from './sort'
import Mcontent from './content'
export default {
	components : {
		Msort,
		Mcontent
	},
	data(){
		return {
			newlist : []
		}
	},
	props : {
		list : {
			type : Array,
			default : []
		}
	},
	mounted : function(){
		this.newlist = this.list
	}
}
</script>

<style>

</style>