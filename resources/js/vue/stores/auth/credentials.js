import { defineStore } from "pinia";
import { clearLocalStorage, getLocalStorage, setLocalStorage } from '@/tools/local-storage';

export const useCredentails = defineStore("credentialsUser", {
  state: () => ({
    loading: false,
    access_token: getLocalStorage("ACCESS_TOKEN"),
    expires_in: getLocalStorage("EXPIRES_IN"),
    token_type: getLocalStorage("TYPE_TOKEN")
  }),
  actions: {
    setCredentails(response) {
      if (!response) return
      setLocalStorage("ACCESS_TOKEN", response.access_token)
      setLocalStorage("EXPIRES_IN", response.expires_in)
      setLocalStorage("TYPE_TOKEN", response.token_type)

      this.access_token = response.access_token
      this.expires_in = response.expires_in
      this.token_type = response.token_type
    },
    removeCredentails() {
      clearLocalStorage()
    }
  },
  getters: {
    isLoggin: (state) => Boolean(state.access_token)
  }
})