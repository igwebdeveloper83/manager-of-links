import { createRouter, createWebHistory, type Router } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import { supabase } from '@/supabase.js'

let user = null

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: { requiresAuth: true },
  },
  {
    path: '/auth',
    name: 'auth',
    component: (): Promise<typeof import('@/views/AuthView.vue')> => import('@/views/AuthView.vue')
  },
  {
    path: '/reset-password',
    name: 'reset-password',
    component: (): Promise<typeof import('@/views/ResetPassword.vue')> => import('@/views/ResetPassword.vue'),
  },
]

const router: Router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

const isAuthenticated = async (): Promise<boolean> => {
  const { data: { session } } = await supabase.auth.getSession()
  console.log(session)
  return !!session
}

router.beforeEach(async (to, from, next) => {
  if (!to.meta.requiresAuth) {
    return next()
  }

  if (await isAuthenticated()) {
    next()
  } else {
    next({ name: 'auth' })
  }
})

export default router
