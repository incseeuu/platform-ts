import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from 'app/providers/StoreProvider'
import { type AxiosResponse } from 'axios'
import { type Profile, ValidateProfileError } from '../types/types'
import { profileUiDataSelector } from 'entities.entites/Profile'
import { validateProfileData } from 'entities.entites/Profile/model/services/validateProfileData'

export const updateProfileData = createAsyncThunk<Profile, void, ThunkConfig<ValidateProfileError[]>>(
  'profile/updateProfileData',
  async (_, thunkAPI) => {
    const newProfileData = profileUiDataSelector(thunkAPI.getState())

    const errors = validateProfileData(newProfileData)

    if (errors.length) {
      return thunkAPI.rejectWithValue(errors)
    }

    try {
      const responseProfile: AxiosResponse<Profile> = await thunkAPI.extra.api.put('/profile', newProfileData)

      return responseProfile.data
    } catch (err) {
      return thunkAPI.rejectWithValue([ValidateProfileError.SERVER_ERROR])
    }
  }
)
