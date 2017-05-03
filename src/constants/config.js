//
//

export default {
  logoUrl: 'https://file.iviewui.com/dist/76ecb6e76d2c438065f90cd7f8fa7371.png',
  appName: 'ndmp',
  defaultPage: '/dashboard'
}

export const menus = [
  {
    key: '/dashboard',
    title: 'Dashboard',
    icon: 'stats-bars',
  },
  {
    key: '/task',
    title: 'Task',
    icon: 'person-stalker'
  },
  {
    key: '/submenu',
    title: 'Submenu',
    icon: 'navicon',
    children: [
      {
        key: '/submenu/test',
        title: 'Test',
        icon: 'cube'
      },
    ]
  }
]
