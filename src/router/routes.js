import children from './system'

const routes = [
  {
    path: '*',
    name: 'error',
    component: () => import('@/pages/404')
  },
  {
    path: '/404',
    component: () => import('@/pages/404')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/pages/login')
  },
  {
    path: '/',
    name: 'system',
    redirect: { name: 'home' },
    component: () => import('@/pages/layout'),
    children
  }
]

export default routes;