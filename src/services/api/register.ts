/* eslint-disable no-console */

import service from "@configs/setaxios"
import { IRegister, IRegisterUser } from "@src/types/register"

export const registerUser = async (data: IRegister) =>
  service
    .post<IRegisterUser>("http://localhost:5000/api/auth/signup", {
      "username": data.username,
      "email": data.email,
      "password": data.password,
      "first_name": data.first_name,
      "last_name": data.last_name
    })
    .then((res) => ({
      data: res.data.data,
      status: res.data.status,
      message: "Create account success."
    }))
    .catch((_error) => ({
      data: null,
      status: false,
      message: _error.response.data.message ?? " "
    }))
