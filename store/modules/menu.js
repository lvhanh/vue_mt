const state = ()=>({
	menu 		 : [],
	hotPlace : []
})

const mutations = {
	setMenu(state,val){
			state.menu = val
	},
	setHotplace(state,val){
		state.hotPlace = val
	}
}

const actions = {
	setMenu: (context,menu)=>{
			context.commit('setMenu',menu)
	},
	setHotplace: (context,hotPlace)=>{
		context.commit('setHotplace',hotPlace)
}
}

export default {namespaced:true,state,mutations}