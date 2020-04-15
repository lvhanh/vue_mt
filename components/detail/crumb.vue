<template>
	<div class="crumb">
		<el-breadcrumb separator-class="el-icon-arrow-right">
			<el-breadcrumb-item :to="{ path: 'home' }">{{city.replace('市','')}}美团</el-breadcrumb-item>
			<el-breadcrumb-item>{{city.replace('市','')}}{{type}}</el-breadcrumb-item>
      <el-breadcrumb-item
      @click="click">{{city.replace('市','')}}{{decodeURIComponent(keyword)}}</el-breadcrumb-item>
    </el-breadcrumb>
	</div>
</template>

<script>
export default {
	props : {
		city : {
			type : String,
			default : ''
		},
		keyword:{
			type : String,
			default : ''
		},
		type : {
			type : String,
			default : ''
		}
	},
	methods : {
		click : function(){
      this.reload()
    }
  }
}
</script>

<style>

</style>