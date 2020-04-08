<template>
    <div class="m-list">
        <div class="list">
            <mlist
            :list="list" />
        </div>
    </div>
</template>

<script>
import Mlist from '../components/cart/list'
export default {
    components : {
        Mlist
    },
    data(){
        return {
            list : []
        }
    },
    async asyncData(ctx){
        let id = ctx.query.id
        console.log(id)
        let res = await ctx.$axios.post('/cart/getCart',{cartNo:id})
        if(res.status===200&&res.data.code===0){
            return {
                list : [{
                    name : res.data.list.cartName,
                    price: res.data.list.price,
                    count: 1
                }]
            }
        }
    }
}
</script>

<style lang="scss">
    @import '../assets/css/cart/index.scss'
</style>