//
//

import { fetch as _fetch } from './fetch'

export function fetch() {
  const opts = {
    url: '/api/dashboard',
    method: 'get',
    parmas: {}
  }
  return _fetch(opts)
}
