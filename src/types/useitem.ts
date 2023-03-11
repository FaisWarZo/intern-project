export interface IUsedItemRes {
  username: string
  email: string
  role: string
  coin: number
  first_name: string
  last_name: string
  frame: string
  id: string
}

export interface IUsedItem {
  data: IUsedItemRes
  message: string
  status: boolean
}
