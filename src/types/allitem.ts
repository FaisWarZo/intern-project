export interface IAllItem {
  private _id(_id: any)
  name: string
  cost: number
  image_item: string
  id: string
}

export interface IAllItemResponse {
  data: IAllItem[]
  status: boolean
}
