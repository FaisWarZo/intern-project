import service from "@configs/setaxios"
import { IInventoryResponse } from "@src/types/inventory"

export const getInventory = async (id) =>
  service
    .get<IInventoryResponse>(
      `http://localhost:5000/api/user_inventory/get_inventory/${id}`
    )
    .then((res) => ({
      data: res.data.data,
      status: res.data.status
    }))
    .catch((_error) => ({
      data: null,
      status: false
    }))
