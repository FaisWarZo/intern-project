/* eslint-disable no-console */
import type { AppProps } from "next/app"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "@styles/globals.css"
import { Provider } from "react-redux"
import { store } from "@stores/store"

import RunBackGround from "@providers/RunBackGround"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <RunBackGround />
      <Component {...pageProps} />
    </Provider>
  )
}
