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
            placeholder="城市" :disabled="!mprovince"
            @change="go">
                <el-option
                v-for="item in Mcity"
                :key="item.value"
                :label="item.label"
                :value="item.label">
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
import _ from 'lodash'
import pinyin from 'pinyin4js'
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
            if(_this.mprovince){
                let id = this.province.find(item=>item.value===_this.mprovince).id
                //let mid = id.id
                axios.get(`/city/province/${id}`).then(function(res){
                    _this.city=res.data.cities.map(item=>{
                        return {
                            label : item.name==='市辖区'?_this.mprovince:item.name,
                            value : item.id
                        }
                    })
                })
                return _this.city
            }
        }
    },
    methods : {
        querySearchAsync : _.debounce(async function(queryString,cb){
            let _this = this
            _this.city = []
            if(_this.city.length){
                cb(_this.city.filter(item=>item.value.indexOf(queryString)>-1))
            }else {
                let cities = await axios.get('/city/getCity')
                if(cities.status===200){
                    _this.city = cities.data.city.map(item=>{
                        return {
                            value : item.name
                        }
                    })
                    if(queryString){
                        let str = new RegExp("[A-Za-z]+")
                        if(str.test(queryString)){
                            let city = _this.city.map(item=>{
                                return {
                                    value : item.value,
                                    pinyin: pinyin.convertToPinyinString(item.value,'',pinyin.WITHOUT_TONE)
                                }
                            })
                            let result = city.filter(item=>item.pinyin.indexOf(queryString)>-1)
                            cb(result)
                        }else{
                            let result = _this.city.filter(item=>item.value.indexOf(queryString)>-1)
                            cb(result)
                        }
                    }else{
                        cb(_this.city)
                    }
                }else {
                    cb([])
                }
            }
        },300),
        handleSelect : function(){
            window.sessionStorage.setItem('changeCity',this.selectCity)
            this.$router.push({path:'/home'})
        },
        go : function(){
            window.sessionStorage.setItem('changeCity',this.mcity)
            this.$router.push({path:'/home'})
        }
    }
}
</script>

<style lang="scss">

</style>