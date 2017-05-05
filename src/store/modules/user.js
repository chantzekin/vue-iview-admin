//
//

import Cookies from 'js-cookie'

import * as api from '../../api/user'
import * as types from '../mutation-types'

const state = {
  username: '',
  status: '',
  token: Cookies.get('X-Token'),
  name: '',
  avatar: '',
  roles: [],
}

const actions = {
  login({ commit }, userInfo) {
    const username = userInfo.username.trim()
    return new Promise((resolve, reject) => {
      api
        .login(username, userInfo.password)
        .then(res => {
          const data = res.data
          if (data.success) {
            commit(types.SET_USER_TOKEN, data.user.token)
            commit(types.SET_USER_USERNAME, data.user.username)
            resolve()
          }
          reject(data.msg)
        })
        .catch(err => reject(err))
    })
  }
}

const mutations = {
  [types.LOGIN_SUCCESS]: () => {
    console.log('Login success.')
  },
  [types.LOGOUT_USER]: (state) => {
    state.username = ''
  },
  [types.SET_USER_USERNAME]: (state, username) => {
    state.username = username
  },
  [types.SET_USER_TOKEN]: (state, token) => {
    Cookies.set('X-Token', token, { expires: 1 })
    state.token = token
  },
  [types.SET_USER_AVATAR]: (state, avatar) => {
    state.avatar = avatar
  },
  [types.SET_USER_ROLES]: (state, roles) => {
    state.roles = roles
  },
  [types.SET_USER_STATUS]: (state, status) => {
    state.status = status
  }
}

export default {
  state,
  actions,
  mutations
}
