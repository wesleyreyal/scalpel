import { createRouter, createWebHistory } from 'vue-router'

import { SplitTextView, LandingView, MaskView } from '@/features'
import {MouseGalleryView} from '@/features'

export const Routes = {
  landing: 'landing',
  splitText: 'split-text',
  maskPolygon: 'mask-polygon',
  MouseGallery: 'mouse-gallery',
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
      path: '/mask-polygon',
      name: Routes.maskPolygon,
      component: MaskView,
    },
    {
      path: '/mouse-gallery',
      name: Routes.MouseGallery,
      component: MouseGalleryView,
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/',
    },
  ],
})

export default router
