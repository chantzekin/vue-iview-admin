//
//

import axios from 'axios'

export function fetch(cb) {
  axios.get('/api/dashboard').then(res => cb(res))
}
