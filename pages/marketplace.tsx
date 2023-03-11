import MarketShow from "@components/atom/marketshow"
import Footer from "@components/Footer"
import Navbar from "@components/Navbar"
import { useEffect } from "react"
import { useDispatch } from "react-redux"

const Marketplace = () => {
  const dispatch = useDispatch()

  useEffect(() => {}, [])

  return (
    <>
      <Navbar />
      <div className="mt-40">
        <h2 className="  mb-24 text-center text-2xl text-white">
          🛒 Marketplace 🛒
        </h2>
        <MarketShow />
      </div>
      <Footer />
    </>
  )
}

export default Marketplace
