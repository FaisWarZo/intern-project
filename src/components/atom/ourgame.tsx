import { useEffect, useState } from "react"
import Slider from "react-slick"
import Image from "next/image"
import { IAllGame } from "@src/types/allgame"
import { getAllGame } from "@src/services/api/getallgame"

const Hotgame = () => {
  const [state, setState] = useState<IAllGame[]>()
  const [imgSrc, setImgSrc] = useState(false)

  useEffect(() => {
    async function fetchData() {
      const { status, data } = await getAllGame()
      if (status && data) {
        setState(data)
      }
    }
    fetchData()
  }, [])
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
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

  return (
    <div className="mt-10">
      <h2 className="ml-5 text-2xl text-gray-200">
        OUR<span className=" text-2xl text-color-nvidia">GAME</span>
      </h2>
      <div className="hotgameslide ">
        <Slider
          {...settings}
          className="mt-10"
        >
          {state ? (
            state.map((item) => (
              <div
                className="gamelistheader mb-44"
                key={item.id}
              >
                <div className="aboutcard bg-gray-900">
                  <Image
                    alt="1"
                    src={`${
                      imgSrc
                        ? "https://cdn.discordapp.com/attachments/616664805897666560/1084812984615964714/download.png"
                        : `http://localhost:5000/${item.image_main}`
                    }`}
                    className="rounded-lg"
                    width={214}
                    height={214}
                    onError={() => {
                      setImgSrc(true)
                    }}
                  />
                  <div className="px-4 py-4">
                    <div className="mb-2 text-2xl font-bold text-gray-200">
                      {item.name}
                    </div>
                    <p className="text-base text-gray-300">Game_Filling</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <>
              <h2 className="my-48 text-center">❌</h2>
              <h2 className="my-48 text-center">❌</h2>
              <h2 className="my-48 text-center text-white">NO GAMES IN DATA</h2>
              <h2 className="my-48 text-center">❌</h2>
              <h2 className="my-48 text-center ">❌</h2>
            </>
          )}
        </Slider>
      </div>
    </div>
  )
}

export default Hotgame
