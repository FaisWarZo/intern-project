export interface ILogin {
  email: string
  password: string
}

export interface ILoginUser {
  data: ILogin
}

export interface ILoginResponse {
  username: string
  email: string
  role: string
  coin: number
  first_name: string
  last_name: string
  id: string
  access_token: string
  refresh_token: string
  frame: string
}

export interface ILoginData {
  data: ILoginResponse
  status: boolean
}
