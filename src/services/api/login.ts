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
    .post(
      "https://5969-2001-fb1-17d-e42f-708e-658-e936-6173.ap.ngrok.io/api/auth/signin",
      {
        "email": data.email,
        "password": data.password
      }
    )
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
      const token = res.data.data.access_token;
      Helper.setLocalStorage({ key: ELocalKey.time, value: now })
      localStorage.setItem("accesstoken", JSON.stringify(token));
      return res.data
    })
    .catch((error) => {
      // console.log(error)
      toast.error("Email or password invalid.")
      // console.log("api error 1", error)
      // console.log("api error 2", error.response)
      // toast.error("This didn't work.")
      // if (error.response.status === 400) {
      //   console.log("api error 3", error)
      //   toast.error("error.response.data.message")
      // }
      return error
    })
}
