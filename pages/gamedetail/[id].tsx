/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-return-assign */
import Footer from "@components/Footer"
import Navbar from "@components/Navbar"
import Link from "next/link"
import Image from "next/image"
import { FaArrowLeft } from "react-icons/fa"
import { useEffect, useState } from "react"
import { getGameDetail } from "@src/services/api/gamedetail"
import { IGameDetail } from "@src/types/gamedetail"
import { useRouter } from "next/router"
import { useSelector } from "react-redux"
import { dataProfile } from "@feature/authentication/authenticationSlice"

const Gamedetail = () => {
  const router = useRouter()
  const { id } = router.query
  const [state, setState] = useState<IGameDetail>()
  const dataDetailUser = useSelector(dataProfile)

  useEffect(() => {
    async function fetchData() {
      const { status, data } = await getGameDetail(id)
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
      <Navbar />
      {state ? (
        <div className="container mx-auto mt-28 md:mt-32">
          <div className="flex w-full">
            <Link
              href="/gamelist"
              className="pl-auto"
            >
              <FaArrowLeft
                size={40}
                color="#9ca3af"
                onMouseOver={({ target }) => (target.style.color = "white")}
                onMouseOut={({ target }) => (target.style.color = "#9ca3af")}
              />
            </Link>
            <h2 className="mb-10 w-full text-center text-2xl text-white md:text-3xl">
              {state && state.name}
            </h2>
          </div>
          <div className="detail mb-10">
            <Image
              alt="1"
              src={`http://localhost:5000/${state?.image_banner}`}
              width={1000}
              height={250}
              className="rounded-lg"
            />
          </div>

          <div className="grid grid-cols-1 gap-4 bg-gray-900 md:grid-cols-3">
            <div className="mx-auto">
              <Image
                alt="1"
                src={`http://localhost:5000/${state?.image_main}`}
                className=" w-80 rounded-lg hover:shadow-2xl"
                width={100}
                height={100}
              />
            </div>
            <div className="grid content-center">
              <div className="">
                <div className="mb-2 mt-5 text-center text-4xl font-bold text-gray-200">
                  {state?.name}
                </div>
                <p className="text-center text-xl text-gray-200 ">
                  Game_Filling
                </p>
              </div>
            </div>
            <div className="p-5 md:p-3">
              <h5 className="mt-5 mb-2 text-2xl font-semibold leading-tight text-gray-200">
                Game Features
              </h5>
              <p className="mb-4 text-base text-gray-300">{state?.detail}</p>
              {dataDetailUser ? (
                <a
                  target="_blank"
                  className="mt-2 flex flex-col items-center"
                  href={`http://localhost:5000/game/${state.id}/?game_id=${state.id}&player_id=${dataDetailUser.id}`}
                  rel="noreferrer"
                >
                  <button
                    className="button"
                    type="submit"
                  >
                    PLAY
                  </button>
                </a>
              ) : (
                <div className="mt-10 flex flex-col items-center">
                  <h2 className="text-2xl text-gray-500">Please login 👆</h2>
                </div>
              )}
            </div>
          </div>

          <div className="aboutcard overview mt-8 flex-row divide-y divide-solid divide-gray-500 p-7">
            <h2 className="pb-5 text-lg text-gray-500">OVERVIEW</h2>
            <p className="py-7 text-base text-gray-500">
              Game_Filling is an open-world, action role-playing game that
              allows the player to control one of four interchangeable
              characters in a party.Switching between characters can be done
              quickly during combat, allowing the player to use several
              different combinations of skills and attacks. Characters may have
              their strengths enhanced in various ways, such as increasing a
              character's level and improving artifacts and the weapons that the
              character equips. In addition to exploration, the player can
              attempt various challenges for rewards. Scattered across Teyvat
              are bosses and challenges that reward highly valuable resources,
              such as Stormterror and the Electro Hypostasis, but claiming them
              uses up a currency called resin, which slowly regenerates over
              time. Completing these challenges grants the player progress
              towards increasing their Adventure Rank, which in turn unlocks new
              quests, challenges, and raises the World Level. The World Level is
              a measure of how strong the enemies within the world are and the
              rarity of rewards that defeating them gives.
            </p>
          </div>
        </div>
      ) : (
        <>
          <h2 className="my-96 text-center text-white">
            NO GAME IN DETAILS
            <br />
          </h2>
        </>
      )}
      <Footer />
    </>
  )
}

export default Gamedetail
