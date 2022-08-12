import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tableHeight: 0,
    panelHeight: 0,
  },
  getters: {
  },
  mutations: {
    updateTableHeight(state, height){
      state.tableHeight = height;
    },
    updatePanelHeight(state, height){
      state.panelHeight = height;
    },
  },
  actions: {
  },
  modules: {
  }
})
