import Slider from "react-slick"
import Image from "next/image"

const HeaderSlide = () => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 6000, // 6 seconds
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }

  return (
    <div className="headerslide container-slick rounded bg-gray-900">
      <Slider {...settings}>
        <div>
          <Image
            alt="1"
            src="https://cdn.discordapp.com/attachments/616664805897666560/1060491095441678367/bloodbornegraphicsrecreated_1755843b.jpg"
            width={1300}
            height={500}
          />
        </div>
        <div>
          <Image
            alt="2"
            src="https://cdn.discordapp.com/attachments/616664805897666560/1060489567830024222/dce4rqj-f82a4858-c7c3-404f-82e9-229be614cff2.png"
            width={1300}
            height={500}
          />
        </div>
        <div>
          <Image
            alt="3"
            src="https://cdn.discordapp.com/attachments/616664805897666560/1060491529468268574/602223.jpg"
            width={1300}
            height={500}
          />
        </div>
        <div>
          <Image
            alt="4"
            src="https://cdn.discordapp.com/attachments/616664805897666560/1060492643215364096/1263621.png"
            width={1300}
            height={500}
          />
        </div>
      </Slider>
    </div>
  )
}

export default HeaderSlide
