import axios, { AxiosRequestConfig } from "axios"

const service = axios.create({
  baseURL: "http://localhost:5000"
  //   headers: { "Content-Type": "application/json" },
  //   withCredentials: true
})

service.interceptors.request.use((config: AxiosRequestConfig) => {
  let _token: string | null = null
  if (typeof window !== "undefined") {
    _token = localStorage.getItem("accesstoken")
  }
  if (_token && config.headers) {
    config.headers.Authorization = `Bearer ${_token}`
  }
  return config
})

// service.interceptors.response.use(
// //   async (response) => response,
// //   (error) => {
// //     //handle revoke token, refresh token
// //     return
// //   }
// )

export default service
