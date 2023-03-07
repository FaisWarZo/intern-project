export interface IInventory {
  _id: string
  name: string
  totalQty: number
  image_item: string
  item_id: string
}
export interface IInventoryResponse {
  data: IInventory[]
  status: boolean
}
