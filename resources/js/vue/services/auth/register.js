import axiosClient from '@/axiosClient';

export async function RegisterUser(payload){
  try {
    const {data} = await axiosClient.post("/register",payload)

    return data
  } catch (errors) {
    console.log(errors);
  }
}