import service from "@configs/setaxios"
import { IEdit_profile, IEdit_profileRes } from "@src/types/edit_profile"

export const edit_Profile = async (id, data: IEdit_profile) =>
  service
    .put<IEdit_profileRes>(
      `http://localhost:5000/api/user/update_user/${id}`,
      data
    )
    .then((res) => ({
      data: res.data.data,
      status: res.status,
      message: res.data.message
    }))
    .catch((_error) => ({
      data: null,
      status: false,
      message: _error.response.data.message ?? " "
    }))
