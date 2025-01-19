import { createRouter, createWebHistory } from 'vue-router'

import { SplitTextView, LandingView } from '@/features'

export const Routes = {
  landing: 'landing',
  splitText: 'split-text',
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: Routes.landing,
      component: LandingView,
    },
    {
      path: '/split-text',
      name: Routes.splitText,
      component: SplitTextView,
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/',
    },
  ],
})

export default router
