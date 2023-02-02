import React from "react"
import Footer from "@components/Footer"
import Navbar from "@components/Navbar"

const About = () => (
  <>
    <Navbar />
    <div className="mt-40 flex-col justify-center">
      <h2 className="mb-9 text-center text-2xl text-white">
        🕹️ GAME_FILLING 🕹️
      </h2>
      <h6 className="infos mb-18 mt-5 text-center text-xl text-white">
        ที่นอนดึกไม่ใช่ไม่ง่วง แต่เป็นห่วงคนที่ยังไม่นอน
      </h6>

      <div className="flex justify-center md:grid-cols-2">
        <div className="aboutcard m-14 bg-gray-900">
          <div className="max-w-sm overflow-hidden rounded shadow-lg">
            <img
              className="w-full object-scale-down"
              src="https://cdn.discordapp.com/attachments/616664805897666560/1059758421164957758/Deaw31.jpg"
              alt="parada"
            />
            <div className="px-6 py-4">
              <div className="mb-2 text-2xl font-bold text-gray-200">
                PARADA SARAWONG
              </div>
              <p className="text-base text-gray-300">
                Email : daewtoy@gmail.com <br />
                Facebook : Parada Sarawong <br />
                Instagram : shockkolat
                <br />
                Tel : 087-7684003
                <br />
              </p>
            </div>
            <div className="bg-slate-80 px-6 pt-4 pb-2">
              <span className="mr-2 mb-2 inline-block rounded-full bg-color-nvidia px-3 py-1 text-sm font-semibold text-gray-900">
                #Backend
              </span>
              <span className="mr-2 mb-2 inline-block rounded-full bg-color-nvidia px-3 py-1 text-sm font-semibold text-gray-900">
                #Nakamoto.games
              </span>
              <span className="mr-2 mb-2 inline-block rounded-full bg-color-nvidia px-3 py-1 text-sm font-semibold text-gray-900">
                #KU79
              </span>
            </div>
          </div>
        </div>

        <div className="aboutcard m-14 bg-gray-900">
          <div className="max-w-sm overflow-hidden rounded shadow-lg">
            <img
              className="w-full object-scale-down"
              src="https://media.discordapp.net/attachments/616664805897666560/1059758421362081872/IMG_4609.png"
              alt="narawit"
            />
            <div className="px-6 py-4">
              <div className="mb-2 text-2xl font-bold text-gray-200">
                NARAWIT CHOEYCHOM
              </div>
              <p className="text-base text-gray-300">
                Email : narawit.cho@ku.th <br />
                Facebook : Narawit Choeychom <br />
                Instagram : argonic_
                <br />
                Tel : 098-0109675
                <br />
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="mr-2 mb-2 inline-block rounded-full bg-color-nvidia px-3 py-1 text-sm font-semibold text-gray-900">
                #Frontend
              </span>
              <span className="mr-2 mb-2 inline-block rounded-full bg-color-nvidia px-3 py-1 text-sm font-semibold text-gray-900">
                #Nakamoto.games
              </span>
              <span className="mr-2 mb-2 inline-block rounded-full bg-color-nvidia px-3 py-1 text-sm font-semibold text-gray-900">
                #KU79
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Footer />
  </>
)

export default About
