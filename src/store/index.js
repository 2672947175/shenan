import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showScroll:false,
    showBottom: false,
    showpos: false,
    tops: 0,
  },
  mutations: {
    ScrollTop(state,parmas){
      state.showScroll=parmas
    },
    ScrollBottom(state,parmas){
      state.showBottom = parmas
    },
    showposf(state, pramas) {
      state.showpos = pramas
    },
    tops(state, pramas) {
      state.tops = pramas
    }
  },
  actions: {

  }
})
