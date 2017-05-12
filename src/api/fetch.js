import axios from 'axios'

import store from '../store'
import { SHOW_MESSAGE } from '../store/mutation-types'

const BASE_URL = '//mock.cn/'

export function fetchWithToken(opts) {
  const token = store.getters.token
  const instance = axios.create({
    baseURL: BASE_URL,
    timeout: 1000,
    headers: { 'X-Token': token }
  })

  return new Promise((resolve, reject) => {
    instance(opts)
      .then(response => {
        const res = res.data
        const code = res.code

        if (code != 20000) {
          console.log(error)
          store.commit(SHOW_MESSAGE, {
            type: 'error',
            content: res.message
          })
          /*
           * 50008: Token 非法
           * 50014: Token 过期
           * 50012: 他处登陆
           */
          if ([50008, 50014, 50012].includes(code)) {
            // TODO: 错误提示
            // 登出
            store.dispatch('logout')
          }
          reject(res)
        }
        resolve(res)
      })
      .catch(error => {
        console.log(error)
        store.commit(SHOW_MESSAGE, {
          type: 'error',
          content: error
        })
        reject(error)
      })
  })
}

export function fetch(opts) {
  return new Promise((resolve, reject) => {
    const instance = axios.create({
      timeout: 1000,
    })

    instance(opts)
      .then(response => {
        const res = response.data
        resolve(res)
      })
      .catch(error => {
        store.commit(SHOW_MESSAGE, {
          type: 'error',
          content: error
        })
        reject(error)
      })
  })
}
