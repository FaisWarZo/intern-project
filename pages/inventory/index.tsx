import React, { useEffect } from "react"
import { useRouter } from "next/router"
import { useSelector } from "react-redux"
import { dataProfile } from "@feature/authentication/authenticationSlice"

const Inventory = () => {
  const router = useRouter()
  const dataDetailUser = useSelector(dataProfile)
  useEffect(() => {
    router.push(dataDetailUser.id)
  }, [])

  return <div>index</div>
}

export default Inventory
