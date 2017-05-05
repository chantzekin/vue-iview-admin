// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import iView from 'iview'
import axios from 'axios'
import VueHighcharts from 'vue-highcharts';

import App from './App'
import router from './router'
import store from './store'
import mcok from './mock'

import 'iview/dist/styles/iview.css'

Vue.use(iView)
Vue.use(VueHighcharts);
Vue.prototype.$http = axios

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
