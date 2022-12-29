/* eslint-disable react/no-unescaped-entities */
import Link from "next/link"
import React from "react"

const Error404 = () => (
  <main className="flex h-screen w-full flex-col items-center justify-center bg-blackground-black">
    <div className="content-center">
      <div className="mx-auto text-center text-9xl font-bold text-red-500 ">
        404
      </div>
      <div className="text-2xl">
        <div className="mx-auto items-center text-center text-white">
          There's nothing to see here.😂
          <span>
            <Link
              className="font-black underline decoration-red-500 underline-offset-4"
              href="/"
            >
              Go Back
            </Link>
          </span>
        </div>
      </div>
    </div>
  </main>
)

export default Error404
