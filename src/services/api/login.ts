import { ELocalKey } from "@interfaces/Ilocal"
import { ILogin } from "@src/types/login"
import Helper from "@utils/helper"
import axios from "axios"
import dayjs from "dayjs"
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
    .catch(() => {
      return undefined
    })
}
