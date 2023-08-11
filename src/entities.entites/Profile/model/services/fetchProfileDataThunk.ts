import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from 'app/providers/StoreProvider'
import axios, { type AxiosResponse } from 'axios'
import { type Profile } from '../types/types'

export const fetchProfileDataThunk = createAsyncThunk<Profile, void, ThunkConfig<string>>(
  'profile/fetchProfileData',
  async (_, thunkAPI) => {
    try {
      const responseProfile: AxiosResponse<Profile> = await thunkAPI.extra.api.get('/profile')

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
