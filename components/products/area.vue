<template>
    <div class="m-area left-width">
        <div class="search" v-if="click">
            <p>已选条件</p>
            <span class="city" @click="cancel">
                {{ newCity }}
                <i class="el-icon-close" />
            </span>
        </div>
        <div class="top-menu">
            <label>分类</label>
            <span>全部</span>
            <div class="sorts border">
                <div class="sort"
                v-for="(item,index) in sort" :key="index">
                    <iselect 
                    :name="item.type"
                    :list="item.module.slice(0,30)" />
                </div>
            </div>
        </div>
        <div class="top-menu">
            <label>分类</label>
            <span>全部</span>
            <div class="sorts">
                <div class="sort"
                v-for="(item,index) in areaNull" :key="index">
                    <iselect 
                    :name="item.type"
                    :list="item.module.slice(0,24)"
                    @changeCity="changeCity" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Iselect from './iselect'
export default {
    components : {
        Iselect
    },
    data(){
        return {
            active : '',
            city   : '',
            newCity: '',
            click  : false
        }
    },
    props : {
        sort : {
            type : Array,
            default : []
        },
        area : {
            type : Array,
            default : []
        }
    },
    computed : {
        areaNull : function(){
            let arr = this.area
            let newArr = []
            for(let i=0;i<arr.length;i++){
                let arrs = []
                arrs = arr[i].module.filter(function(item){
                    return item&&item.trim()
                })
                let list = {
                    type : arr[i].type,
                    module : arrs
                }
                newArr.push(list)
            }
            return newArr
        }
    },
    methods : {
        changeCity(x){
            this.$emit('change',x)
            this.newCity = x
            this.click = true
        },
        cancel(){
            this.$router.go(0)
        }
    }
}
</script>

<style>

</style>