import Link from "next/link"
import React from "react"
import { FaEnvelope, FaUnlockAlt } from "react-icons/fa"
import Footer from "@components/Footer"
import Navbar from "@components/Navbar"

const Login = () => (
  <>
    <Navbar />
    <form>
      <div className="mt-60 flex-col justify-center ">
        <h2 className="mb-9 text-center text-2xl text-white">SIGN IN </h2>
        <div className="grid place-content-center">
          <div className="btn-input">
            <div className="flex justify-between">
              <FaEnvelope
                size={20}
                className="mt-2.5"
              />
              <input
                type="email"
                id="email"
                placeholder="Email address "
                className="ml-5 bg-colorinput-black"
              />
            </div>
          </div>

          <div className="btn-input">
            <div className="flex justify-between">
              <FaUnlockAlt
                size={20}
                className="mt-2.5"
              />
              <input
                type="password"
                id="password"
                placeholder="Password"
                className="ml-5 bg-colorinput-black"
              />
            </div>
          </div>
        </div>
        {/* container min-w-full flex flex-col items-center */}
        <div className="container mt-12 flex min-w-full flex-col items-center">
          <button
            className="button"
            type="submit"
          >
            SIGN IN
          </button>
        </div>
        <div className="mt-5 text-center">
          <Link
            href="/test"
            className="info decoration text-gray-400 underline decoration-gray-400"
          >
            Forgot Password?
          </Link>
        </div>
        <div className="container mt-10 flex min-w-full flex-col items-center">
          <Link
            href="#"
            role="button"
          >
            <button
              className="Rbutton "
              type="button"
            >
              REGISTER
            </button>
          </Link>
        </div>
        <h6 className="info mt-5 mb-52 text-center text-white">
          This cookie enables us to tell if your browser runs Javascript. <br />
          This cookie expires when you leave the website
        </h6>
      </div>
      <Footer />
    </form>
  </>
)

export default Login
