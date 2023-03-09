import axios, { AxiosRequestConfig } from "axios"

const service = axios.create({
  baseURL: "http://localhost:5000",
  headers: { "Content-Type": "application/json" },
  withCredentials: true
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

export default service
