import service from "@configs/setaxios"
import { IResetPasswordRes } from "@src/types/reset_password"

export const resetPassword = async (verify_code, password: string) =>
  service
    .post<IResetPasswordRes>("http://localhost:5000/api/auth/reset_password", {
      verify_code,
      password
    })
    .then((res) => ({
      message: res.data.message,
      status: res.data.status
    }))
    .catch((_error) => ({
      message: "verifycode expire.",
      status: false
    }))
