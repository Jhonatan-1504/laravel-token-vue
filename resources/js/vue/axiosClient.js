import axios from 'axios';
import Notification from '@/helpers/notification';

const axiosClient = axios.create({
  baseURL: "/api"
})

axiosClient.interceptors.response.use(
  (response) =>{
    let payload = typeof response.config.data === "string" ? JSON.parse(response.config.data) : null
    let hideNotification = payload ? payload.hide_notification : null

    let data = response.data
    let message = data.message
    
    if(message && !hideNotification){
      Notification.success(message)
    }

    return response
  },
  (AxiosError) => {
    let data = AxiosError.response.data
    let errors = Object.values(data.errors).at()

    if(errors && errors.length){
      errors.forEach((error)=>{ 
        Notification.error(`${error}`)
      })
    }

    return AxiosError
  }
)

export default axiosClient