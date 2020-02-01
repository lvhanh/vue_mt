<template>
    <el-row :gutter="0" class="MyHeader">
    <el-col :span="6">
        <city />
    </el-col>
    <el-col :span="6">
        <user />
    </el-col>
    <el-col :span="12"></el-col>
</el-row>
</template>

<script>
import City from './city.vue'
import User from './user'
export default {
    components:{
        City,
        User
    }
}
</script>

<style lang="scss">
    @import '../../../assets/css/public/header/header.scss'
</style>