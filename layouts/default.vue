<template>
  <div class="layout-default">
    <div class="el-header">
      <my-header />
    </div>
    <div class="el-main">
      <nuxt/>
    </div>
    <div class="el-footer"></div>
  </div>
</template>

<script>
import MyHeader from '../components/public/header/index.vue'
export default {
  components:{
    MyHeader
  }
}
</script>
