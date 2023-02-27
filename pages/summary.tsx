/* eslint-disable react/button-has-type */
import Footer from "@components/Footer"
import Navbar from "@components/Navbar"
// import Link from "next/link"
// import { useRouter } from "next/router"
import React from "react"
import { FaDoorOpen, FaStepForward } from "react-icons/fa"
import Image from "next/image"
import Link from "next/link"

const SummaryGame = () => (
  <>
    <Navbar />
    <div className="container mx-auto mt-28 md:mt-32">
      <div className="detail mb-10">
        <Image
          alt="1"
          src="https://cdn.discordapp.com/attachments/1050317355797975040/1063379887869657149/Screenshot_2023-01-13_155122.png"
          width={1000}
          height={250}
          className="rounded-lg"
        />
      </div>
      <div className="aboutcard mx-auto mb-10 w-full items-center bg-gray-900 text-center">
        <div>
          <div className="m-5 flex flex-row ">
            <Link href="/">
              <button className="mt-5 mr-10 flex justify-between rounded-md bg-red-500 p-3 text-white hover:bg-red-700">
                <h2 className="mr-3 mt-1 text-xs">BACK TO HOME</h2>
                <FaDoorOpen size={22} />
              </button>
            </Link>

            <Link href="#playagain">
              <button className="mt-5 flex justify-between rounded-md  bg-blue-500 p-3 text-white hover:bg-blue-700">
                <h2 className="mr-3 mt-1 text-xs">PLAY AGAIN</h2>
                <FaStepForward size={22} />
              </button>
            </Link>
          </div>
        </div>

        <div className="container mx-auto mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <div className="flex justify-center">
              <Image
                alt="1"
                src="https://cdn.discordapp.com/attachments/1050317355797975040/1060783416527822930/2Q.png"
                className="rounded-lg "
                width={300}
                height={250}
              />
            </div>
            <div className="px-6 py-8">
              <h2 className="text-xl  text-white ">Genshin Impact</h2>
            </div>
          </div>

          <div className="mx-auto flex items-center">
            <h2 className="font-base m-5 w-96 rounded-xl bg-blue-700 p-5 text-sm text-white">
              Your Score : <span className="text-xl">2029</span>
            </h2>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </>
)
export default SummaryGame
