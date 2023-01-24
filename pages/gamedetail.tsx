/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-return-assign */
import Footer from "@components/Footer"
import Navbar from "@components/Navbar"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { FaArrowLeft } from "react-icons/fa"
import Slider from "react-slick"

const Gamedetail = () => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 6000, // 6 seconds
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dotsClass: "slick-dots slick-thumb",
    customPaging: function (i) {
      return <div className="m-5 text-white">{i}</div>
    }
  }

  const [] = useState("")
  return (
    <>
      <Navbar />
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
            Genshin Impact
          </h2>
        </div>
        <div className="detail mb-10">
          <Image
            alt="1"
            src="https://cdn.discordapp.com/attachments/1050317355797975040/1063379887869657149/Screenshot_2023-01-13_155122.png"
            width={1000}
            height={250}
            className="rounded-lg"
          />
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="detailinfo rounded-lg bg-gray-900 p-6 shadow-lg">
            <Slider {...settings}>
              <div>
                <Image
                  alt="1"
                  src="https://cdn.discordapp.com/attachments/616664805897666560/1064462499182805052/Genshin-Impact-Zhongli-Gameplay.jpg"
                  width={1000}
                  height={250}
                />
              </div>
              <div>
                <Image
                  alt="2"
                  src="https://cdn.discordapp.com/attachments/616664805897666560/1064462499497386014/genshi_game_play.jpeg"
                  width={1000}
                  height={250}
                />
              </div>
              <div>
                <Image
                  alt="3"
                  src="https://cdn.discordapp.com/attachments/616664805897666560/1064462500139126825/genshin_wide-59ae4e3c66176e7b048f5c7dbf2abd4b136cbe00.jpg"
                  width={1000}
                  height={250}
                />
              </div>
            </Slider>
          </div>
          <div className="flex justify-center">
            <div className="block max-w-sm rounded-lg bg-gray-900 p-6 shadow-lg">
              <div className="flex">
                <Image
                  alt="1"
                  src="https://cdn.discordapp.com/attachments/1050317355797975040/1060783416527822930/2Q.png"
                  className="rounded-lg"
                  width={100}
                  height={100}
                />
                <div className="px-7 py-4">
                  <div className="mb-2 text-2xl font-bold text-gray-200">
                    Genshin Impact
                  </div>
                  <p className="text-base text-gray-200">Mihoyo</p>
                </div>
              </div>
              <h5 className="mt-5 mb-2 text-xl font-semibold leading-tight text-gray-200">
                Game Features
              </h5>
              <p className="mb-4 text-base text-gray-300">
                Experience an immersive single-player campaign. As a traveler
                from another world, you will embark on a journey to reunite with
                your long-lost sibling and unravel the mysteries of Teyvat, and
                yourself.
              </p>
              <div className="mt-10 flex flex-col items-center">
                <button
                  className="button"
                  type="submit"
                >
                  PLAY
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="aboutcard overview mt-8 flex-row divide-y divide-solid divide-gray-500 p-7">
          <h2 className="pb-5 text-lg text-gray-500">OVERVIEW</h2>
          <p className="py-7 text-base text-gray-500">
            Genshin Impact is an open-world, action role-playing game that
            allows the player to control one of four interchangeable characters
            in a party.Switching between characters can be done quickly during
            combat, allowing the player to use several different combinations of
            skills and attacks. Characters may have their strengths enhanced in
            various ways, such as increasing a character's level and improving
            artifacts and the weapons that the character equips. In addition to
            exploration, the player can attempt various challenges for rewards.
            Scattered across Teyvat are bosses and challenges that reward highly
            valuable resources, such as Stormterror and the Electro Hypostasis,
            but claiming them uses up a currency called resin, which slowly
            regenerates over time. Completing these challenges grants the player
            progress towards increasing their Adventure Rank, which in turn
            unlocks new quests, challenges, and raises the World Level. The
            World Level is a measure of how strong the enemies within the world
            are and the rarity of rewards that defeating them gives.
          </p>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Gamedetail
