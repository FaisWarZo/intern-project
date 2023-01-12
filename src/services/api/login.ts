import { ELocalKey } from "@interfaces/Ilocal"
import { ILogin } from "@src/types/login"
import Helper from "@utils/helper"
import axios from "axios"
import dayjs from "dayjs"
import axiosInstance from "../Interceptor"

export const loginUser = async (data: ILogin) => {
  const now = dayjs().format("YYYY-MM-DD HH:mm")
  axiosInstance
    .put("https://api.naka.im/api/auth/authentication", {
      "data": {
        "email": data.email,
        "password": data.password
      }
    })
    .then((res) => {
      // console.log(res.data)
      Helper.setLocalStorage({ key: ELocalKey.time, value: now })
      return res.data
    })
    .catch(() => {
      return undefined
    })
}
