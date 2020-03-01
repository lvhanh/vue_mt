<template>
  <div class="home-page">
    <el-row :gutter="0" class="m-life">
      <el-col :span="6">
        <tmenu />
      </el-col>
      <el-col :span="18">
        <tslider/>
      </el-col>
    </el-row>
    <el-row class="m-main">
      <el-col :span="24">
        <tcontent/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Tmenu from '../components/index/menu'
import Tslider from '../components/index/slider'
import Tcontent from '../components/index/content'
export default {
  components: {
    Tmenu,
    Tslider,
    Tcontent
  }
}
</script>

<style lang="scss">
  @import '../assets/css/index/index.scss';
</style>
