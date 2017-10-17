//
//

export default {
  // logoUrl: '@/assets/brand.png',
  appName: 'mdmp',
  defaultPage: '/dashboard',
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
        key: '/submenu/subpage',
        title: 'Sub Page',
        icon: 'document'
      },
      {
        key: '/submenu/404',
        title: '404',
        icon: 'sad-outline'
      },
    ]
  }
]
