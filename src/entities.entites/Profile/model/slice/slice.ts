import { createSlice } from '@reduxjs/toolkit'
import { type ProfileSchema } from '../types/types'
import { fetchProfileDataThunk } from 'entities.entites/Profile'
import { updateProfileData } from '../services/updateProfileData'

const initialState: ProfileSchema = {
  fetchProfileData: undefined,
  uiProfileData: {},
  isLoading: false,
  readonly: true,
  errorMessage: null
}

const slice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    changeUiData: (state, action) => {
      state.uiProfileData = {
        ...state.uiProfileData,
        ...action.payload
      }
    },
    toggleReadOnly: (state, action) => {
      state.readonly = action.payload
    },
    cancelModified: (state) => {
      state.uiProfileData = state.fetchProfileData
    }
  },
  extraReducers: builder => {
    builder
      .addCase(fetchProfileDataThunk.pending, (state, action) => {
        state.isLoading = true
      })
      .addCase(fetchProfileDataThunk.fulfilled, (state, action) => {
        state.isLoading = false
        state.fetchProfileData = action.payload
        state.uiProfileData = action.payload
      })
      .addCase(fetchProfileDataThunk.rejected, (state, action) => {
        state.isLoading = false
        state.errorMessage = action.payload ?? null
      })
      .addCase(updateProfileData.pending, (state, action) => {
        state.isLoading = true
      })
      .addCase(updateProfileData.fulfilled, (state, action) => {
        state.isLoading = false
        state.fetchProfileData = action.payload
        state.uiProfileData = action.payload
      })
      .addCase(updateProfileData.rejected, (state, action) => {
        state.isLoading = false
        state.errorMessage = action.payload ?? null
      })
  }
})

export const profileReducer = slice.reducer
export const profileActions = slice.actions
