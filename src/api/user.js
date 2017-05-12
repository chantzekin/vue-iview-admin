//
//

import { fetch as _fetch } from './fetch'

export function login(username, password) {
  const data = { username, password }
  const opts = {
    url: '/api/login',
    method: 'post',
    data
  }
  return _fetch(opts)
}

export function logout(token) {
  const data = { token }
  const opts = {
    url: '/api/logout',
    method: 'post',
    data
  }
  return _fetch(opts)
}
