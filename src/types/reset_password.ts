export interface IResetPassword {
  verify_code: string
  password: string
}

export interface IResetPasswordRes {
  message: string
  status: boolean
}
