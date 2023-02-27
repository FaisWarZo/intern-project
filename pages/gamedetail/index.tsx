import React, { useEffect } from "react"
import { useRouter } from "next/router"
import { useSelector } from "react-redux"
import { dataProfile } from "@feature/authentication/authenticationSlice"

const Gamedetail = () => {
  const router = useRouter()
  //   const dataDetailUser = useSelector(dataProfile)
  useEffect(() => {
    router.push("/gamelist")
  }, [])

  return <div>index</div>
}

export default Gamedetail
