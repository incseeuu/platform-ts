import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type User, type UserSchema } from '../type/user'
import { AUTH_DATA_USER_KEY } from 'shared/consts/localStorage'

const initialState: UserSchema = {
  authData: null
}

const slice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<User>) => {
      state.authData = action.payload
    },
    initUserData: (state) => {
      const getDataFromLS = localStorage.getItem(AUTH_DATA_USER_KEY)
      if (getDataFromLS) {
        state.authData = JSON.parse(getDataFromLS)
      }
    },
    clearUserData: (state) => {
      localStorage.removeItem(AUTH_DATA_USER_KEY)
      state.authData = null
    }
  }
})

export const userActions = slice.actions
export const userReducer = slice.reducer
