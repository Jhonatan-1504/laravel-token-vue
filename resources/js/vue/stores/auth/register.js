import { RegisterUser } from "@/services/AuthServices";
import { defineStore } from "pinia";

export const useRegister = defineStore("registerUser",{
  state:()=>({
    loading:false,
    form:{
      name:"",
      email:"",
      password:"",
      password_confirmation:""
    }
  }),
  actions:{
    async Register(){
      this.loading = true

      try {
        const data = await RegisterUser(this.form)
        console.log(data);
      } catch (error) {
        
      } finally {
        this.loading = false
      }
    }
  }
})