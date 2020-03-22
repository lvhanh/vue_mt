<template>
	<dl>
		<dd class="smart normal">智能排序</dd>
		<dd v-if="num===1" class="price normal">价格排序
			<div>
				<div class="tri" />
				<div class="tri-re" />
			</div>
		</dd>
		<dd v-if="num===2" class="price-up normal">价格最低
			<div class="tri" />
			<div class="tri-re" />
		</dd>
		<dd v-if="num===3" class="price-down normal">价格最高
			<div class="tri" />
			<div class="tri-re" />
		</dd>
		<dd class="popular normal">人气最高</dd>
		<dd class="grade normal">评价最高</dd>
	</dl>
</template>

<script>
export default {
	data(){
		return {
			num : 1
		}
	}
}
</script>

<style>

</style>