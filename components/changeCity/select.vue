<template>
    <div class="select">
        <div class="province">
            <span>按省份选择：</span>
            <el-select v-model="mprovince" filterable placeholder="省份">
                <el-option
                v-for="item in province"
                :key="item.id"
                :label="item.value"
                :value="item.value">
                </el-option>
            </el-select>
        </div>
        <div class="city">
            <el-select v-model="mcity" filterable 
            placeholder="城市" :disabled="!mprovince">
                <el-option
                v-for="item in Mcity"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
            </el-select>
        </div>
        <div class="selectCity">
            <span>直接搜索：</span>
            <el-autocomplete
            v-model="selectCity"
            :fetch-suggestions="querySearchAsync"
            placeholder="请输入城市中文或拼音"
            @select="handleSelect"
            ></el-autocomplete>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return {
            province  : [],
            mprovince : '',
            city      : [],
            mcity     : '',
            selectCity: ''
        }
    },
    mounted : function(){
        let _this = this
        this.province = []
        axios.get('/city/province').then(function(res){
            _this.province = res.data.province.map(item=>{
                return {
                    id    : item.id,
                    value : item.name
                }
            })
        })
    },
    computed : {
        Mcity : function(){
            let _this = this
            if(this.mprovince){
                let id = this.province.find(item=>item.value===this.mprovince)
                let mid = id.id
                console.log(mid)
                axios.get(`/city/province/${mid}`).then(function(res){
                    _this.city = res.data.cities.map(item=>{
                        return {
                            label : item.name,
                            value : item.id
                        }
                    })
                })
            }
        }
    },
    methods : {
        querySearchAsync : function(){

        },
        handleSelect : function(){

        }
    }
}
</script>

<style lang="scss">

</style>