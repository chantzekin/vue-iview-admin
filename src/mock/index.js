//
//

import Mock from 'mockjs'

import dashboard from './dashboard'
import user from './user'

const addToMock = (list) => {
  list.forEach(m => Mock.mock(m.path, m.type, m.data))
}

addToMock(dashboard)
addToMock(user)

Mock.setup({
  timeout: '100-500'
})

export default Mock
