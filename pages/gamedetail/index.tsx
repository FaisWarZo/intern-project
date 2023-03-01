import React, { useEffect } from "react"
import { useRouter } from "next/router"

const Gamedetail = () => {
  const router = useRouter()
  useEffect(() => {
    router.push("/gamelist")
  }, [])

  return <div>index</div>
}

export default Gamedetail
