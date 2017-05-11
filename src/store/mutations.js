//
//

import Message from 'iview/src/components/message'

import { SHOW_MESSAGE } from './mutation-types'

export default {
  [SHOW_MESSAGE](state, { type, content }) {
    Message[type](content);
  }
}
