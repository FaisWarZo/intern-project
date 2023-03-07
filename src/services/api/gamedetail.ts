import service from "@configs/setaxios"
import { IGameDetailResponse } from "@src/types/gamedetail"

export const getGameDetail = async (id) =>
  service
    .get<IGameDetailResponse>(
      `http://localhost:5000/api/user_game/get_game/${id}`
    )
    .then((res) => ({
      data: res.data.data,
      status: res.data.status
    }))
    .catch((_error) => ({
      data: null,
      status: false
    }))
