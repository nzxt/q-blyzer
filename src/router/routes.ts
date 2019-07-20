import { RouteConfig } from 'vue-router'
const routes: RouteConfig[] = [
  {
    path: '/',
    component: () => import('src/layouts/Default.vue'),
    children: [
      {
        path: '',
        component: () => import('src/pages/Index.vue')
      },
      {
        path: 'trainings',
        meta: { auth: true },
        component: () => import('src/pages/Trainings.vue')
      },
      {
        path: 'training',
        meta: { auth: true },
        component: () => import('src/pages/Training.vue')
      },
      {
        path: 'matches',
        meta: { auth: true },
        component: () => import('src/pages/Matches.vue')
      },
      // {
      //   path: 'match',
      //   meta: { auth: true },
      //   component: () => import('src/pages/Match.vue')
      // }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('src/pages/Error404')
  })
}

export default routes
