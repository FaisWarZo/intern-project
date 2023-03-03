export interface IGameDetail {
  name: string
  detail: string
  is_active: boolean
  createdAt: string
  updatedAt: string
  image_banner: string
  image_main: string
  id: string
}
export interface IGameDetailResponse {
  data: IGameDetail
  status: boolean
}
