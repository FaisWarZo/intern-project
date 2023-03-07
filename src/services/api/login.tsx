/* eslint-disable no-console */
import service from "@configs/setaxios"
import { updateProfile } from "@feature/authentication/authenticationSlice"
import { ELocalKey } from "@interfaces/Ilocal"
import { ILogin } from "@src/types/login"
import Helper from "@utils/helper"
import dayjs from "dayjs"
// import router from "next/router"
import toast from "react-hot-toast"

export const loginUser = async (data: ILogin) => {
  const now = dayjs().format("YYYY-MM-DD HH:mm")

  console.log("data2", data)
  return service
    .post("http://localhost:5000/api/auth/signin", {
      "email": data.email,
      "password": data.password
    })
    .then((res) => {
      console.log(res.data)
      if (res.data.status) {
        toast.success("Login Success")
      }
      return res
    })
    .catch((error) => {
      toast.error("Email or password invalid.")
      return error
    })
}
