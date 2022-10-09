import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    componentName: 'fundTable',
  },
  getters: {
  },
  mutations: {
    goToFundComparison(state){
      state.componentName = 'fundChart';
    },
    goBack(state){
      state.componentName = 'fundTable';
    }
  },
  actions: {
  },
  modules: {
  }
})
