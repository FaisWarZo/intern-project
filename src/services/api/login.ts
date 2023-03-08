/* eslint-disable no-console */
import service from "@configs/setaxios"
import { ILogin } from "@src/types/login"

export const loginUser = async (data: ILogin) =>
  service
    .post("http://localhost:5000/api/auth/signin", {
      "email": data.email,
      "password": data.password
    })
    .then((res) => ({
      data: res.data,
      status: res.status,
      message: "Login Success"
    }))
    .catch((_error) => ({
      data: null,
      status: false,
      message: "Email or password invalid."
    }))
