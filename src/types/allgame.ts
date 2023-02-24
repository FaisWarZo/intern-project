export interface IAllGame {
  name: string
  detail: string
  is_active: boolean
  createdAt: string
  updatedAt: string
  image_banner: string
  image_main: string
  id: string
}
export interface IAllGameResponse {
  data: IAllGame[]
  status: boolean
}
