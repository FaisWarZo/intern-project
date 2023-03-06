import MarketShow from "@components/atom/marketshow"
import Footer from "@components/Footer"
import Navbar from "@components/Navbar"
import { useState } from "react"

const Marketplace = () => {
  // eslint-disable-next-line no-empty-pattern
  const [] = useState("")
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
