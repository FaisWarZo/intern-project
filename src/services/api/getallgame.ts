import service from "@configs/setaxios"
import { IAllGameResponse } from "@src/types/allgame"

export const getAllGame = async () =>
  service
    .get<IAllGameResponse>("http://localhost:5000/api/user_game/get_all_game")
    .then((res) => ({
      data: res.data.data,
      status: res.data.status
    }))
    .catch((_error) => ({
      data: null,
      status: false
    }))
