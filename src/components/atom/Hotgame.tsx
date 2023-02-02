import Slider from "react-slick"
import Image from "next/image"

const Hotgame = () => {
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
      <h2 className="text-2xl text-gray-200">
        HOT<span className="text-2xl text-color-nvidia">GAME</span>
      </h2>
      <div className="hotgameslide ">
        <Slider
          {...settings}
          className="mt-10"
        >
          <div>
            <div className="aboutcard bg-gray-900">
              <Image
                alt="1"
                src="https://cdn.discordapp.com/attachments/1050317355797975040/1060783416527822930/2Q.png"
                className="rounded-lg"
                width={214}
                height={214}
              />
              <div className="px-4 py-4">
                <div className="mb-2 text-2xl font-bold text-gray-200">
                  Genshin Impact
                </div>
                <p className="text-base text-gray-300">Mihoyo</p>
              </div>
            </div>
          </div>
          <div>
            <div className="aboutcard bg-gray-900">
              <Image
                alt="2"
                src="https://cdn.discordapp.com/attachments/1050317355797975040/1060815685317578802/pokemon-scarlet-1659542292648.jpg"
                className="rounded-lg"
                width={214}
                height={214}
              />
              <div className="px-4 py-4">
                <div className="mb-2 text-2xl font-bold text-gray-200">
                  Pokémon Scarlet
                </div>
                <p className="text-base text-gray-300">Nintendo</p>
              </div>
            </div>
          </div>
          <div>
            <div className="aboutcard bg-gray-900">
              <Image
                alt="3"
                src="https://cdn.discordapp.com/attachments/616664805897666560/1060816817280532490/unnamed.png"
                className="rounded-lg"
                width={214}
                height={214}
              />
              <div className="px-4 py-4">
                <div className="mb-2 text-2xl font-bold text-gray-200">
                  Minecraft
                </div>
                <p className="text-base text-gray-300">Mojang Studios</p>
              </div>
            </div>
          </div>
          <div>
            <div className="aboutcard bg-gray-900">
              <Image
                alt="4"
                src="https://cdn.discordapp.com/attachments/616664805897666560/1060818583585828874/unnamed.png"
                className="rounded-lg"
                width={214}
                height={214}
              />
              <div className="px-4 py-4">
                <div className="mb-2 text-2xl font-bold text-gray-200">
                  PUBG
                </div>
                <p className="text-base text-gray-300">Tencent Games</p>
              </div>
            </div>
          </div>
          <div>
            <div className="aboutcard bg-gray-900">
              <Image
                alt="5"
                src="https://www.mobygames.com/images/covers/l/501275-honkai-impact-3rd-ipad-front-cover.jpg"
                className="rounded-lg"
                width={214}
                height={214}
              />
              <div className="px-4 py-4">
                <div className="mb-2 text-2xl font-bold text-gray-200">
                  Honkai Impact
                </div>
                <p className="text-base text-gray-300">mihoyo</p>
              </div>
            </div>
          </div>
          <div>
            <div className="aboutcard bg-gray-900">
              <Image
                alt="6"
                src="https://assets-prd.ignimgs.com/2022/08/03/pokemon-violet-1659542326365.jpg"
                className="rounded-lg"
                width={214}
                height={214}
              />
              <div className="px-4 py-4">
                <div className="mb-2 text-2xl font-bold text-gray-200">
                  Pokémon Violet
                </div>
                <p className="text-base text-gray-300">Nintendo</p>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  )
}

export default Hotgame
