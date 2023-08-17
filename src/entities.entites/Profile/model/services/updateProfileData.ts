import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from 'app/providers/StoreProvider'
import axios, { type AxiosResponse } from 'axios'
import { type Profile } from '../types/types'
import { profileUiDataSelector } from 'entities.entites/Profile'

export const updateProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
  'profile/updateProfileData',
  async (_, thunkAPI) => {
    try {
      const newProfileData = profileUiDataSelector(thunkAPI.getState())
      const responseProfile: AxiosResponse<Profile> = await thunkAPI.extra.api.put('/profile', newProfileData)

      return responseProfile.data
    } catch (err) {
      if (axios.isAxiosError(err)) {
        const error = err.message ? err.message : 'Some error occurred'
        return thunkAPI.rejectWithValue(error)
      } else {
        return thunkAPI.rejectWithValue('Some error occurred')
      }
    }
  }
)
