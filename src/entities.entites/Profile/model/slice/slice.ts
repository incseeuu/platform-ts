import { createSlice } from '@reduxjs/toolkit'
import { type ProfileSchema } from '../types/types'

const initialState: ProfileSchema = {
  data: undefined,
  isLoading: false,
  readonly: true,
  errorMessage: null
}

const slice = createSlice({
  name: 'profile',
  initialState,
  reducers: {}
})

export const profileReducer = slice.reducer
export const profileActions = slice.actions
