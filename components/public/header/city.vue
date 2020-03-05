<template>
    <div class="city"> 
        <i class="el-icon-location" /><span>苏州</span>
        <nuxt-link class="changecity" to="/ChangeCity">切换城市</nuxt-link>
        <span>[ 吴江 周庄 昆山 ]</span>
    </div>
</template>

<script>
export default {
    data(){
        city : ''
    }
}
</script>

<style>

</style>
