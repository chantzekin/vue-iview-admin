// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
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

NProgress.configure({ showSpinner: false })

const notNeedAuthRoutes = ['/login']
router.beforeEach((to, from, next) => {
  NProgress.start();
  next()

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
