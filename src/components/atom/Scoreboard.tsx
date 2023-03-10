import Slider from "react-slick"
import Image from "next/image"
import { useEffect, useState } from "react"
import { IScoreboardRes } from "@src/types/scoreboard"
import { scoreBoard } from "@src/services/api/scoreboard"

const Scoreboard = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }

  const [state, setState] = useState<IScoreboardRes[]>()

  useEffect(() => {
    async function fetchData() {
      const { status, data } = await scoreBoard()
      if (status && data) {
        setState(data)
      }
    }
    fetchData()
  }, [])

  return (
    <div className="mt-10">
      <h2 className="ml-5 text-2xl text-gray-200">
        TOP<span className="text-2xl text-color-nvidia">PLAYERS</span>
      </h2>
      <Slider
        {...settings}
        className="mt-8"
      >
        {state &&
          state.map((item, index) => (
            <div key={item.username}>
              <div className="relative w-32">
                <div
                  className={`absolute right-0 w-2/5 rounded-full 
                  ${index + 1 === 1 ? "bg-red-600" : ""} 
                  ${index + 1 === 2 ? "bg-blue-600" : ""}
                  ${index + 1 === 3 ? "bg-green-600" : ""}
                  ${index + 1 > 3 ? "border-2 border-blue-600 bg-gray-900" : ""}
                  `}
                >
                  <h2 className="text-center text-sm text-white">
                    {index + 1}
                  </h2>
                </div>
                <Image
                  src="https://cdn.discordapp.com/attachments/616664805897666560/1061934191085887508/809170_user_512x512.png"
                  className={`mx-auto block  rounded-full border-4 
                  ${index + 1 === 1 ? "border-red-600" : ""} 
                  ${index + 1 === 2 ? "border-blue-600" : ""}
                  ${index + 1 === 3 ? "border-green-600" : ""}
                  ${index + 1 > 3 ? "border-gray-700" : ""}
                  `}
                  alt="1"
                  width={150}
                  height={150}
                />
                <div className="px-4 py-4">
                  <h2 className="mb-2 text-center text-sm text-gray-200">
                    {item.username}
                  </h2>
                  <p className="text-center text-base text-gray-300">
                    {item.coin} Coins
                  </p>
                </div>
              </div>
            </div>
          ))}
      </Slider>
    </div>
  )
}

export default Scoreboard
