import { createSlice } from '@reduxjs/toolkit'
import { type ProfileSchema } from '../types/types'
import { fetchProfileDataThunk } from 'entities.entites/Profile'

const initialState: ProfileSchema = {
  data: undefined,
  isLoading: false,
  readonly: true,
  errorMessage: null
}

const slice = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchProfileDataThunk.pending, (state, action) => {
        state.isLoading = true
      })
      .addCase(fetchProfileDataThunk.fulfilled, (state, action) => {
        state.isLoading = false
        state.data = action.payload
      })
      .addCase(fetchProfileDataThunk.rejected, (state, action) => {
        state.isLoading = false
        state.errorMessage = action.payload ?? null
      })
  }
})

export const profileReducer = slice.reducer
export const profileActions = slice.actions
