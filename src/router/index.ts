import { createRouter, createWebHashHistory, type RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: '/',
    redirect: '/home',
    component: () => import('@/layout/index.vue'),
    children: [{
      path: '/home', name: 'home',
      component: () => import('@/views/home/index.vue')
    }]
  },
  {
    path: '/design',
    name: 'design',
    component: () => import('@/views/design/index.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
