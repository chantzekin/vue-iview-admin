//
//

import * as api from '../../api/dashboard'
import * as types from '../mutation-types'

const state = {
  numbers: [],
  regionChartData: {},
  ageChartData: {},
  osChartData: {},
  terminalChartData: {}
}

const actions = {
  fetchDashboard({ commit }) {
    api.fetch(({ data }) =>
      commit(types.RECEIVE_DASHBOARD, data))
  }
}

const mutations = {
  [types.RECEIVE_DASHBOARD](state, { data }) {
    Object.assign(state, data)
  }
}

export default {
  state,
  actions,
  mutations
}
