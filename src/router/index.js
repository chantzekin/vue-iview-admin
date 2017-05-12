import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Index = r => require.ensure([], () => r(require('@/pages/Index')), 'index')
const Dashboard = r => require.ensure([], () => r(require('@/pages/Dashboard/index')), 'dashboard')
const Task = r => require.ensure([], () => r(require('@/pages/Task')), 'task')
const SubPage = r => require.ensure([], () => r(require('@/pages/Submenu/SubPage')), 'subPage')

const NotFound = r => require.ensure([], () => r(require('@/pages/404')), '404')

const Login = r => require.ensure([], () => r(require('@/pages/User/Login')), 'login')

const routes = [
  {
    path: '/',
    redirect: '/index'
  },
  {
    path: '/index',
    component: Index,
    meta: { title: '主页', },
    children: [
      {
        alias: '',
        path: '/dashboard',
        name: 'dashboard',
        component: Dashboard,
        meta: { title: 'Dashboard', },
      },
      {
        path: '/task',
        name: 'task',
        component: Task,
        meta: { title: 'Task', },
      },
      {
        path: '/submenu',
        name: 'submenu',
        meta: { title: 'Submenu', isSubmenu: true, },
        children: [
          {
            path: '/submenu/subpage',
            name: 'subPage',
            component: SubPage,
            meta: { title: 'Sub Page', },
          },
        ]
      },
      {
        path: '*',
        name: 'index - 404',
        component: NotFound,
        meta: { title: '404 Not Found', },
      },
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '*',
    name: '404',
    component: NotFound,
    meta: { title: '404 Not Found', },
  },
]

const router = new Router({
  routes,
  mode: 'hash', // hash, history
})

export default router
