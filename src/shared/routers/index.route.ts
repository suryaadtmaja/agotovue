import { createRouter, createWebHistory } from 'vue-router'
import { type IStaticMethods } from 'preline/preline'
import dashboard from '@/shared/layouts/dashboard.vue'

declare global {
  interface Window {
    HSStaticMethods: IStaticMethods
  }
}

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

router.afterEach((_to, _from, failure) => {
  if (!failure) {
    setTimeout(() => {
      window.HSStaticMethods.autoInit()
    }, 100)
  }
})

export default router
