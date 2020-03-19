<template>
    <div class="crumb">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">{{city.replace('市','')}}美团</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/product?city='+city+'&keyword='+keyword}">{{city.replace('市','')}}{{decodeURIComponent(keyword)}}</el-breadcrumb-item>
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
            this.$router.go(0)
        }
    }
}
</script>

<style>

</style>