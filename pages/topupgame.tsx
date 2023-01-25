import Search from "@components/atom/Search"
import Footer from "@components/Footer"
import Navbar from "@components/Navbar"
import Image from "next/image"
import { useState } from "react"

const Topupgame = () => {
  // eslint-disable-next-line no-empty-pattern
  const [] = useState("")
  return (
    <>
      <Navbar />
      <div className="mt-40">
        <h2 className="mb-9 text-center text-2xl text-white">🎮 Top Up 🎮</h2>
        <div className="container mx-auto">
          <div className="detail mb-10">
            <img
              alt="1"
              src="https://www.truemoney.com/wp-content/uploads/2021/09/truemoneywaller-fundin-banner-20210914-1100x550-1.jpeg"
              width={1000}
              height={250}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Topupgame
