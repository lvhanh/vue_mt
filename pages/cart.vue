<template>
    <div class="m-list">
        <div class="list">
            <mlist
            :list="lists" />
            <div class="bottom">
                <div class="text">
                    应付金额:<span>￥{{add}}</span>
                </div>
                <button class="submit">提交订单</button>
            </div>
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
            lists : []
        }
    },
    computed : {
        add(){
            let total = 0
            this.lists.forEach(item=>{
                total+=item.price*item.count
            })
            return total
        }
    },
    async asyncData(ctx){
        let cartNo = ctx.query.id
        let res = await ctx.$axios.post('/cart/getCart',{"cartNo":cartNo})
        if(res.status===200){
            return {
                lists : [{
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