import service from "@configs/setaxios"
import { IItememResponse } from "@src/types/itemdetail"

export const getItemDetail = async (id) =>
  service
    .get<IItememResponse>(`http://localhost:5000/api/user_item/get_item/${id}`)
    .then((res) => ({
      data: res.data.data,
      status: res.data.status
    }))
    .catch((_error) => ({
      data: null,
      status: false
    }))
