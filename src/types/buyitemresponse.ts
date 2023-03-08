export interface IUser {
  username: string
  email: string
  role: string
  coin: number
  first_name: string
  last_name: string
  id: string
}

export interface IAddItem {
  player_id: string
  item_id: string
  qty: number
  createdAt: string
  updatedAt: string
  id: string
}

export interface IUserResponse {
  user: IUser
  add_item: IAddItem
}

export interface IBuyItemServ {
  data: IUserResponse
  status: boolean
}

export interface IBuyItemRes {
  message: string
  status: boolean
}
