<template>
	<div class="m-list left-width">
		<div class="m-sort">
			<dl>
				<dd class="smart normal">智能排序</dd>
				<dd v-if="num===1" class="price normal" @click="change('cost')">价格排序
					<div>
						<div class="tri" />
						<div class="tri-re" />
					</div>
				</dd>
				<dd v-if="num===2" class="price-up normal" @click="change('cost')">价格最低
					<div>
						<div class="tri" />
						<div class="tri-re" />
					</div>
				</dd>
				<dd v-if="num===3" class="price-down normal" @click="change('cost')">价格最高
					<div>
						<div class="tri" />
						<div class="tri-re" />
					</div>
				</dd>
				<dd class="popular normal">人气最高</dd>
				<dd class="grade normal">评价最高</dd>
			</dl>
		</div>
		<div class="m-content">
			<mcontent 
			:product="newlist.slice((currentPage-1)*pageSize,currentPage*pageSize)" />
		</div>
		<div class="pagination">
			<el-pagination
			background
			@size-change="handleSizeChange"
			@current-change="handleCurrentChange"
			:current-page="currentPage"
			:page-size="pageSize"
			layout="prev, pager, next"
			:total="newlist.length">
			</el-pagination>
		</div>
	</div>
</template>

<script>
import Mcontent from './content'
export default {
	components : {
		Mcontent
	},
	data(){
		return {
			newlist : [],
			arr     : [],
			num : 1,
			pageSize : 10,
			currentPage : 1
		}
	},
	props : {
		list : {
			type : Array,
			default : []
		}
	},
	mounted : function(){
		this.arr = this.list
		this.newlist = this.list
		this.num = 1
		console.log(this.arr)
	},
	methods : {
		down(item){
			this.newlist=[]
			this.newlist=this.arr.sort((a,b)=>a.item-b.item).reverse()
		},
		up(item){
			this.newlist=[]
			this.newlist=this.arr.sort((a,b)=>a.item-b.item)
		},
		change(items){
			if(items==='cost'){
				if(this.num===1){
					this.num=3
					this.down('cost')
					console.log(this.newlist)
					console.log(this.arr)
				}
				else if(this.num===3){
					this.num=2
					this.up('cost')
					console.log(this.newlist)
					console.log(this.arr)
				}
				else if(this.num===2){
					this.num=3
					this.down('cost')
					console.log(this.newlist)
					console.log(this.arr)
				}
			}
		},
		handleSizeChange(size){
			this.pageSize = size
		},
		handleCurrentChange(currentPage){
			this.currentPage = currentPage
		}
	}
}
</script>

<style>

</style>