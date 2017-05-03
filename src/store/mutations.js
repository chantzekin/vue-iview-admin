//
//

import * as types from './mutation-types'

export default {
  [types.BREADCRUMB_UPDATE](state, crumbs) {
    state.breadcrumbs = crumbs;
  }
}
