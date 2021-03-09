import Vue from 'vue'
import VueRouter from 'vue-router'

import homePage from '@/views/homePage.vue'
import login from '@/views/login.vue'
import register from '@/views/register.vue'
import customerDetails from '@/views/customerDetails.vue'
import product from '@/views/product.vue'
import payment from '@/views/payment.vue'
import orderDetails from '@/views/orderDetails.vue'
import orders from '@/views/orders.vue'
import invoicedetails from '@/views/invoicedetails.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'homePage',
    component: homePage
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/register',
    name: 'register',
    component: register
  },
  {
    path: '/custDetails',
    name: 'customerDetails',
    component: customerDetails
  },
  {
    path: '/product/:username',
    name: 'product',
    component: product
  },
  {
    path: '/payment/:username',
    name: 'payment',
    component: payment
  },
  {
    path: '/invoicedetails',
    name: 'invoicedetails',
    component: invoicedetails
  },
  {
    path: '/orders/:username',
    name: 'orders',
    component: orders
  },
  {
    path: '*',
    name: 'orderDetails', // This is the Error Page.
    component: orderDetails
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
