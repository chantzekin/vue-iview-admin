//
//

import * as api from '../../api/dashboard'
import * as types from '../mutation-types'

const state = {
  numbers: []
}

const getters = {
  dashboardNumbers: state => state.numbers
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
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
