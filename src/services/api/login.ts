/* eslint-disable no-console */
import { ELocalKey } from "@interfaces/Ilocal"
import { ILogin } from "@src/types/login"
import Helper from "@utils/helper"
import dayjs from "dayjs"
import toast from "react-hot-toast"
import axiosInstance from "../Interceptor"

export const loginUser = async (data: ILogin) => {
  const now = dayjs().format("YYYY-MM-DD HH:mm")
  axiosInstance
    .post("https://120f-2001-fb1-17c-24ba-a889-f844-98e6-cf31.ap.ngrok.io/api/auth/signin", {

        "email": data.email,
        "password": data.password

    })
    .then((res) => {
      console.log(res.data)
      Helper.setLocalStorage({ key: ELocalKey.time, value: now })
      return res.data
    })
    .catch((error) => {
      console.log("api error 1", error)
      console.log("api error 2", error.response)
      toast.error("This didn't work.")
      if (error.response.status === 400) {
        console.log("api error 3", error)
        toast.error("error.response.data.message")
      }
      // return error
    })
}
