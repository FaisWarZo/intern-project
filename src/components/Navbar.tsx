/* eslint-disable no-console */
import Link from "next/link"
import { useEffect, useState } from "react"
import Image from "next/image"
import {
  FaShoppingCart,
  FaComment,
  FaInfoCircle,
  FaHome,
  FaGamepad
} from "react-icons/fa"
import { useSelector } from "react-redux"
import { dataProfile } from "@feature/authentication/authenticationSlice"

const Navbar = () => {
  const dataDetailUser = useSelector(dataProfile)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {}, [])

  const signout = () => {
    window.localStorage.clear()
    window.location.reload()
  }

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="fixed top-0 left-0 z-10 w-full border-b border-gray-600 bg-gray-900 px-2 py-2.5 sm:px-4">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <Link
          href="/"
          className="flex items-center"
        >
          <Image
            src="https://cdn.discordapp.com/attachments/616664805897666560/1070607597914296380/720284.png"
            className="mr-4 "
            alt="Flowbite Logo"
            width={65}
            height={65}
          />
          <span className="mt-1 self-center whitespace-nowrap text-2xl text-white">
            <h2 className="text-base">GAME_FILLING</h2>
          </span>
        </Link>
        <div className="flex md:order-2 ">
          {dataDetailUser ? (
            <div className="">
              <div className="flex">
                <div className="mr-5 flex space-x-4">
                  <div className="nborderpicture mx-auto">
                    <Image
                      src="https://cdn.discordapp.com/attachments/616664805897666560/1061934191085887508/809170_user_512x512.png"
                      className="nprofile"
                      width={51}
                      height={51}
                      alt="Main Image"
                    />
                    <Image
                      src={`http://localhost:5000/${dataDetailUser.frame}`}
                      alt="Banner Image"
                      layout="fill"
                    />
                  </div>
                  <div className="ml-5">
                    <h2 className="my-1 text-sm text-white">
                      {dataDetailUser.username}
                    </h2>
                    <h1 className="my-1 text-sm text-white">
                      🪙Coins : {dataDetailUser.coin}
                    </h1>
                    <Link
                      className="font-semibold text-red-500 underline underline-offset-2"
                      href="/profile"
                    >
                      View Profile
                    </Link>
                  </div>
                </div>

                <button
                  type="button"
                  className="button mt-5 h-1/2 font-semibold"
                  onClick={signout}
                >
                  SIGN OUT
                </button>
              </div>
            </div>
          ) : (
            <div className="">
              <Link href="/login">
                <button
                  type="button"
                  className="gbutton mr-3 font-semibold"
                >
                  SIGN IN
                </button>
              </Link>
            </div>
          )}

          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            onClick={toggleDropdown}
            className="inline-flex items-center rounded-lg p-2 text-lg text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-6 w-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <div
          className={`w-full items-center justify-between md:order-1 md:flex md:w-auto 
          ${isOpen ? "visible" : "hidden"}`}
          id="navbar-sticky"
        >
          <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-800 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:text-base md:font-medium md:dark:bg-gray-900">
            <li className="cursor-pointer">
              <Link
                href="/"
                className="flex rounded py-2 pl-3 pr-4 text-base font-semibold text-gray-700 hover:bg-gray-100 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:p-0 md:hover:bg-transparent md:hover:text-red-700 md:dark:hover:bg-transparent md:dark:hover:text-white"
                aria-current="page"
              >
                <FaHome
                  size={20}
                  color="#9ca3af"
                  className="mr-2 "
                />
                <p>Home</p>
              </Link>
            </li>

            <li>
              <Link
                href="/gamelist"
                className="flex rounded py-2 pl-3 pr-4 text-base font-semibold text-gray-700 hover:bg-gray-100 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:p-0 md:hover:bg-transparent md:hover:text-red-700 md:dark:hover:bg-transparent md:dark:hover:text-white"
                aria-current="page"
              >
                <FaGamepad
                  size={20}
                  color="#9ca3af"
                  className="mr-2 "
                />
                Games
              </Link>
            </li>

            <li>
              <Link
                href="/marketplace"
                className="flex rounded py-2 pl-3 pr-4 text-base font-semibold text-gray-700 hover:bg-gray-100 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:p-0 md:hover:bg-transparent md:hover:text-red-700 md:dark:hover:bg-transparent md:dark:hover:text-white"
              >
                <FaShoppingCart
                  size={20}
                  color="#9ca3af"
                  className="mr-2"
                />
                Marketplace
              </Link>
            </li>

            <li>
              <Link
                href="https://www.facebook.com/GrinUpStudio/"
                target="_blank"
                className="flex rounded py-2 pl-3 pr-4 text-base font-semibold text-gray-700 hover:bg-gray-100 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:p-0 md:hover:bg-transparent md:hover:text-red-700 md:dark:hover:bg-transparent md:dark:hover:text-white"
              >
                <FaComment
                  size={20}
                  color="#9ca3af"
                  className="mr-2 "
                />
                Community
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="flex rounded py-2 pl-3 pr-4 text-base font-semibold text-gray-700 hover:bg-gray-100 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:p-0 md:hover:bg-transparent md:hover:text-red-700 md:dark:hover:bg-transparent md:dark:hover:text-white"
              >
                <FaInfoCircle
                  size={20}
                  color="#9ca3af"
                  className="mr-2"
                />
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
