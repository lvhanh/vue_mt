<template>
    <div class="m-list">
        <div class="list">
            <mlist
            :list="lists" />
            <div class="bottom">
                <div class="text">
                    应付金额:<span>￥{{add}}</span>
                </div>
                <button class="submit"
                @click="submit">提交订单</button>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
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
    methods : {
        submit(){
            let cartNo = this.$route.query.id
            let year = new Date().getFullYear().toString().substr(0,2),
			    random = Math.random()*100000000
            let id = `${year}${random.toString().substr(0,6)}`,
                _this = this
            axios.post('/order/createOrder',{
                cartNo : cartNo,
                price  : Number(_this.lists[0].price),
                count  : Number(_this.lists[0].count),
                orderNo: id
            }).then(function(res){
                if(res.status===200&&res.data.code===0){
                    window.open('/pay?orderNo='+id)
                    setTimeout(function(){
                        _this.$alert('付款成功','成功',{
                            confirmButtonText:'确定',
                            callback: action=>{
                                _this.$router.push({path:'order'})
                            }
                        })
                    },1000)
                }
            }).catch(function(err){
                console.log(err)
            })
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
                    count: 1,
                    imgs : res.data.list.imgs
                }]
            }
        }
    }
}
</script>

<style lang="scss">
    @import '../assets/css/cart/index.scss'
</style>