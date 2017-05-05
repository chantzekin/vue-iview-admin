import Vue from 'vue'
import Vuex from 'vuex'

import getters from './getters'

import dashboard from './modules/dashboard'
import user from './modules/user'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  getters,
  modules: {
    dashboard,
    user
  },
  strict: debug
})
