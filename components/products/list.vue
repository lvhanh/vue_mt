<template>
	<div class="m-list left-width">
		<div class="m-sort">
			<msort />
		</div>
		<div class="m-content">
			<mcontent 
			:product="list" />
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
	props : {
		list : {
			type : Array,
			default : []
		}
	}
}
</script>

<style>

</style>