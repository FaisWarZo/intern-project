/* eslint-disable import/no-unresolved */
import type { AppProps } from "next/app"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "@styles/globals.css"
import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"
import { persistor, store } from "@stores/store"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate
        loading={null}
        persistor={persistor}
      >
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  )
}
