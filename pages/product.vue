<template>
    <div class="m-product">
        <div class="m-crumb">
            <mcrumb :city="city" :keyword="keyword" />
        </div>
        <div class="m-area">
            <marea />
        </div>
    </div>
</template>

<script>
import Mcrumb from '../components/products/crumb'
import Marea from '../components/products/area'
export default {
    components : {
        Mcrumb,
        Marea
    },
    data(){
        return {
            city    : '',
            keyword : ''
        }
    },
    async asyncData(ctx){
        let city = ctx.query.city
        let keyword = ctx.query.keyword
        let res = await ctx.$axios.get('/search/resultsByKeywords',{
            params : {
                city : city,
                keyword : keyword
            }
        })
        if(res.status===200){
            return {
                city : city,
                keyword : keyword
            }
        }
    }
}
</script>

<style lang="scss">
    @import '../assets/css/product/index.scss';
</style>