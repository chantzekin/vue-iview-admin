import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Index = r => require.ensure([], () => r(require('@/pages/Index')), 'index')
const Dashboard = r => require.ensure([], () => r(require('@/pages/Dashboard')), 'dashboard')
const Task = r => require.ensure([], () => r(require('@/pages/Task')), 'task')
const SubPage = r => require.ensure([], () => r(require('@/pages/SubPage')), 'subPage')

const NotFound = r => require.ensure([], () => r(require('@/pages/404')), '404')

const Login = r => require.ensure([], () => r(require('@/pages/User/Login')), 'login')

const routes = [
  {
    path: '/index',
    alias: '/',
    component: Index,
    meta: { title: '主页', auth: true },
    children: [
      {
        alias: '',
        path: '/dashboard',
        name: 'dashboard',
        component: Dashboard,
        meta: { title: 'Dashboard', auth: true },
      },
      {
        path: '/task',
        name: 'task',
        component: Task,
        meta: { title: 'Task', auth: true },
      },
      {
        path: '/submenu',
        name: 'submenu',
        meta: { title: 'Submenu', isSubmenu: true, auth: true },
        children: [
          {
            path: '/submenu/subpage',
            name: 'subPage',
            component: SubPage,
            meta: { title: 'Sub Page', auth: true },
          },
        ]
      },
      {
        path: '*',
        name: '404',
        component: NotFound,
        meta: { title: '404 Not Found', auth: true },
      },
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
