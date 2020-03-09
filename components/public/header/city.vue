<template>
    <div class="city"> 
        <i class="el-icon-location" /><span>{{$store.state.city.position.city}}</span>
        <nuxt-link class="changecity" to="/ChangeCity">切换城市</nuxt-link>
        <span>[ 吴江 周庄 昆山 ]</span>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    // data(){
    //     return {
    //         city : ''
    //     }
    // },
    // created : function(){
    //     // let _this = this
    //     // axios.get('/city/getPosition').then(function(res){
    //     //     if(res.status===200){
    //     //         _this.$store.commit('city/setPosition',{province:res.data.province,city:res.data.city})
    //     //         _this.city = _this.$store.state.city.position.city
    //     //         console.log(_this.$store.state.city.position.city)
    //     //     }
    //     // })
    // }
}
</script>

<style>

</style>
