// import Vue from 'vue'
// import VueRouter, { createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'
import Explore from '../views/Explore.vue'
import Recipe from '../views/Recipe.vue'
import Bookmarks from '../views/Bookmarks.vue'
import BookmarkId from '../views/BookmarkId.vue'
import ForgotPassword from '../views/ForgottenPassword.vue'
import ResetPassword from '../views/ResetPassword.vue'

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { App } from 'vue'

// Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/explore',
    name: 'Explore',
    component: Explore
  },
  {
    path: '/recipe/:id',
    name: 'Recipe',
    component: Recipe
  },
  {
    path: '/bookmarks',
    name: 'Bookmarks',
    component: Bookmarks
  },
  {
    path: '/bookmark/:id',
    name: 'BookmarkId',
    component: BookmarkId
  },
  {
    path: '/forgotpassword',
    name: 'ForgotPassword',
    component: ForgotPassword
  },
  {
    path: '/resetpassword',
    name: 'ResetPassword',
    component: ResetPassword
  }
]

// const router = new VueRouter({
//   mode: 'history',
//   base: process.env.BASE_URL,
//   routes
// })

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

createApp(App).use(router).mount('#app')

export default router