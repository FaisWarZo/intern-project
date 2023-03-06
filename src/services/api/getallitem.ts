import { IAllItemResponse } from "@src/types/allitem"
import axiosInstance from "../Interceptor"

export const getAllItem = async () =>
  axiosInstance
    .get<IAllItemResponse>("http://localhost:5000/api/user_item/get_all_item")
    .then((res) => ({
      data: res.data.data,
      status: res.data.status
    }))
    .catch((_error) => ({
      data: null,
      status: false
    }))
