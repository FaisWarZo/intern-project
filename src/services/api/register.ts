/* eslint-disable no-console */
import { ELocalKey } from "@interfaces/Ilocal"
import { IRegister } from "@src/types/register"
import Helper from "@utils/helper"
import dayjs from "dayjs"
import router from "next/router"
import toast from "react-hot-toast"
import axiosInstance from "../Interceptor"

export const registerUser = async (data: IRegister) => {
  const now = dayjs().format("YYYY-MM-DD HH:mm")
  axiosInstance
    .post(
      "https://8bcf-2001-fb1-17c-24ba-fc9c-6287-b823-549a.ap.ngrok.io/api/auth/signup",
      {
        "username": data.username,
        "email": data.email,
        "password": data.password
      }
    )
    .then((res) => {
      console.log(res.data)
      if (res.data.status) {
        toast.success("Create account success.")
        setTimeout(() => {
          router.push("/login")
        }, 1000)
      } else {
        throw new Error(res.data.message)
      }
      Helper.setLocalStorage({ key: ELocalKey.time, value: now })
      return res.data
    })
    .catch((error) => {
      console.log(error)
      toast.error("User already exits.")
      return error
    })
}
