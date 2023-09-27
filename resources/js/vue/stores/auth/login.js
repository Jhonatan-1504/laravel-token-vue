import { LoginUser } from "@/services/AuthServices";
import { defineStore } from "pinia";

export const useLogin = defineStore("loginUser",{
  state:()=>({
    loading:false,
    form:{
      email:"",
      password:""
    }
  }),
  actions:{
    async AuthLogin(){
      this.loading = true

      try {
        const data = await LoginUser(this.form)
        
        return data.success ?? false
      } catch (error) {
        
      } finally {
        this.loading = false
      }
    }
  }
})