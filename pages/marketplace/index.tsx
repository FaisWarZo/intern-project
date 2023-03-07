import React, { useEffect } from "react"
import { useRouter } from "next/router"

const Itemdetail = () => {
  const router = useRouter()
  useEffect(() => {
    router.push("/marketplace")
  }, [router])

  return <div>index</div>
}

export default Itemdetail
