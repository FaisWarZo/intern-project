/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-return-assign */

import { useEffect, useState } from "react"
import Footer from "@components/Footer"
import Navbar from "@components/Navbar"
import Link from "next/link"
import Image from "next/image"
import { FaArrowLeft } from "react-icons/fa"
import { useRouter } from "next/router"
import { getItemDetail } from "@src/services/api/itemdetail"
import { IItemdetail } from "@src/types/itemdetail"
import { useDispatch, useSelector } from "react-redux"
import {
  dataProfile,
  updateProfile,
  update_coin
} from "@feature/authentication/authenticationSlice"
import { buyItemserv } from "@src/services/api/buyitemserv"
import toast, { Toaster } from "react-hot-toast"

const Itemdetail = () => {
  const router = useRouter()
  const { id } = router.query
  const [state, setState] = useState<IItemdetail>()
  const [onMouseInOut, setOnMouseInOut] = useState<boolean>(false)
  const dispatch = useDispatch()
  const dataDetailUser = useSelector(dataProfile)

  const buyItem = async (_userId, _itemId) => {
    const { status, data, message } = await buyItemserv(_userId, _itemId)
    if (status && data) {
      await dispatch(update_coin({ coin: data.user.coin }))
      toast.success("Buy item Success.")
      setTimeout(() => {
        router.push("/inventory")
      }, 1000)
    } else {
      toast.error(message)
    }
  }

  useEffect(() => {
    async function fetchData() {
      const { status, data } = await getItemDetail(id)
      if (status && data) {
        setState(data)
      } else {
        router.push("/")
      }
    }
    if (id) {
      fetchData()
    }
  }, [id])

  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <Navbar />
      {state ? (
        <div className="container mx-auto mt-28 md:mt-32">
          <div className="flex w-full">
            <Link
              href="/marketplace"
              className="pl-auto"
            >
              <FaArrowLeft
                size={40}
                color={onMouseInOut ? "white" : "#9ca3af"}
                onMouseOver={() => setOnMouseInOut(true)}
                onMouseOut={() => setOnMouseInOut(false)}
              />
            </Link>
            <h2 className="w-full text-center text-2xl text-white md:text-3xl">
              {state && state.name}
            </h2>
          </div>
          <div className="  my-40 mb-72 grid grid-cols-1 gap-4 bg-gray-900 md:grid-cols-2">
            <div className="mx-auto">
              <Image
                alt="1"
                src={`http://localhost:5000/${state?.image_item}`}
                className=" w-80 rounded-lg hover:shadow-2xl"
                width={100}
                height={100}
              />
            </div>
            <div className="grid content-center">
              <div className="">
                <div className="mb-5 mt-5 text-center text-5xl font-bold text-gray-200">
                  {state?.name}
                </div>
                <p className="text-center text-2xl text-gray-200 ">
                  price :<span className="ml-2 font-medium">{state?.cost}</span>
                </p>
              </div>
              {dataDetailUser ? (
                <div className="mt-10 flex flex-col items-center">
                  <button
                    className="bbutton"
                    type="submit"
                    onClick={() => buyItem(dataDetailUser.id, state.id)}
                  >
                    Buy now
                  </button>
                </div>
              ) : (
                <div className="mt-10 flex flex-col items-center">
                  <h2 className="text-2xl text-gray-500">Please login 👆</h2>
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        <>
          <h2 className="my-96 text-center text-white">
            NO ITEM IN DETAILS
            <br />
          </h2>
        </>
      )}
      <Footer />
    </>
  )
}

export default Itemdetail
