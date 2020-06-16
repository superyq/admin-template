const routes = [
  {
    path: '*',
    name: 'error',
    component: () => import('@/pages/404')
  },
  {
    path: '/',
    redirect: { name: 'login' }
  },
  {
    path: '/404',
    component: () => import('@/pages/404')
  },
  {
    path: '/demo',
    name: 'demo',
    component: () => import('@/pages/demo')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/pages/login')
  },
]

export default routes;