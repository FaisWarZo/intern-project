/* eslint-disable no-console */
import { updateProfileRefresh } from "@feature/authentication/authenticationSlice"
import { getUserByEmail } from "@src/services/api/getuserbyemail"
import React, { useEffect } from "react"
import { useDispatch } from "react-redux"

const RunBackGround = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    if (typeof window !== "undefined") {
      const accesstoken = localStorage.getItem("accesstoken")
      const email = localStorage.getItem("email")
      if (accesstoken && email) {
        getUserByEmail(email)
          .then((res) => {
            if (res.data) {
              dispatch(updateProfileRefresh(res.data))
            }
          })
          .catch((err) => {
            console.log(err)
          })
      }
    }
  }, [])
  return <></>
}

export default RunBackGround
