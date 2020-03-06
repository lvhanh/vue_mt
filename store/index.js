import vue from 'vue'
import Vuex from 'vuex'
import city from './modules/city'
import axios from 'axios'

vue.use(Vuex)

const store = ()=>{
    return new Vuex.Store({
        modules : {
            city
        },
        actions : {
            async nuxtServerInit({commit},{req}){
                let res = await axios.get('/city/getPosition')
                commit('setPosition',
                res.status===200?
                {province:res.data.province,city:res.data.city}
                :{city:'',province:''})
            }
        }
    })
}
export default store