/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-console */
/* eslint-disable no-return-assign */
import React, { useEffect } from "react"
import Footer from "@components/Footer"
import Navbar from "@components/Navbar"
import { FaArchive, FaArrowLeft, FaUserEdit } from "react-icons/fa"
import Image from "next/image"
import { useDispatch, useSelector } from "react-redux"

import { dataProfile } from "@feature/authentication/authenticationSlice"
import Router from "next/router"

const ProfileDetail = () => {
  const dispatch = useDispatch()
  const dataDetailUser = useSelector(dataProfile)

  return (
    <>
      <Navbar />
      <div className="container mx-auto mt-28 md:mt-32">
        <div className="flex w-full">
          <div
            onClick={() => Router.back()}
            className="pl-auto"
          >
            <FaArrowLeft
              size={40}
              color="#9ca3af"
              onMouseOver={({ target }) => (target.style.color = "white")}
              onMouseOut={({ target }) => (target.style.color = "#9ca3af")}
            />
          </div>
          <h2 className="mb-10 w-full text-center text-2xl text-white md:text-3xl">
            PLAYER PROFILE
          </h2>
          {dataDetailUser ? (
            <div>
              <div
                onClick={() => Router.push("/inventory")}
                className="pl-auto"
              >
                <FaArchive
                  size={40}
                  color="#9ca3af"
                  onMouseOver={({ target }) => (target.style.color = "white")}
                  onMouseOut={({ target }) => (target.style.color = "#9ca3af")}
                />
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>

        {dataDetailUser ? (
          <div>
            <div className="borderpicture mx-auto">
              <Image
                src="https://cdn.discordapp.com/attachments/616664805897666560/1061934191085887508/809170_user_512x512.png"
                className="profile"
                width={320}
                height={320}
                alt="Main Image"
              />
              <Image
                src={`http://localhost:5000/${dataDetailUser?.frame}`}
                alt="Banner Image"
                layout="fill"
              />
            </div>

            <div className="aboutcard m-24 mx-auto mb-40 w-2/5 items-center bg-gray-900 text-center">
              <div className="px-6 py-6">
                <div
                  onClick={() => Router.push("")}
                  className="flex justify-end"
                >
                  <FaUserEdit
                    size={30}
                    color="#9ca3af"
                    onMouseOver={({ target }) => (target.style.color = "white")}
                    onMouseOut={({ target }) =>
                      (target.style.color = "#9ca3af")
                    }
                  />
                </div>
                <h2 className="text-xl text-gray-200 ">
                  {dataDetailUser?.username}
                </h2>
                <p className="mt-5 text-xl text-gray-300 ">
                  <span className="font-semibold">Email : </span>
                  {dataDetailUser?.email}
                  <br />
                  <span className="font-semibold">Coins : </span>
                  {dataDetailUser?.coin}
                  <br />
                  <span className="font-semibold">First Name : </span>
                  {dataDetailUser?.first_name}
                  <br />
                  <span className="font-semibold">Last Name : </span>
                  {dataDetailUser?.last_name}
                  <br />
                </p>
              </div>
              <div className="px-6 pt-3 pb-2">
                <span className="mr-2 mb-2 inline-block rounded-full bg-color-nvidia px-3 py-1 text-sm font-semibold text-gray-900">
                  #Player
                </span>
                <span className="mr-2 mb-2 inline-block rounded-full bg-color-nvidia px-3 py-1 text-sm font-semibold text-gray-900">
                  #GAME_FILLING
                </span>
              </div>
            </div>
          </div>
        ) : (
          <>
            <h2 className="my-80 text-center text-white">Please login 👆</h2>
          </>
        )}
      </div>
      <Footer />
    </>
  )
}
export default ProfileDetail
