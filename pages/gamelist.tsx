import Gamelistshow from "@components/atom/gamelistshow"
import Search from "@components/atom/Search"
import Footer from "@components/Footer"
import Navbar from "@components/Navbar"
import { useState } from "react"

const Gamelist = () => {
  // eslint-disable-next-line no-empty-pattern
  const [] = useState("")
  return (
    <>
      <Navbar />
      <div className="mt-40">
        <h2 className="  mb-24 text-center text-2xl text-white">🎮 GAMES 🎮</h2>
        <Search />
        <Gamelistshow />
      </div>
      <Footer />
    </>
  )
}

export default Gamelist
