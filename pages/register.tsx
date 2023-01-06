import Link from "next/link"
import React from "react"
import Footer from "@components/Footer"
import Navbar from "@components/Navbar"
import { FaEnvelope, FaUnlockAlt, FaUser } from "react-icons/fa"

const Register = () => (
  <>
    <Navbar />
    <form>
      <div className="mt-60 flex-col justify-center">
        <h2 className="mb-9 text-center text-2xl text-white">Register </h2>
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

          <div className="btn-input">
            <div className="flex justify-between">
              <FaUnlockAlt
                size={20}
                className="mt-2.5"
              />
              <input
                type="password"
                id="password-confirm"
                placeholder="Confirm password"
                className="ml-5 bg-colorinput-black"
              />
            </div>
          </div>

          <div className="btn-input">
            <div className="flex justify-between">
              <FaUser
                size={20}
                className="mt-2.5"
              />
              <input
                type="text"
                id="fname"
                placeholder="Firstname"
                className="ml-5 bg-colorinput-black"
              />
            </div>
          </div>

          <div className="btn-input">
            <div className="flex justify-between">
              <FaUser
                size={20}
                className="mt-2.5"
              />
              <input
                type="text"
                id="lname"
                placeholder="Lastname"
                className="ml-5 bg-colorinput-black"
              />
            </div>
          </div>
        </div>

        <div className="container mt-12 flex min-w-full flex-col items-center">
          <button
            className="button"
            type="submit"
          >
            REGISTER
          </button>
        </div>

        <div className="info mt-5 text-center text-white">
          Already have an account?
        </div>

        <div className="container mt-10 flex min-w-full flex-col items-center">
          <Link
            href="/login"
            role="button"
          >
            <button
              className="Rbutton "
              type="button"
            >
              SIGN IN
            </button>
          </Link>
        </div>

        <h6 className="info mt-5 mb-52 text-center text-white">
          This cookie enables us to tell if your browser runs Javascript. <br />
          This cookie expires when you leave the website
        </h6>
      </div>
    </form>
    <Footer />
  </>
)

export default Register
