import { createRouter, createWebHistory } from 'vue-router'
import { examples } from '@/examples/examples.js'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: Object.entries(examples).map(([path, example]) => {
    return {
      path: `/${path}`,
      name: path,
      component: example.component
    }
  })
})

export default router
