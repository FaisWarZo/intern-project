import service from "@configs/setaxios"
import { IScoreboard } from "@src/types/scoreboard"

export const scoreBoard = async () =>
  service
    .get<IScoreboard>("http://localhost:5000/api/user/get_top_player")
    .then((res) => ({
      data: res.data.data,
      status: res.data.status
    }))
    .catch((_error) => ({
      data: null,
      status: false
    }))
