import Notification from "@/helpers/notification";

export const AuthServices = {
  async register(payload){
    try {
      const {data} = await axios.post("/api/register",payload)
  
      return data
    } catch (error) {
      Notification.error(error)
    }
  }
}