/* eslint-disable no-console */
/* eslint-disable prefer-arrow-callback */
import React from "react"
import Link from "next/link"
import { useForm } from "react-hook-form"
import { FaEnvelope, FaUnlockAlt } from "react-icons/fa"
import Footer from "@components/Footer"
import Navbar from "@components/Navbar"
import { loginUser } from "@src/services/api/login"
import toast, { Toaster } from "react-hot-toast"
import {
  IAuthState,
  IDatauser,
  updateProfile
} from "@feature/authentication/authenticationSlice"
import { useDispatch } from "react-redux"
import router from "next/router"
import Helper from "@utils/helper"
import { ELocalKey } from "@interfaces/Ilocal"
import dayjs from "dayjs"

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm()
  const dispatch = useDispatch()
  const now = dayjs().format("YYYY-MM-DD HH:mm")
  const onSubmit = (data) => {
    if (data) {
      loginUser(data)
        .then((res) => {
          if (res.status) {
            dispatch(updateProfile(res.data))
            const token = res.data?.access_token
            Helper.setLocalStorage({ key: ELocalKey.time, value: now })
            localStorage.setItem("accesstoken", token)
            toast.success("Login Success")
            setTimeout(() => {
              router.push("/")
            }, 1000)
          } else {
            toast.error("Email or password invalid.")
          }
        })
        .catch((err) => {
          toast.error("Email or password invalid.")
          console.log("ERROR", err, err.response)
          if (err?.response?.status === 400) {
            console.log(err.response.status)
          }
        })
    }
  }

  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <Navbar />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mt-60 mb-[400px] flex-col justify-center">
          <h2 className="mb-9 text-center text-2xl text-white">SIGN IN </h2>
          <div className="grid place-content-center">
            <div className="btn-input">
              <div className="flex justify-between">
                <FaEnvelope
                  size={20}
                  className="mt-2.5"
                />
                <input
                  {...register("email", { required: true })}
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
                  {...register("password", { required: true })}
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
              className="gbutton"
              type="submit"
            >
              SIGN IN
            </button>
          </div>

          <div className="mt-5 text-center">
            <Link
              href="/forgot-password"
              className="info decoration text-gray-400 underline decoration-gray-400"
            >
              Forgot Password?
            </Link>
          </div>
          <div className="container mt-10 flex min-w-full flex-col items-center">
            <Link
              href="/register"
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
          <h6 className="info mb-80 mt-5 text-center text-white">
            This cookie enables us to tell if your browser runs Javascript.{" "}
            <br />
            This cookie expires when you leave the website
          </h6>
        </div>
        <Footer />
      </form>
    </>
  )
}

export default Login
