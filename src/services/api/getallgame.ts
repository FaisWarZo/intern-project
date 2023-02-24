import { IAllGameResponse } from "@src/types/allgame"
import axiosInstance from "../Interceptor"

export const getAllGame = async () =>
  axiosInstance
    .get<IAllGameResponse>("http://localhost:5000/api/user_game/get_all_game")
    .then((res) => ({
      data: res.data.data,
      status: res.data.status
    }))
    .catch((_error) => ({
      data: null,
      status: false
    }))
