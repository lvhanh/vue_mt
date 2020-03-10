import Vue from 'vue'
import Vuex from 'vuex'
import city from './modules/city'
import menu from './modules/menu'
import axios from 'axios'

Vue.use(Vuex)

const store = ()=>new Vuex.Store({
    modules : {
        city,
        menu
    },
    actions : {
        // async nuxtServerInit({commit},{req,app}){
        //     const {
        //         status,
        //         data:{
        //             province,
        //             city
        //         }
        //     } = await app.$axios.get('city/getPosition')
        //     commit('city/setPosition',status===200?{city,province}:{city:'',province:''})
        // }
        async nuxtServerInit(context,{app}){ //context作为第二个参数
            const res  = await app.$axios.get('/city/getPosition')
            context.commit('city/setPosition',res.status===200
            ?{province:res.data.province,city:res.data.city}
            :{city:'',province:''})
            const res1 = await app.$axios.get('/city/menu')
            context.commit('menu/setMenu',res1.status===200
            ?{menu:res1.data.menus}
            :{menu:[]})
            const res2 = await app.$axios.get('/search/hot',{
                params : {
                    city : app.store.state.city.position.city.replace('市',"")
                }
            })
            context.commit('menu/setHotplace',res2.status===200
            ?res2.data.hot
            :[])
        }
    }
    // actions : {
    //     async setPosition({commit},position){
    //         let res = await axios.get('/city/getPosition')
    //         commit('city/setPosition',
    //              res.status===200?
    //              {city:res.data.province,province:res.data.city}
    //             :{city:'',province:''})
    //     }
    // }
})
export default store