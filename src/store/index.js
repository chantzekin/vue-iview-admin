import Vue from 'vue'
import Vuex from 'vuex'

import * as getters from './getters'

import dashboard from './modules/dashboard'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  getters,
  modules: {
    dashboard
  },
  strict: debug
})
