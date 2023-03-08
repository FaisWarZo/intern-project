/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/button-has-type */
import Footer from "@components/Footer"
import Navbar from "@components/Navbar"
import { dataProfile } from "@feature/authentication/authenticationSlice"
import { getInventory } from "@src/services/api/getinventory"

import { IInventory } from "@src/types/inventory"
import Image from "next/image"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"

const Inventory = () => {
  const router = useRouter()
  const [state, setState] = useState<IInventory[]>()
  const dataDetailUser = useSelector(dataProfile)

  useEffect(() => {
    async function fetchData(id: string) {
      const { status, data } = await getInventory(id)
      if (status && data) {
        setState(data)
      } else {
        router.push("/")
      }
    }
    if (dataDetailUser) {
      fetchData(dataDetailUser.id)
    }
  }, [dataDetailUser, router])

  return (
    <>
      <Navbar />
      <div className="container mx-auto mt-40">
        <h2 className="text-center text-2xl text-white">📦 Inventory 📦</h2>
        <section className="pt-5 text-gray-600">
          <div className=" aboutcard container mx-auto mt-10 flex max-w-5xl justify-center rounded-lg bg-gray-900 px-20">
            <div className="container mx-auto mt-16 grid grid-cols-3 gap-10">
              {state ? (
                state.map((item) => (
                  <div
                    className="gamelistheader"
                    key={item._id}
                  >
                    <div className="group relative">
                      <Image
                        alt="1"
                        src={`http://localhost:5000/${item.image_item}`}
                        className="w-full rounded-lg hover:shadow-2xl"
                        width={150}
                        height={150}
                      />
                    </div>
                    <div className="px-6 py-4">
                      <div className="text-base font-semibold text-gray-400 md:text-xl">
                        Name :
                        <span className="bg-gray-900 font-medium">
                          {item.name}
                        </span>
                      </div>
                      <p className="text-base font-semibold text-gray-400 md:text-xl">
                        Total :
                        <span className="ml-5 font-medium">
                          {item.totalQty}
                        </span>
                      </p>
                    </div>
                  </div>
                ))
              ) : (
                <>
                  <h2 className="my-48 text-center">❌</h2>
                  <h2 className="my-48 text-center text-white">NO INVENTORY</h2>
                  <h2 className="my-48 text-center">❌</h2>
                </>
              )}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}

export default Inventory
