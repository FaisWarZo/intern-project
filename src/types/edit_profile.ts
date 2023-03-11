export interface IEdit_profileData {
  username: string
  email: string
  coin: number
  role: string
  first_name: string
  last_name: string
  frame: string
  id: string
}
export interface IEdit_profileRes {
  data: IEdit_profileData
  status: boolean
  message: string
}

export interface IEdit_profile {
  username: string
  first_name: string
  last_name: string
}
