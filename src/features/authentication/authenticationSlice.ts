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
  data: IDatauser
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

export const authenticationSlice = createSlice({
  name: "authentication",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    updateProfile: (state, action: PayloadAction<IDatauser>) => {
      // eslint-disable-next-line no-console
      console.log("action", action)
      state.data = action.payload
    }
  }
})

export const { updateProfile } = authenticationSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const dataProfile = (state: RootState) => state.authentication.data

export default authenticationSlice.reducer
