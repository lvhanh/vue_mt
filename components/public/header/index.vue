<template>
    <el-row :gutter="0" class="MyHeader">
    <el-col :span="6">
        <city />
    </el-col>
    <el-col :span="6">
        <user />
    </el-col>
    <el-col :span="12" class="nav">
        <navBar />
    </el-col>
</el-row>
</template>

<script>
import City from './city.vue'
import User from './user'
import navBar from './nav'
export default {
    components:{
        City,
        User,
        navBar
    }
}
</script>

<style lang="scss">
    @import '../../../assets/css/public/header/header.scss';
    @import '../../../assets/css/public/layout.scss'
</style>