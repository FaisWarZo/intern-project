/* eslint-disable no-console */
import service from "@configs/setaxios"
import toast from "react-hot-toast"

export const getUserById = async (id: string) => {
  service
    .get(`http://localhost:5000/api/user/get_user/${id}`)
    .then((res) => {
      if (res.data.status) {
        console.log(res.data)
      } else {
        throw new Error(res.data.message)
      }
      return res.data
    })
    .catch((error) => {
      console.log(error)
      toast.error("User already exits.")
      return error
    })
}
