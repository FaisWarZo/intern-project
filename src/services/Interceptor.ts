import axios from "axios"

const axiosInstance = axios.create({
  headers: { "Content-Type": "application/json" },
  baseURL: "https://api.naka.im/api",
  withCredentials: false
})

// axiosInstance.interceptors.request.use(async (config: any) => {
//   const token = localStorage.get("token")
//   if (token)
//     if (token !== "undefined") {
//       config.headers.Authorization = `Bearer ${token}`
//       config.baseURL = "https://api.naka.im/api"
//       config.withCredentials = true
//     }
//   return config
// })

axios.interceptors.request.use(
  (config: any) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`
    return config
  },
  (error) => {
    // console.log(error)
    return Promise.reject(error)
  }
)

export default axiosInstance
