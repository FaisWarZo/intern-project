/* eslint-disable no-console */
import service from "@configs/setaxios"
import { IUsedItem } from "@src/types/useitem"

export const selectItemUser = async (_userId: string, _recordId: string) =>
  service
    .post(
      `http://localhost:5000/api/user_inventory/get_item_inventory/${_userId}/${_recordId}`,
      {
        user_id: _userId,
        item_id: _recordId
      }
    )
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
