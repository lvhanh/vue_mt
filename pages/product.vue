<template>
    <div class="m-product">
        <div class="m-crumb">
            <mcrumb :city="city" :keyword="keyword" />
        </div>
        <div class="m-left">
            <marea 
            :sort="sort" 
            :area="area"
            @change="change" />
            <mlist 
            :list="list" />
        </div>
    </div>
</template>

<script>
import Mcrumb from '../components/products/crumb'
import Marea from '../components/products/area'
import Mlist from '../components/products/list'
import axios from 'axios'
export default {
    components : {
        Mcrumb,
        Marea,
        Mlist
    },
    data(){
        return {
            city    : '',
            newCity : '',
            keyword : '',
            sort    : [],
            area    : [],
            list    : []
        }
    },
    async asyncData(ctx){
        let city = decodeURIComponent(ctx.query.city)
        let keyword = decodeURIComponent(ctx.query.keyword)
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
                        'name' : item.name,
                        'type' : item.type.split(';').join('|'),
                        'rate' : item.biz_ext.rating?Number(item.biz_ext.rating):0,
                        'adr'  : item.address.length?item.address:'',
                        'cost' : item.biz_ext.cost?Number(item.biz_ext.cost):Number(0),
                        'location': item.location,
                        'tag'  : item.tag.length?item.tag:'暂无介绍',
                        'photo': item.photos.length?item.photos.filter(item=>item!=='')[0].url:[]
                    }
                }),
                sort    : res2.data.sort.filter(item=>item.type!=='').slice(0,5),
                area    : res2.data.area.filter(item=>item.type!=='')
            }
        }
    },
    methods : {
        async change(x){
            this.newCity = x
            let res = await axios.get('/search/resultsByKeywords',{
                params : {
                    city : this.newCity,
                    keyword : this.keyword
                }
            })
            this.list = res.data.pois.map(item=>{
                return {
                        'name' : item.name,
                        'type' : item.type.split(';').join('|'),
                        'rate' : item.biz_ext.rating?Number(item.biz_ext.rating):0,
                        'adr'  : item.address.length?item.address:'',
                        'cost' : item.biz_ext.cost?Number(item.biz_ext.cost):Number(0),
                        'location': item.location,
                        'tag'  : item.tag.length?item.tag:'暂无介绍',
                        'photo': item.photos.length?item.photos.filter(item=>item!=='')[0].url:[]
                    }
            })
        }
    }
}
</script>

<style lang="scss">
    @import '../assets/css/product/index.scss';
</style>