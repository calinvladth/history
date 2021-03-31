import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '*', redirect: '/products' },
    {
      path: '/auth/login',
      name: 'login',
      component: () => import('./pages/Auth/Login')
    },
    {
      path: '/auth/register',
      name: 'register',
      component: () => import('./pages/Auth/Register')
    },
    {
      path: '/products',
      name: 'products',
      component: () => import('./pages/Products')
    },
    {
      path: '/products/:productId',
      name:'product',
      component: () => import('./pages/Products/Product')
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: () => import('./pages/Checkout')
    }
  ]
})
