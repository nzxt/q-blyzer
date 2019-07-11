import { RouteConfig } from 'vue-router'
const routes: RouteConfig[] = [
  {
    path: '/',
    component: () => import('../layouts/Default.vue'),
    children: [
      { path: '', component: () => import('../pages/Index.vue') },
      { path: 'trainings', component: () => import('../pages/Trainings.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('../pages/Error404.vue')
  })
}

export default routes
