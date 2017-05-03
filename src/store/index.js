import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
    breadcrumbs: [],
  },
  getters: {
    isLogin: state => state.isLogin,
  },
  mutations,
  actions
})
