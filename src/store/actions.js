//
//

import * as types from './mutation-types'

export default {
  updateBreadcrumb({ commit }, crumbs) {
    commit(types.BREADCRUMB_UPDATE, crumbs);
  }
}
