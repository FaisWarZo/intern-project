/* eslint-disable no-console */
import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import type { RootState } from "../../store/store"

// Define a type for the slice state

export interface IDatauser {
  username: string
  email: string
  coin: number
  role: string
  id: string
  access_token: string
  refresh_token: string
}
export interface IAuthState {
  data: IDatauser | any
  status: boolean
}
// Define the initial state using that type
const initialState: IAuthState = {
  data: {
    username: "",
    email: "",
    coin: 0,
    role: "",
    id: "",
    access_token: "",
    refresh_token: ""
  },
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
    }
  }
})

export const { updateProfile } = authenticationSlice.actions

export const dataProfile = (state: RootState) => state.authentication.data

export default authenticationSlice.reducer
