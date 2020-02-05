<template>
<el-row :gutter="0" class="MyHeader">
    <el-col :span="5">
        <city />
    </el-col>
    <el-col :span="5">
        <user />
    </el-col>
    <el-col :span="14">
        <navbar />
    </el-col>
</el-row>
</template>

<script>
import City from './city.vue'
import User from './user'
import Navbar from './nav'
export default {
    components:{
        City,
        User,
        Navbar
    }
}
</script>

<style lang="scss">
    @import '../../../assets/css/public/header/index.scss';
    @import '../../../assets/css/public/layout.scss'
</style>