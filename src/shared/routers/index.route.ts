import { createRouter, createWebHistory } from 'vue-router'
import dashboard from '@/shared/layouts/dashboard.vue'

const ROUTES = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/pages/index.vue'),
    meta: {
      title: 'Home',
      layout: dashboard,
    },
  },
]

const router = createRouter({
  routes: ROUTES,
  history: createWebHistory(),
})

export default router
