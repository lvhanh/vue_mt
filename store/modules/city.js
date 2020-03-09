const state = ()=>({
    position : {}
})

const mutations = {
    setPosition(state,val){
        state.position = val
    }
}

const actions = {
    setPosition: (context,position)=>{
        context.commit('setPosition',position)
    }
}

export default {namespaced:true,state,mutations}