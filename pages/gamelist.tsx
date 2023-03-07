import Gamelistshow from "@components/atom/gamelistshow"
import Footer from "@components/Footer"
import Navbar from "@components/Navbar"
import { updateProfile } from "@feature/authentication/authenticationSlice"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"

const Gamelist = () => {
  const dispatch = useDispatch()

  const fetchProfile = () => {
    try {
      const json = JSON.parse(localStorage.getItem("dataProfile") || "")
      dispatch(updateProfile(json))
    } catch (error) {
      return null
    }
  }

  useEffect(() => {
    if (
      (typeof window !== "undefined" &&
        localStorage.getItem("dataProfile") !== null) ||
      (typeof window !== "undefined" &&
        localStorage.getItem("dataProfile") !== undefined)
    ) {
      fetchProfile()
    }
  }, [])

  return (
    <>
      <Navbar />
      <div className="mt-40">
        <h2 className="  mb-24 text-center text-2xl text-white">🎮 GAMES 🎮</h2>
        <Gamelistshow />
      </div>
      <Footer />
    </>
  )
}

export default Gamelist
