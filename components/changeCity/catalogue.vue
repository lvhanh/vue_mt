<template>
    <div class="catalogue">
        <div class="py">
            按拼音首字母选择：
            <ul v-for="(item,index) in pinyin" :key="index">
                <li class="zimu">{{ item }}</li>
            </ul>
        </div>
        <dl class="list">
            <dt></dt>
            <dd></dd>
        </dl>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return {
            pinyin : 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
            city   : []
        }
    },
    mounted : async function(){
        let res = await axios.get('/city/getCity')
        if(res.status===200){
            let city = res.data.city.map(item=>{
                return {
                    id   : item.id,
                    name : item.name
                }
            })
        }
    }
}
</script>

<style>

</style>