export interface IRegister {
  username: string
  email: string
  password: string
  first_name: string
  last_name: string
}

export interface IRegisterUser {
  data: IRegister | null
  status: boolean
}
