import React, { useEffect, useState } from "react"
import toast, { Toaster } from "react-hot-toast"
import Navbar from "@components/Navbar"
import { ErrorMessage } from "@hookform/error-message"
import Footer from "@components/Footer"
import { useForm } from "react-hook-form"
import router from "next/router"
import { useDispatch, useSelector } from "react-redux"
import {
  dataProfile,
  edit_profile
} from "@feature/authentication/authenticationSlice"
import { edit_Profile } from "@src/services/api/edit_profile"

const EditUser = () => {
  const dispatch = useDispatch()
  const dataDetailUser = useSelector(dataProfile)
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const onSubmit = async (_data) => {
    const { status, data, message } = await edit_Profile(
      dataDetailUser?.id,
      _data
    )
    if (status && data) {
      await dispatch(
        edit_profile({
          username: data.username,
          first_name: data.first_name,
          last_name: data.last_name
        })
      )
      toast.success(message)
      setTimeout(() => {
        router.push("/profile")
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
          <h2 className="mb-9 text-center text-2xl text-white">EDIT PROFILE</h2>
          {dataDetailUser ? (
            <div>
              <div className="grid place-content-center">
                <div className="btn-input">
                  <div className="flex justify-between">
                    <h2>Username :</h2>
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
                      defaultValue={dataDetailUser?.username}
                      placeholder="Username"
                      className="ml-5 bg-colorinput-black"
                    />
                  </div>
                </div>
                {errors.username && (
                  <ErrorMessage
                    errors={errors}
                    name="username"
                    render={({ message }) => (
                      <div className="mt-2 text-red-500">{message}</div>
                    )}
                  />
                )}
                <div className="btn-input">
                  <div className="flex justify-between">
                    <h2>First name :</h2>
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
                      defaultValue={dataDetailUser?.first_name}
                      placeholder="First name"
                      className="ml-5 bg-colorinput-black"
                    />
                  </div>
                </div>
                {errors.first_name && (
                  <ErrorMessage
                    errors={errors}
                    name="first_name"
                    render={({ message }) => (
                      <div className="mt-2 text-red-500">{message}</div>
                    )}
                  />
                )}

                <div className="btn-input">
                  <div className="flex justify-between">
                    <h2>Last name :</h2>
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
                      defaultValue={dataDetailUser?.last_name}
                      placeholder="Last name"
                      className="ml-5 bg-colorinput-black"
                    />
                  </div>
                </div>
                {errors.last_name && (
                  <ErrorMessage
                    errors={errors}
                    name="last_name"
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
                  <h2>UPDATE</h2>
                </button>
              </div>
            </div>
          ) : (
            <>
              <h2 className="my-80 text-center text-white">Please login 👆</h2>
            </>
          )}
        </div>
      </form>
      <Footer />
    </>
  )
}

export default EditUser
