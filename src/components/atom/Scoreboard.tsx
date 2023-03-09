import Slider from "react-slick"
import Image from "next/image"

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

  return (
    <div className="mt-10">
      <h2 className="ml-5 text-2xl text-gray-200">
        TOP<span className="text-2xl text-color-nvidia">PLAYERS</span>
      </h2>
      <Slider
        {...settings}
        className="mt-8"
      >
        <div>
          <div className="relative w-32">
            <div className="absolute right-0 w-2/5 rounded-full bg-red-600 ">
              <h2 className="text-center text-sm text-white">1</h2>
            </div>
            <Image
              src="https://cdn.discordapp.com/attachments/616664805897666560/1061934191085887508/809170_user_512x512.png"
              className="mx-auto block  rounded-full border-4 border-red-600"
              alt="1"
              width={150}
              height={150}
            />
            <div className="px-4 py-4">
              <h2 className="mb-2 text-center text-sm text-gray-200">USER 1</h2>
              <p className="text-center text-base text-gray-300">
                30000 Points
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="relative w-32">
            <div className="absolute right-0 w-2/5 rounded-full bg-blue-600 ">
              <h2 className="text-center text-sm text-white">2</h2>
            </div>
            <Image
              src="https://cdn.discordapp.com/attachments/616664805897666560/1061934191085887508/809170_user_512x512.png"
              className="mx-auto block  rounded-full border-4 border-blue-600"
              alt="1"
              width={150}
              height={150}
            />
            <div className="px-4 py-4">
              <h2 className="mb-2 text-center text-sm text-gray-200">USER 2</h2>
              <p className="text-center text-base text-gray-300">
                25000 Points
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="relative w-32">
            <div className="absolute right-0 w-2/5 rounded-full bg-green-600 ">
              <h2 className="text-center text-sm text-white">3</h2>
            </div>
            <Image
              src="https://cdn.discordapp.com/attachments/616664805897666560/1061934191085887508/809170_user_512x512.png"
              className="mx-auto block  rounded-full border-4 border-green-600"
              alt="1"
              width={150}
              height={150}
            />
            <div className="px-4 py-4">
              <h2 className="mb-2 text-center text-sm text-gray-200">USER 3</h2>
              <p className="text-center text-base text-gray-300">
                20000 Points
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="relative w-32">
            <div className="absolute right-0 w-2/5 rounded-full border-2 border-blue-600 bg-gray-900">
              <h2 className="text-center text-sm text-white">4</h2>
            </div>
            <Image
              src="https://cdn.discordapp.com/attachments/616664805897666560/1061934191085887508/809170_user_512x512.png"
              className="mx-auto block  rounded-full border-4 border-gray-700"
              alt="1"
              width={150}
              height={150}
            />
            <div className="px-4 py-4">
              <h2 className="mb-2 text-center text-sm text-gray-200">USER 4</h2>
              <p className="text-center text-base text-gray-300">
                19000 Points
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="relative w-32">
            <div className="absolute right-0 w-2/5 rounded-full border-2 border-blue-600 bg-gray-900">
              <h2 className="text-center text-sm text-white">5</h2>
            </div>
            <Image
              src="https://cdn.discordapp.com/attachments/616664805897666560/1061934191085887508/809170_user_512x512.png"
              className="mx-auto block  rounded-full border-4 border-gray-700"
              alt="1"
              width={150}
              height={150}
            />
            <div className="px-4 py-4">
              <h2 className="mb-2 text-center text-sm text-gray-200">USER 5</h2>
              <p className="text-center text-base text-gray-300">
                18000 Points
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="relative w-32">
            <div className="absolute right-0 w-2/5 rounded-full border-2 border-blue-600 bg-gray-900">
              <h2 className="text-center text-sm text-white">6</h2>
            </div>
            <Image
              src="https://cdn.discordapp.com/attachments/616664805897666560/1061934191085887508/809170_user_512x512.png"
              className="mx-auto block  rounded-full border-4 border-gray-700"
              alt="1"
              width={150}
              height={150}
            />
            <div className="px-4 py-4">
              <h2 className="mb-2 text-center text-sm text-gray-200">USER 6</h2>
              <p className="text-center text-base text-gray-300">
                17000 Points
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="relative w-32">
            <div className="absolute right-0 w-2/5 rounded-full border-2 border-blue-600 bg-gray-900">
              <h2 className="text-center text-sm text-white">7</h2>
            </div>
            <Image
              src="https://cdn.discordapp.com/attachments/616664805897666560/1061934191085887508/809170_user_512x512.png"
              className="mx-auto block  rounded-full border-4 border-gray-700"
              alt="1"
              width={150}
              height={150}
            />
            <div className="px-4 py-4">
              <h2 className="mb-2 text-center text-sm text-gray-200">USER 7</h2>
              <p className="text-center text-base text-gray-300">
                16000 Points
              </p>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  )
}

export default Scoreboard
