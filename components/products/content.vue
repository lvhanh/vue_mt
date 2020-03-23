<template>
	<div class="content">
		<div class="list" v-for="(item,index) in product" :key="index">
			<img :src="item.photo" />
		</div>
	</div>
</template>

<script>
export default {
	props : {
		product : {
			type : Array,
			default : []
		}
	}
}
</script>

<style>

</style>