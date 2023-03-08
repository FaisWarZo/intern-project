import React, { useEffect, useRef } from "react"
import { Toaster } from "react-hot-toast"
import Navbar from "@components/Navbar"
import { FaUnlockAlt } from "react-icons/fa"
import { ErrorMessage } from "@hookform/error-message"
import Footer from "@components/Footer"
import { useForm } from "react-hook-form"
import Link from "next/link"
import { useRouter } from "next/router"

const NewPassword = () => {
  const router = useRouter()
  const { email, token } = router.query
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch
  } = useForm()

  const password = watch("password")
  const confirmPassword = watch("confirmPassword")

  const onSubmit = async (data) => {
    console.log(data)
  }

  useEffect(() => {
    console.log(router.query)
  }, [email, token])

  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <Navbar />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mt-60 mb-[350px] flex-col justify-center">
          <h2 className="mb-9 text-center text-2xl text-white">
            CREATE NEW PASSWORD
          </h2>
          <div className="grid place-content-center">
            <div className="btn-input">
              <div className="flex justify-between">
                <FaUnlockAlt
                  size={20}
                  className="mt-2.5"
                />
                <input
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must have at least 6 characters"
                    }
                  })}
                  type="password"
                  placeholder="Password"
                  className="ml-5 bg-colorinput-black"
                />
              </div>
            </div>
            {errors.password && (
              <ErrorMessage
                errors={errors}
                name="password"
                render={({ message }) => (
                  <div className="mt-2 text-red-500">{message}</div>
                )}
              />
            )}

            <div className="btn-input">
              <div className="flex justify-between">
                <FaUnlockAlt
                  size={20}
                  className="mt-2.5"
                />
                <input
                  {...register("confirmPassword", {
                    required: "Confirm Password is required",
                    validate: (value) =>
                      value === password || "Passwords do not match"
                  })}
                  name="confirmPassword"
                  type="password"
                  placeholder="Confirm Password"
                  className="ml-5 bg-colorinput-black"
                />
              </div>
            </div>
            {errors.confirmPassword && (
              <ErrorMessage
                errors={errors}
                name="confirmPassword"
                render={({ message }) => (
                  <div className="mt-2 text-red-500">{message}</div>
                )}
              />
            )}
          </div>

          <div className="container mt-12 flex min-w-full flex-col items-center">
            <button
              className="button"
              type="submit"
            >
              CREATE
            </button>
          </div>

          <div className="mt-5 text-center">
            <Link
              href="/login"
              className="info decoration text-gray-400 underline decoration-gray-400"
            >
              BACK TO LOG IN
            </Link>
          </div>
          <h6 className="info mb-80 mt-10 text-center text-white">
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

export default NewPassword
