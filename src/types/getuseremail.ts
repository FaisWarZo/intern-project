export interface IGetuserByEmail {
  username: string
  email: string
  role: string
  coin: number
  first_name: string
  last_name: string
  id: string
  frame: string
}

export interface IGetUser {
  data: IGetuserByEmail
  status: boolean
}
