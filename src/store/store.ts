// import { createStore } from "redux"
// import { persistStore, persistReducer } from "redux-persist"
// import storage from "redux-persist/lib/storage" // defaults to localStorage for web

// import authenticationReducer from "../features/authentication/authenticationSlice"

// const persistConfig = {
//   key: "root",
//   authentication: authenticationReducer,
//   storage
// }

// const persistedReducer = persistReducer(persistConfig, authenticationReducer)

// export default () => {
//   const store = createStore(persistedReducer)
//   const persistor = persistStore(store)
//   return { store, persistor }
// }

import { configureStore } from "@reduxjs/toolkit"
import authenticationReducer from "../features/authentication/authenticationSlice"

export const store = configureStore({
  reducer: {
    authentication: authenticationReducer
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
