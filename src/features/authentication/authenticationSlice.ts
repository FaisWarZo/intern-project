/* eslint-disable no-console */
import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import { ILoginResponse } from "@src/types/login"
import { IGetuserByEmail } from "@src/types/getuseremail"
import type { RootState } from "../../store/store"
// Define a type for the slice state

export interface IDatauser {
  username: string
  email: string
  role: string
  coin: number
  first_name: string
  last_name: string
  frame: string
  id: string
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

export const authenticationSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    updateProfile: (state, action: PayloadAction<IDatauser>) => {
      state.data = action.payload
    },

    updateProfileRefresh: (state, action: PayloadAction<IGetuserByEmail>) => {
      const _data = {
        username: action.payload.username,
        email: action.payload.email,
        coin: action.payload.coin,
        role: action.payload.role,
        id: action.payload.id,
        first_name: action.payload.first_name,
        last_name: action.payload.last_name,
        frame: action.payload.frame,
        access_token: "",
        refresh_token: ""
      }
      state.data = _data
    },

    update_coin: (state, action: PayloadAction<{ coin: number }>) => {
      if (state.data) {
        state.data.coin = action.payload.coin
      }
    },

    update_frame: (state, action: PayloadAction<{ frame: string }>) => {
      if (state.data) {
        state.data.frame = action.payload.frame
      }
    },

    edit_profile: (
      state,
      action: PayloadAction<{
        username: string
        first_name: string
        last_name: string
      }>
    ) => {
      if (state.data) {
        state.data.username = action.payload.username
        state.data.first_name = action.payload.first_name
        state.data.last_name = action.payload.last_name
      }
    },

    SIGN_IN: (state, action: PayloadAction<ILoginResponse>) => {
      state.data = action.payload
    },

    SIGN_OUT: () => initialState
  }
})

export const {
  updateProfileRefresh,
  updateProfile,
  update_coin,
  update_frame,
  edit_profile,
  SIGN_IN,
  SIGN_OUT
} = authenticationSlice.actions

export const dataProfile = (state: RootState) => state.authentication.data

export default authenticationSlice.reducer
