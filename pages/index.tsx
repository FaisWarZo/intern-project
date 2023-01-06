import HeaderSlide from "@components/atom/HeaderSlide"
import Hotgame from "@components/atom/Hotgame"
import Scoreboard from "@components/atom/scoreboard"
import Footer from "@components/Footer"
import Navbar from "@components/Navbar"
import { useState } from "react"

const Home = () => {
  // eslint-disable-next-line no-empty-pattern
  const [] = useState("")
  return (
    <>
      <Navbar />
      <div>
        <div className="mt-12 text-2xl text-white">
          <HeaderSlide />
        </div>
        <div className="container mx-auto">
          <Hotgame />
          <Scoreboard />
        </div>
      </div>
      <Footer />
      {/* <HeaderSlide /> */}
    </>
  )
}

export default Home
