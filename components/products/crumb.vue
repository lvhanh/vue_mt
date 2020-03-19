<template>
    <div class="crumb">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">{{city.replace('市','')}}美团</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/product?city='+decodeURIComponent(city)+'&keyword='+decodeURIComponent(keyword)}"
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
        keyword : {
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