import { useState } from "react"
import { FaPlay } from "react-icons/fa"
import Image from "next/image"
import Link from "next/link"

const Gamelistshow = () => {
  // eslint-disable-next-line no-empty-pattern
  const [] = useState("")
  return (
    <>
      <div className="container mx-auto mt-16 grid grid-cols-5 gap-10">
        <div className="gamelistheader">
          <div className="group relative">
            {/* <Link href={`/gamelist/${gameId}`}> */}
            <Image
              alt="1"
              src="https://cdn.discordapp.com/attachments/1050317355797975040/1060783416527822930/2Q.png"
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
            {/* </Link> */}
          </div>
          <div className="px-6 py-4">
            <div className="text-base font-semibold text-gray-400 md:text-xl">
              Name :{" "}
              <span className="bg-gray-900 font-medium">Genshin Impact</span>
            </div>
            <p className="text-base font-semibold text-gray-400 md:text-xl">
              Developer :{" "}
              <span className="bg-gray-900 font-medium">Mihoyo</span>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Gamelistshow
