import axiosClient from '@/axiosClient';
import { reactive, ref } from 'vue';

export async function RegisterUser(payload){
  try {
    const {data} = await axiosClient.post("/register",payload)

    return data
  } catch (errors) {
    console.log(errors);
  }
}

export function useRegister(){
  const form = reactive({
    name:"",
    email:"",
    password:"",
    password_confirmation:""
  })

  const loading = ref(false)

  const register = async () => {
    loading.value = true

    try {
      await RegisterUser(form)
    } catch (error) {
      
    } finally {
      loading.value = false
    }
  }

  return {form, register, loading}
}