//
//

import axios from 'axios'

export function login(username, password) {
  const data = { username, password }
  return new Promise((resolve, reject) => {
    axios
      .post('/api/login', data)
      .then(res => resolve(res.data))
  })
}
