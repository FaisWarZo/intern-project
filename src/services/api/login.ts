/* eslint-disable no-console */
import service from "@configs/setaxios"
import { ILogin, ILoginData } from "@src/types/login"

export const loginUser = async (data: ILogin) =>
  service
    .post<ILoginData>("http://localhost:5000/api/auth/signin", {
      email: data.email,
      password: data.password
    })
    .then((res) => ({
      data: res.data.data,
      status: res.data.status,
      message: "Login Success"
    }))
    .catch((_error) => ({
      data: null,
      status: false,
      message: "Email or password invalid."
    }))
