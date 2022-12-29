import Footer from "@components/Footer"
import Navbar from "@components/Navbar"
import { useState } from "react"

const Home = () => {
  // eslint-disable-next-line no-empty-pattern
  const [] = useState("")
  return (
    <>
      <Navbar />
      <div className="flex h-screen w-full  bg-blackground-black">
        <div className="mt-32 text-2xl text-white">Hello</div>
      </div>
      <Footer />
    </>
  )
}

export default Home
