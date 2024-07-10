import { createRouter, createWebHistory } from 'vue-router'

const RouterPublic = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'home',
      path: '/client/home',
      component: () => import('./pages/HomeView.vue')
    },
    {
      name: 'help',
      path: '/client/help',
      component: () => import('./pages/HelpView.vue')
    },
    {
      name: 'wishlist',
      path: '/client/wishlist',
      component: () => import('./pages/shop/WishlistView.vue')
      
    },
    {
      name: 'cart',
      path: '/client/cart',
      component: () => import('./pages/shop/CartView.vue')
    },
    {
      name: 'shop',
      path: '/client/shop',
      component: () => import('./pages/shop/ShopView.vue')
    },
    {
      name: 'product',
      path: '/client/product/:id',
      component: () => import('./pages/shop/ProductView.vue')
    },

    {
      name: 'profile',
      path: '/client/profile',
      component: () => import('./pages/ProfileView.vue')
    }
  ]
})

export default RouterPublic
