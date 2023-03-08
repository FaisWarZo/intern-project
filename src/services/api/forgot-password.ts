import service from "@configs/setaxios"
import {
  IForgotPassword,
  IForgotPasswordResponse
} from "@src/types/forgot-password"

export const ForgotPassword = async (data: IForgotPassword) =>
  service
    .post<IForgotPasswordResponse>(
      "http://localhost:5000/api/auth/forgot_password",
      data
    )
    .then((res) => ({
      data: res.data,
      status: res.status
    }))
    .catch((_error) => ({
      data: null,
      status: false
    }))
