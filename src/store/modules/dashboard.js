//
//

import * as api from '../../api/dashboard'
import * as types from '../mutation-types'

const state = {
  numbers: [],
  regionChartData: [],
}

const actions = {
  fetchDashboard({ commit }) {
    api.fetch(({ data }) =>
      commit(types.RECEIVE_DASHBOARD, data))
  }
}

const mutations = {
  [types.RECEIVE_DASHBOARD](state, { data }) {
    state.numbers = data.numbers
    state.regionChartData = data.regionChartData
  }
}

export default {
  state,
  actions,
  mutations
}
