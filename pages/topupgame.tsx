/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/button-has-type */
import Footer from "@components/Footer"
import Navbar from "@components/Navbar"
import Image from "next/image"
import { useState } from "react"

const Topupgame = () => {
  // eslint-disable-next-line no-empty-pattern
  const [] = useState("")
  return (
    <>
      <Navbar />
      <div className="container mx-auto mt-40">
        <h2 className="text-center text-2xl text-white">🎮 Top Up 🎮</h2>
        <section className="pt-5 text-gray-600">
          <div className=" aboutcard container mx-auto mt-10 flex max-w-3xl flex-wrap justify-center rounded-lg bg-gray-900 px-5 py-24">
            {/* QR Code Number Account & Uploadfile */}
            <div className="flex-wrap md:flex">
              <div className="mx-auto ">
                <Image
                  className="mx-auto mt-12 h-52 w-52 rounded-lg border border-gray-600 p-2 md:mt-0"
                  src="https://cdn.discordapp.com/attachments/616664805897666560/1067668221089562624/IMG_4851.jpg"
                  alt="step"
                  width={250}
                  height={250}
                />
                <div>
                  <h1 className="mt-4 text-center text-xl font-bold text-gray-200">
                    นาย นราวิชญ์ เชยชม
                  </h1>
                  <p className="mt-2 text-center font-semibold text-gray-300">
                    MR NARAWIT CHOEYCHOM
                  </p>
                </div>
                {/* component */}
                <div className="mx-auto w-52">
                  <div className="m-4">
                    <div className="flex w-full items-center justify-center">
                      <label className="flex h-14 w-full cursor-pointer flex-col border-2 border-dashed border-gray-600 hover:border-gray-600 hover:bg-gray-800">
                        <div className="mt-4 flex items-center justify-center space-x-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="h-6 w-6  text-gray-400"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                            />
                          </svg>
                          <p className="text-sm  text-gray-400 group-hover:text-gray-600">
                            อัปโหลดภาพ
                          </p>
                        </div>
                        <input
                          type="file"
                          className="opacity-0"
                        />
                      </label>
                    </div>
                  </div>
                </div>
                <button className="mx-auto mt-10 block w-full rounded-md bg-red-500 px-6 py-2 text-base font-semibold text-white outline-none hover:bg-red-600">
                  Send proof of transfer
                </button>
              </div>
              {/* Step Checkout */}
              <div className="mt-8 max-w-sm md:mt-0 md:ml-10 md:w-2/3">
                <div className="relative flex pb-12">
                  <div className="absolute inset-0 flex h-full w-10 items-center justify-center">
                    <div className="pointer-events-none h-full w-1 bg-gray-500" />
                  </div>
                  <div className="relative z-10 inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-red-500 text-white">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                  </div>
                  <div className="flex-grow pl-4">
                    <h2 className="title-font mb-1 text-sm font-medium tracking-wider text-gray-200">
                      STEP 1
                    </h2>
                    <p className="text-gray-400">
                      ชำระเงินด้วยการสแกนด้วยช่องทาง
                      <br />
                      <b className="text-gray-300"> QR CODE</b>
                    </p>
                  </div>
                </div>
                <div className="relative flex pb-12">
                  <div className="absolute inset-0 flex h-full w-10 items-center justify-center">
                    <div className="pointer-events-none h-full w-1 bg-gray-500" />
                  </div>
                  <div className="relative z-10 inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-red-500 text-white">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                    </svg>
                  </div>
                  <div className="flex-grow pl-4">
                    <h2 className="title-font mb-1 text-sm font-medium tracking-wider text-gray-200">
                      STEP 2
                    </h2>
                    <p className="text-gray-400">
                      แสดงหลักฐานการชำระเงินพร้อม
                      <b className="text-gray-300">สำเนาบิล</b>หรือ
                      <b className="text-gray-300">ภาพสลิปการโอนเงิน</b>
                    </p>
                  </div>
                </div>
                <div className="relative flex pb-12">
                  <div className="relative z-10 inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-red-500 text-white">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        cx={12}
                        cy={5}
                        r={3}
                      />
                      <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3" />
                    </svg>
                  </div>
                  <div className="flex-grow pl-4">
                    <h2 className="title-font mb-1 text-sm font-medium tracking-wider text-gray-200">
                      STEP 3
                    </h2>
                    <p className="text-gray-400">
                      รอเจ้าหน้าที่ตรวจสอบ
                      คุณสามารถตรวจสอบสถานะการชำระเงินได้โดยไปที่
                      <b className="text-gray-300">การชำระเงิน</b>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}

export default Topupgame
