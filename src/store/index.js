import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let city = localStorage.city || '上海'
export default new Vuex.Store({
  state: {
    city
  },
  mutations: {
    changeCity(state, city) {
      state.city = city
    }
  },
  getters: {},
  actions: {},
  modules: {}
})
