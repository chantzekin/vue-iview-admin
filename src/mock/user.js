export default [
  {
    path: '/api/login',
    type: 'post',
    data: (opts) => {
      let param = JSON.parse(opts.body)
      let result = users[param.username]
      if (result && param.password === result.password) {
        return {
          data: {
            success: true,
            user: getUserInfo(param.username)
          }
        }
      } else {
        return { data: { success: false, msg: 'username or password is error' } }
      }
    }
  },
  {
    path: '/api/logout',
    type: 'post',
    data: { data: { success: true } }
  }
]

const getUserInfo = (username) => {
  const user = users[username]
  if (user) {
    const data = { ...user }
    delete data.password
    return data
  }
  return null
}

const users = {
  admin: {
    token: '9GNAdsIedU6PGWMf',
    role: ['admin'],
    name: '管理员',
    password: 'mdmp2017',
    avatar: '',
  },
  guest: {
    token: 'l33WzPqJfJQa2oGS',
    role: ['guest'],
    name: '访客',
    password: 'guest2017',
    avatar: '',
  },
}
