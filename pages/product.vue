<template>
    <div class="m-product">
        <div class="m-crumb">
            <mcrumb :city="city" :keyword="keyword" />
        </div>
        <div class="m-left">
            <marea 
            :sort="sort" 
            :area="area" />
            <mlist 
            :list="list" />
        </div>
    </div>
</template>

<script>
import Mcrumb from '../components/products/crumb'
import Marea from '../components/products/area'
import Mlist from '../components/products/list'
export default {
    components : {
        Mcrumb,
        Marea,
        Mlist
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
                list    : res.data.pois.map(item=>{
                    return {
                        name : item.name,
                        type : item.type,
                        rate : item.biz_ext.rating,
                        adr  : item.address,
                        cost : item.biz_ext.cost,
                        location: item.location,
                        tag  : item.tag,
                        photo: item.photos.length?item.photos.filter(item=>item!=='')[0].url:[]
                    }
                }),
                sort    : res2.data.sort.filter(item=>item.type!=='').slice(0,5),
                area    : res2.data.area.filter(item=>item.type!=='')
            }
        }
    }
}
</script>

<style lang="scss">
    @import '../assets/css/product/index.scss';
</style>