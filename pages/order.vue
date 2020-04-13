<template>
  <div class="page-order">
    <el-row>
      <el-col
        :span="4"
        class="navbar">
        <h3>我的美团</h3>
        <dl>
          <dt>我的订单</dt>
          <dd>全部订单<i class="el-icon-arrow-right"/></dd>
          <dd>待付款<i class="el-icon-arrow-right"/></dd>
          <dd>待使用<i class="el-icon-arrow-right"/></dd>
        </dl>
        <dl>
          <dt>我的收藏</dt>
          <dd>收藏的商家<i class="el-icon-arrow-right"/></dd>
          <dd>收藏的团购<i class="el-icon-arrow-right"/></dd>
        </dl>
        <dl>
          <dt>抵用券</dt>
          <dd>可用券<i class="el-icon-arrow-right"/></dd>
          <dd>失效券<i class="el-icon-arrow-right"/></dd>
        </dl>
        <dl>
          <dt>个人信息</dt>
          <dd>账户设置<i class="el-icon-arrow-right"/></dd>
        </dl>
      </el-col>
      <el-col
        :span="19"
        class="table">
        <el-tabs
          v-model="activeName"
          @tab-click="handleClick">
          <el-tab-pane
            label="全部订单"
            name="all">
            <mlist :cur="cur"/>
          </el-tab-pane>
          <el-tab-pane
            label="待付款"
            name="unpay">
            <mlist :cur="cur"/>
          </el-tab-pane>
          <el-tab-pane
            label="待评价"
            name="unreplay">
            <mlist :cur="cur"/>
          </el-tab-pane>
        </el-tabs>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Mlist from '../components/order/list'
export default {
	components : {
		Mlist
	},
	data() {
    return {
      activeName: 'all',
      list: [],
      cur: []
    }
  },
	methods : {
		handleClick(tab){
      this.activeName = tab.name
      if(this.activeName === 'unpay'){
        this.cur = this.list.filter(item=>{
          return item.status === 0
        })
      }
      else if(this.activeName === 'unreplay'){
        this.cur = this.list.filter(item=>{
          return item.status === 1
        })
      }else if(this.activeName === 'all'){
        this.cur = this.list
      }
		}
  },
  mounted(){
    this.cur = this.list
  },
	async asyncData(ctx){
    let res = await ctx.$axios.post('/order/getOrder')
    if(res.status===200){
      return {
        list : res.data.list.map(item=>{
          return {
            name : item.cartName,
            imgs : item.imgs,
            count: item.count,
            total: item.total,
            status: item.status,
            statusTxt: item.status===0?'未付款':'已付款'
          }
        })
      }
    }
	}
}
</script>

<style lang="scss">
	@import '../assets/css/order/index.scss'
</style>