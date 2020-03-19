<template>
    <div class="m-product">
        <div class="m-crumb">
            <mcrumb :city="city" :keyword="keyword" />
        </div>
        <div class="m-left">
            <marea 
            :sort="sort" 
            :area="area" />
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
            keyword : '',
            sort    : [],
            area    : [],
            list    : []
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
        let res2 = await ctx.$axios.get('/product/area',{
            params : {
                city : city
            }
        })
        if(res.status===200&&res2.status===200){
            return {
                city : city,
                keyword : keyword,
                poi     : res.data.pois,
                sort    : res2.data.sort.filter(item=>item.type!=='').slice(0,5),
                area    : res2.data.area.filter(item=>item.type!=='').slice(0,5)
            }
        }
    }
}
</script>

<style lang="scss">
    @import '../assets/css/product/index.scss';
</style>