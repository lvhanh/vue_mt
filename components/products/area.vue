<template>
    <div class="area">
        <div class="top-menu">
            <label>分类</label>
            <span>全部</span>
            <div class="sorts">
                <div class="sort"
                v-for="(item,index) in sort" :key="index">
                    <iselect 
                    :name="item.type"
                    :list="item.module" />
                </div>
            </div>
        </div>
        <div class="bottom-menu">
            <label>分类</label>
            <span>全部</span>
            <div class="areas">
                <div class="area"
                v-for="(item,index) in area" :key="index">
                    <iselect 
                    :name="item.type"
                    :list="item.module" />
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
            active : ''
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
    methods : {
        enter : function(){

        }
    }
}
</script>

<style>

</style>