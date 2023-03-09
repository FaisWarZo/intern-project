/* eslint-disable no-console */
import service from "@configs/setaxios"
import { IGetUser } from "@src/types/getuseremail"

export const getUserByEmail = async (email: string) =>
  service
    .get<IGetUser>(`http://localhost:5000/api/auth/profile/${email}`)
    .then((res) => ({
      data: res.data.data,
      status: res.data.status
    }))
    .catch((_error) => ({
      data: null,
      status: false
    }))
