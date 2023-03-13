/* eslint-disable no-console */
import { useEffect, useState } from "react"
import { FaShoppingBasket, FaShoppingCart } from "react-icons/fa"
import Image from "next/image"
import Link from "next/link"
import { IAllItem } from "@src/types/allitem"
import { getAllItem } from "@src/services/api/getallitem"
import { getInventory } from "@src/services/api/getinventory"
import { dataProfile } from "@feature/authentication/authenticationSlice"
import { useDispatch, useSelector } from "react-redux"

const MarketShow = () => {
  const dispatch = useDispatch()
  const dataDetailUser = useSelector(dataProfile)
  const [state, setState] = useState<IAllItem[]>()
  const [inventory, setInventory] = useState<string[]>()

  useEffect(() => {
    async function fetchData() {
      if (dataDetailUser) {
        const { status, data } = await getInventory(dataDetailUser.id)
        if (status && data) {
          const idInventory = data.map((item) => item._id)
          setInventory(idInventory)
        }
      }

      const { status, data } = await getAllItem()
      if (status && data) {
        setState(data)
      }
    }
    fetchData()
  }, [dataDetailUser])

  return (
    <>
      <div className="container mx-auto mt-16 grid grid-cols-5 gap-10">
        {state ? (
          state.map((item) => (
            <div
              className="gamelistheader aboutcard mb-40 bg-gray-900"
              key={item.id}
            >
              {inventory?.includes(item.id) ? (
                <div className="group relative">
                  <Image
                    alt="1"
                    src={`http://localhost:5000/${item.image_item}`}
                    className="w-full rounded-lg hover:shadow-2xl"
                    width={150}
                    height={150}
                  />
                  <div className=" absolute top-0 right-0 flex h-full w-full justify-center bg-gradient-to-t from-black via-black opacity-0 group-hover:opacity-70" />
                  <div className="absolute top-0 left-0 flex h-full w-full items-center justify-center opacity-0 hover:opacity-100">
                    <div className="flex text-center text-2xl font-bold text-red-600">
                      <h2 className="mr-3">SOLD OUT</h2>
                      <FaShoppingCart />
                    </div>
                  </div>
                </div>
              ) : (
                <div className="group relative">
                  <Link href={`/marketplace/${item.id}`}>
                    <Image
                      alt="1"
                      src={`http://localhost:5000/${item.image_item}`}
                      className="w-full rounded-lg hover:shadow-2xl"
                      width={150}
                      height={150}
                    />
                    <div className=" absolute top-0 right-0 flex h-full w-full justify-center bg-gradient-to-t from-black via-black opacity-0 group-hover:opacity-70" />
                    <div className="absolute top-0 left-0 flex h-full w-full items-center justify-center opacity-0 hover:opacity-100">
                      <div className="flex text-center text-2xl font-bold text-green-500">
                        <h2 className="mr-3">BUY</h2>
                        <FaShoppingCart />
                      </div>
                    </div>
                  </Link>
                </div>
              )}

              <div className="px-6 py-4">
                <div className="text-center text-base font-semibold text-gray-300 md:text-xl">
                  <h2 className="bg-gray-900 text-base font-medium">
                    {item.name}
                  </h2>
                </div>
                <p className="mt-2 text-center text-base font-semibold text-gray-400 md:text-xl">
                  price :<span className="ml-2 font-medium">{item.cost}</span>
                </p>
              </div>
            </div>
          ))
        ) : (
          <>
            <h2 className="my-48 text-center">❌</h2>
            <h2 className="my-48 text-center">❌</h2>
            <h2 className="my-48 text-center text-white">NO ITEMS IN DATA</h2>
            <h2 className="my-48 text-center">❌</h2>
            <h2 className="my-48 text-center ">❌</h2>
          </>
        )}
      </div>
    </>
  )
}

export default MarketShow
