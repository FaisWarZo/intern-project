/* eslint-disable no-console */
import toast from "react-hot-toast"
import axiosInstance from "../Interceptor"

export const getUserById = async (id: string) => {
  axiosInstance
    .get(`http://localhost:5000/api/user/get_user/${id}`)
    .then((res) => {
      if (res.data.status) {
        console.log(res.data)
      } else {
        throw new Error(res.data.message)
      }
      return res.data
    })
    .catch((error) => {
      console.log(error)
      toast.error("User already exits.")
      return error
    })
}
