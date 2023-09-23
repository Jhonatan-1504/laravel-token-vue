import { createRouter, createWebHistory} from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes:[
    {
      path:"/login",
      name:"login",
      component:()=>import("@/pages/auth/login.vue")
    },
    {
      path:"/register",
      name:"register",
      component:()=>import("@/pages/auth/register.vue")
    },
    {
      path:"/",
      name:"dashboard",
      component:()=>import("@/pages/dashboard.vue")
    }
  ]
})

router.beforeEach((to,from,next)=>{
  if(to.name === 'dashboard'){
    next({name:"login"})
  }else{
    next()
  }
})

export default router