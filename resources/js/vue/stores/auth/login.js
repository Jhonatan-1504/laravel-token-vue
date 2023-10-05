import { LoginUser } from "@/services/AuthServices";
import { useCredentails } from './credentials';
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
      const credentails = useCredentails()

      this.loading = true

      try {
        const data = await LoginUser(this.form)
        
        if(data.success){
          credentails.setCredentails(data)
        }

        return data.success ?? false
      } catch (error) {
        
      } finally {
        this.loading = false
      }
    }
  }
})