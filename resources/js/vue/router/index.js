import { createRouter, createWebHistory} from "vue-router";

export default createRouter({
  history: createWebHistory(),
  routes:[
    {
      path:"/login",
      name:"login",
      component:()=>import("@/pages/auth/login.vue")
    },
    {
      path:"/",
      name:"dashboard",
      component:()=>import("@/pages/dashboard.vue")
    }
  ]
})