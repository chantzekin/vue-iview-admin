//
//

import Vue from 'vue'
import iView from 'iview'
import axios from 'axios'
import NProgress from 'nprogress'

import App from './App'
import router from './router'
import store from './store'
import mcok from './mock'

import 'nprogress/nprogress.css'
import 'iview/dist/styles/iview.css'
import './assets/common.css'

Vue.use(iView)
Vue.prototype.$http = axios
Vue.config.productionTip = false
// Vue.config.devtools = true
// Vue.config.silent = true


NProgress.configure({ showSpinner: false })

const notNeedAuthRoutes = ['/login']

router.beforeEach((to, from, next) => {
  NProgress.start();
  const toPath = to.path
  if (store.getters.token) {
    // TODO: 权限鉴定
    next()
  } else {
    if (notNeedAuthRoutes.includes(toPath)) {
      next()
    } else {
      next({ path: '/login', query: { redirect: to.fullPath } })
    }
  }
})
router.afterEach(() => {
  NProgress.done();
});


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
