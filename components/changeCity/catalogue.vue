<template>
    <div class="catalogue">
        <div class="py">
            按拼音首字母选择：
            <ul v-for="(item,index) in pinyin" :key="index">
                <li class="zimu">
                    <a :href="'#city'+item">{{ item }}</a>
                </li>
            </ul>
        </div>
        <div class="list"
        v-for="(item,index) in city" :key="index">
            <span :id="'city'+item.id" class="title">{{ item.id }}</span>
            <span  class="city">
                <p v-for="(i,index) in item.child" 
                :key="index" @mouseenter="entered(i.name)"
                @click="click">{{ i.name }}</p>
            </span>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import pinyin4js from 'pinyin4js'
export default {
    data(){
        return {
            pinyin : 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''),
            city   : [],
            enter  : ''
        }
    },
    mounted : async function(){
        let _this = this
        let res = await axios.get('/city/getCity')
        if(res.status===200){
            let cities = res.data.city.map(item=>{
                return {
                    id     : item.id,
                    name   : item.name,
                    pinyin : pinyin4js.convertToPinyinString(item.name, '', pinyin4js.WITHOUT_TONE).split('')[0]
                }
            })
            for(let i=0;i<_this.pinyin.length;i++){
                let result =[]
                result[i] = cities.filter(item=>item.pinyin.toUpperCase()===_this.pinyin[i])
                let list = {
                    id    : _this.pinyin[i],
                    child : result[i]
                }
                _this.city.push(list)
            }
        }
    },
    methods : {
        entered : function(item){
            this.enter = item
        },
        click : function(){
            window.sessionStorage.setItem('changeCity',this.enter)
			this.$router.push({path:'/home'})
        }
    }
}
</script>

<style>

</style>