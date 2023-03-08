/* eslint-disable no-console */
import HeaderSlide from "@components/atom/HeaderSlide"
import Hotgame from "@components/atom/Hotgame"
import Scoreboard from "@components/atom/Scoreboard"
import Footer from "@components/Footer"
import Navbar from "@components/Navbar"
import { updateProfile } from "@feature/authentication/authenticationSlice"
import { useEffect } from "react"
import { useDispatch } from "react-redux"

const Home = () => {
  const dispatch = useDispatch()

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
        <Footer />
      </div>
    </>
  )
}

export default Home
