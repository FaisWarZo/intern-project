export interface IItemdetail {
  name: string
  cost: number
  image_item: string
  id: string
}
export interface IItememResponse {
  data: IItemdetail
  status: boolean
}
