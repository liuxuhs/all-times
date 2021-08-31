import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token:'',
    moblie:''
  },
  mutations: {
    add(state,token){
      state.token=token
      console.log(state.token)
    },

    addo(state,moblie){
      state.moblie=moblie
      console.log(moblie)
    }

  },
  actions: {
  },
  modules: {
  },
  plugins: [createPersistedState({
    storage: sessionStorage,
    key: "token"
  })]//会自动保存创建的状态。刷新还在

})
