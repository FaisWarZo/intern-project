/* eslint-disable no-console */
import service from "@configs/setaxios"
import { IBuyItemServ } from "@src/types/buyitemresponse"

export const buyItemserv = async (_userId: string, _itemId: string) =>
  service
    .post("http://localhost:5000/api/marketplace/buy_item", {
      user_id: _userId,
      item_id: _itemId
    })
    .then((res) => ({
      data: res.data.data,
      status: res.data.status,
      message: res.data.message
    }))
    .catch((_error) => ({
      data: null,
      status: false,
      message: _error.response.data.message ?? " "
    }))
