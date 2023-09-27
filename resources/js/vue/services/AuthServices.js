import axiosClient from "@/axiosClient";
import Notification from "@/helpers/notification";

export async function RegisterUser(payload){
  try {
    const {data} = await axiosClient.post("/register",payload)

    return data
  } catch (error) {
    Notification.error(error)
  }
}

export async function LoginUser(payload){
  try {
    const {data} = await axiosClient.post("/login",payload)

    return data
  } catch (error) {
    Notification.error(error)
  }
}