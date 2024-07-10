import { createRouter, createWebHistory } from 'vue-router'
import RouterPrivate from '@/views/private/router'
import RouterVendor from '@/views/vendor/router'
import RouterPublic from '@/views/client/router'
import RouterAuth from '@/views/auth/router'
import { useAuthGuard } from '@/guards/RouteGuard'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'private',
      path: '/private',
      meta: { requiresAuth: true, roles: ['admin'] },
      children: RouterPrivate.getRoutes()
    },
    {
      name: 'vendor',
      path: '/vendor',
      meta: { requiresAuth: true, roles: ['vendor'] },
      children: RouterVendor.getRoutes()
    },
    {
      name: 'auth',
      path: '/auth',
      children: RouterAuth.getRoutes()
    },
    {
      name: 'client',
      path: '/client',
      meta: { requiresAuth: true, roles: ['client'] },
      children: RouterPublic.getRoutes()
    },
    {
      name: '404',
      path: '/404',
      component: () => import('../views/404.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: () => ({ name: '404' })
    },
  ]
});

useAuthGuard(router);

export default router