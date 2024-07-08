//import vue router
import { createRouter, createWebHistory } from 'vue-router'

//define a routes
const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
  },
  {
    path: '/login',
    name: 'auth.login',
    component: () =>
      import(/* webpackChunkName: "index" */ '../views/auth/Login.vue'),
  },
  {
    path: '/register',
    name: 'auth.register',
    component: () =>
      import(/* webpackChunkName: "index" */ '../views/auth/Register.vue'),
  },
]

//create router
const router = createRouter({
  history: createWebHistory(),
  routes, // <-- routes,
})

export default router
