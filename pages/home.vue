<template>
  <div class="home-page">
    <div class="m-life">
      <div>
        <tmenu />
      </div>
      <div>
        <tslider/>
      </div>
    </div>
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
