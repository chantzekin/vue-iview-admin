import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Index = r =>
  require.ensure([], () => r(require('@/pages/Index')), 'index')
const Dashboard = r =>
  require.ensure([], () => r(require('@/pages/Dashboard')), 'dashboard')
const Login = r =>
  require.ensure([], () => r(require('@/pages/User/Login')), 'login')

const routes = [
  {
    path: '/index',
    alias: '/',
    component: Index,
    meta: { title: '主页', auth: true },
    children: [
      {
        path: '/dashboard',
        name: 'dashboard',
        component: Dashboard,
        meta: { title: '仪表盘', auth: true },
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
]

const router = new Router({
  routes,
  mode: 'hash', // hash, history
})

export default router
