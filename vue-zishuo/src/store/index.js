import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    showSplash: true
  },
  mutations: {
    hideSplash (state) {
      state.showSplash = false
    }
  }
})

export default store
