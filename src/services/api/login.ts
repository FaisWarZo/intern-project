/* eslint-disable no-console */
import { ELocalKey } from "@interfaces/Ilocal"
import { ILogin } from "@src/types/login"
import Helper from "@utils/helper"
import dayjs from "dayjs"
import router from "next/router"
import toast from "react-hot-toast"
import axiosInstance from "../Interceptor"

export const loginUser = async (data: ILogin) => {
  const now = dayjs().format("YYYY-MM-DD HH:mm")
  axiosInstance
    .post("http://localhost:5000/api/auth/signin", {
      "email": data.email,
      "password": data.password
    })
    .then((res) => {
      console.log(res.data)
      if (res.data.status) {
        toast.success("Login Success")
        setTimeout(() => {
          router.push("/")
        }, 1000)
      } else {
        throw new Error(res.data.message)
      }
      const token = res.data.data.access_token
      Helper.setLocalStorage({ key: ELocalKey.time, value: now })
      localStorage.setItem("accesstoken", token)
      // eslint-disable-next-line prefer-destructuring
      const username = res.data.data.username
      localStorage.setItem("user", username)

      return res.data
    })
    .catch((error) => {
      toast.error("Email or password invalid.")
      return error
    })
}
