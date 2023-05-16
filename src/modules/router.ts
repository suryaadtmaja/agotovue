import { createRouter, createWebHistory } from 'vue-router/auto'
import { setupLayouts } from 'virtual:generated-layouts'

import type { App } from 'vue'

type ViteSetupModule = (app: App) => void

export const router = createRouter({
  extendRoutes(routes) {
    return setupLayouts(routes).map((route: any) => {
      if (route.name === 'home')
        return route
      return {
        ...route,
        meta: {
          ...route.meta,
          auth: true,
        },
      }
    })
  },
  history: createWebHistory(),
})

export const install: ViteSetupModule = (app) => {
  app.use(router)
}
