import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type AuthorizationSchema } from 'features/Authorization'
import { authorizationThunk } from '../services/authorizationThunk'

const initialState: AuthorizationSchema = {
  login: '',
  password: '',
  isLoading: false,
  errorMessage: null
}

const slice = createSlice({
  name: 'authorization',
  initialState,
  reducers: {
    setLogin: (state, action: PayloadAction<string>) => {
      state.login = action.payload
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload
    }
  },
  extraReducers: builder => {
    builder
      .addCase(authorizationThunk.pending, (state, action) => {
        state.errorMessage = null
        state.isLoading = true
      })
      .addCase(authorizationThunk.fulfilled, (state, action) => {
        state.isLoading = false
      })
      .addCase(authorizationThunk.rejected, (state, action) => {
        state.isLoading = false
        state.errorMessage = action.payload
      })
  }
})

export const authorizationActions = slice.actions
export const authorizationReducer = slice.reducer
