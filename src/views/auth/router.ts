import { createRouter, createWebHistory } from 'vue-router'

const RouterAuth = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'login',
      path: '/auth/login',
      component: () => import('./pages/LoginView.vue')
    },
    {
      name: 'register',
      path: '/auth/register',
      component: () => import('./pages/RegisterView.vue')
    }
  ]
})

export default RouterAuth
