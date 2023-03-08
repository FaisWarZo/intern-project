/* eslint-disable no-console */
import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import { ILoginResponse } from "@src/types/login"
import type { RootState } from "../../store/store"
// Define a type for the slice state

export interface IDatauser {
  username: string
  email: string
  coin: number
  role: string
  id: string
  first_name: string
  last_name: string
  access_token: string
  refresh_token: string
}
export interface IAuthState {
  data: IDatauser | undefined
  status: boolean
}
// Define the initial state using that type
const initialState: IAuthState = {
  data: undefined,
  status: false
}

console.log(
  typeof window !== "undefined" &&
    typeof localStorage.getItem("dataProfile") === "string"
)
export const authenticationSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    updateProfile: (state, action: PayloadAction<IDatauser>) => {
      // console.log("action", action.payload)
      localStorage.setItem("dataProfile", JSON.stringify(action.payload))
      state.data =
        JSON.parse(localStorage.getItem("dataProfile") || "") || action.payload
    },
    update_coin: (state, action: PayloadAction<{ coin: number }>) => {
      if (state.data) {
        state.data.coin = action.payload.coin
      }
    },
    SIGN_IN: (state, action: PayloadAction<ILoginResponse>) => {
      state.data = action.payload
    }
  }
})

export const { updateProfile, update_coin, SIGN_IN } =
  authenticationSlice.actions

export const dataProfile = (state: RootState) => state.authentication.data

export default authenticationSlice.reducer
