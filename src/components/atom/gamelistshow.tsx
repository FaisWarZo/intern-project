/* eslint-disable no-console */
import { useEffect, useState } from "react"
import { FaPlay } from "react-icons/fa"
import Image from "next/image"
import Link from "next/link"
import { getAllGame } from "@src/services/api/getallgame"
import { IAllGame } from "@src/types/allgame"

const Gamelistshow = () => {
  const [state, setState] = useState<IAllGame[]>()

  useEffect(() => {
    async function fetchData() {
      const { status, data } = await getAllGame()
      if (status && data) {
        setState(data)
      }
    }
    fetchData()
  }, [])

  return (
    <>
      <div className="container mx-auto mt-16 grid grid-cols-5 gap-10">
        {state ? (
          state.map((item) => (
            <div
              className="gamelistheader mb-44"
              key={item.id}
            >
              <div className="group relative">
                <Link href={`/gamedetail/${item.id}`}>
                  <Image
                    alt="1"
                    src={`http://localhost:5000/${item.image_main}`}
                    className="w-full rounded-lg hover:shadow-2xl"
                    width={150}
                    height={150}
                  />
                  <div className=" absolute top-0 right-0 flex h-full w-full justify-center bg-gradient-to-t from-black via-black opacity-0 group-hover:opacity-70" />
                  <div className="absolute top-0 left-0 flex h-full w-full items-center justify-center opacity-0 hover:opacity-100">
                    <div className="flex text-center text-2xl font-bold text-red-600">
                      <h2 className="mr-3">PLAY</h2>
                      <FaPlay />
                    </div>
                  </div>
                </Link>
              </div>
              <div className="px-6 py-4">
                <div className="text-base font-semibold text-gray-400 md:text-xl">
                  Name :
                  <span className="bg-gray-900 font-medium">{item.name}</span>
                </div>
                <p className="text-base font-semibold text-gray-400 md:text-xl">
                  Active :
                  <span className="ml-5 font-medium">
                    {item.is_active ? "????" : "????"}
                  </span>
                </p>
              </div>
            </div>
          ))
        ) : (
          <>
            <h2 className="my-48 text-center">???</h2>
            <h2 className="my-48 text-center">???</h2>
            <h2 className="my-48 text-center text-white">NO GAMES IN DATA</h2>
            <h2 className="my-48 text-center">???</h2>
            <h2 className="my-48 text-center ">???</h2>
          </>
        )}
      </div>
    </>
  )
}

export default Gamelistshow
