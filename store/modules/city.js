const state = ()=>({
    position    : {},
    changePosition : ''
})

const mutations = {
    setPosition(state,val){
        state.position = val
    },
    changePosition(state,val){
        state.changePosition = val
    }
}

const actions = {
    setPosition: (context,position)=>{
        context.commit('setPosition',position)
    }
}

export default {namespaced:true,state,mutations}