<template>
    <div class="pay">
        <el-button type="primary" @click="submit">付款</el-button>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    methods : {
        submit(){
            let id = this.$route.query.orderNo,
                _this=this
            axios.post('/order/status',
            {orderNo:id}).then(function(res){
                if(res.status===200&&res.data.code===0){
                    _this.$router.push({path: 'order'})
                }
            })
        }
    }
}
</script>

<style>

</style>