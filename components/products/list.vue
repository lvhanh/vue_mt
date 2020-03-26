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
				<dd class="grade normal" @click="change('rate')">评价最高</dd>
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
			listup  : [],
			listdown: [],
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
		this.newlist = this.list
		this.num = 1
	},
	methods : {
		down(item){
			this.listdown=[]
			this.listdown=this.list.sort((a,b)=>a[item]-b[item]).reverse()
			// 类名做参数用[]
		},
		up(item){
			this.listup=[]
			this.listup=this.list.sort((a,b)=>a[item]-b[item])
		},
		change(items){
			if(items==='cost'){
				if(this.num===1){
					this.num=3
					this.down(items)
					this.newlist = this.listdown
				}
				else if(this.num===3){
					this.num=2
					this.up(items)
					this.newlist = this.listup
				}
				else if(this.num===2){
					this.num=3
					this.down(items)
					this.newlist = this.listdown
				}
			}else {
				this.down(items)
				this.newlist = this.listdown
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