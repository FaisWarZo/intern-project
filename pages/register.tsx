/* eslint-disable no-console */
import Link from "next/link"
import React from "react"
import { useForm } from "react-hook-form"
import Footer from "@components/Footer"
import Navbar from "@components/Navbar"
import { FaEnvelope, FaUnlockAlt, FaUser } from "react-icons/fa"
import toast, { Toaster } from "react-hot-toast"
import { registerUser } from "@src/services/api/register"
import router from "next/router"
import { ErrorMessage } from "@hookform/error-message"

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  console.log("errors", errors)

  const onSubmit = async (data) => {
    console.log(data)
    const { status, data: regisData, message } = await registerUser(data)
    if (status && regisData) {
      toast.success(message)
      setTimeout(() => {
        router.push("/login")
      }, 1000)
    } else {
      toast.error(message)
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
        <div className="mt-60 mb-[350px] flex-col justify-center">
          <h2 className="mb-9 text-center text-2xl text-white">Register </h2>
          <div className="grid place-content-center">
            <div className="btn-input">
              <div className="flex justify-between">
                <FaUser
                  size={20}
                  className="mt-2.5"
                />
                <input
                  {...register("username", {
                    required: "Please input your username.",
                    minLength: {
                      value: 4,
                      message: "Username must have at least 4 characters"
                    }
                  })}
                  type="text"
                  id="username"
                  placeholder="Username"
                  className="ml-5 bg-colorinput-black"
                />
              </div>
            </div>
            <ErrorMessage
              errors={errors}
              name="username"
              render={({ message }) => (
                <div className="mt-2 text-red-500">{message}</div>
              )}
            />

            <div className="btn-input">
              <div className="flex justify-between">
                <FaEnvelope
                  size={20}
                  className="mt-2.5"
                />
                <input
                  {...register("email", {
                    required: "Please input your email.",
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: "Entered value does not match email format"
                    }
                  })}
                  type="email"
                  id="email"
                  placeholder="Email address "
                  className="ml-5 bg-colorinput-black"
                />
              </div>
            </div>
            <ErrorMessage
              errors={errors}
              name="email"
              render={({ message }) => (
                <div className="mt-2 text-red-500">{message}</div>
              )}
            />

            <div className="btn-input">
              <div className="flex justify-between">
                <FaUnlockAlt
                  size={20}
                  className="mt-2.5"
                />
                <input
                  {...register("password", {
                    required: "Please input your password.",
                    minLength: {
                      value: 4,
                      message: "Password must have at least 4 characters"
                    }
                  })}
                  type="password"
                  id="password"
                  placeholder="Password"
                  className="ml-5 bg-colorinput-black"
                />
              </div>
            </div>
            <ErrorMessage
              errors={errors}
              name="password"
              render={({ message }) => (
                <div className="mt-2 text-red-500">{message}</div>
              )}
            />

            <div className="btn-input">
              <div className="flex justify-between">
                <FaUser
                  size={20}
                  className="mt-2.5"
                />
                <input
                  {...register("first_name", {
                    required: "Please input your Firstname.",
                    minLength: {
                      value: 4,
                      message: "Firstname must have at least 4 characters"
                    }
                  })}
                  type="text"
                  id="fname"
                  placeholder="First name"
                  className="ml-5 bg-colorinput-black"
                />
              </div>
            </div>
            <ErrorMessage
              errors={errors}
              name="first_name"
              render={({ message }) => (
                <div className="mt-2 text-red-500">{message}</div>
              )}
            />

            <div className="btn-input">
              <div className="flex justify-between">
                <FaUser
                  size={20}
                  className="mt-2.5"
                />
                <input
                  {...register("last_name", {
                    required: "Please input your Lastname.",
                    minLength: {
                      value: 4,
                      message: "Lastname must have at least 4 characters"
                    }
                  })}
                  type="text"
                  id="lname"
                  placeholder="Last name"
                  className="ml-5 bg-colorinput-black"
                />
              </div>
            </div>
            <ErrorMessage
              errors={errors}
              name="last_name"
              render={({ message }) => (
                <div className="mt-2 text-red-500">{message}</div>
              )}
            />
          </div>

          <div className="container mt-12 flex min-w-full flex-col items-center">
            <button
              className="gbutton"
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
            This cookie enables us to tell if your browser runs Javascript.{" "}
            <br />
            This cookie expires when you leave the website
          </h6>
        </div>
      </form>
      <Footer />
    </>
  )
}

export default Register
