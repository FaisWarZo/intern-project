export interface IAllItem {
  name: string
  cost: number
  image_item: string
  id: string
}

export interface IAllItemResponse {
  data: IAllItem[]
  status: boolean
}
