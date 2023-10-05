import { createRouter, createWebHistory } from "vue-router";
import { useCredentails } from '@/stores/auth/credentials';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/login",
      name: "login",
      component: () => import("@/pages/auth/login.vue")
    },
    {
      path: "/register",
      name: "register",
      component: () => import("@/pages/auth/register.vue")
    },
    {
      path: "/forgot-password",
      name: "forgot-password",
      component: () => import("@/pages/auth/forgot-password.vue")
    },
    {
      path: "/",
      name: "dashboard",
      meta: { requiredCredentails: true },
      component: () => import("@/pages/dashboard.vue")
    }
  ]
})

router.beforeEach((to, from, next) => {
  const credentials = useCredentails()

  if (to.meta.requiredCredentails && !credentials.isLoggin) {
    next({ name: "login" });
  } else if (to.path.includes("login") && credentials.isLoggin) {
    next({ name: "dashboard" });
  } else {
    next();
  }
})

export default router