<template>
	<dl>
		<dd class="smart normal">智能排序</dd>
		<dd v-if="num===1" class="price normal" @click="price">价格排序
			<div>
				<div class="tri" />
				<div class="tri-re" />
			</div>
		</dd>
		<dd v-if="num===2" class="price-up normal" @click="price">价格最低
			<div>
				<div class="tri" />
				<div class="tri-re" />
			</div>
		</dd>
		<dd v-if="num===3" class="price-down normal" @click="price">价格最高
			<div>
				<div class="tri" />
				<div class="tri-re" />
			</div>
		</dd>
		<dd class="popular normal">人气最高</dd>
		<dd class="grade normal">评价最高</dd>
	</dl>
</template>

<script>
export default {
	data(){
		return {
			num : 1,
			newlist : []
		}
	},
	mounted : function(){
		this.num = 1
	},
	computed: {
		
	},
	methods : {
		price(){
			if(this.num===1){
				this.num=3
			}
			else if(this.num===3){
				this.num=2
			}
			else if(this.num===2){
				this.num=3
			}
		}
	}
}
</script>

<style>

</style>