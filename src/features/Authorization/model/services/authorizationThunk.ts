import { createAsyncThunk } from '@reduxjs/toolkit'
import { type User } from 'entities/User'
import axios, { type AxiosResponse } from 'axios'

export interface AuthorizationForm {
  login: string
  password: string
}

export const authorizationThunk = createAsyncThunk<User, AuthorizationForm, { rejectValue: string }>(
  'authorization/fetchAuthorizationData',
  async (authData, thunkAPI) => {
    try {
      const responseUser: AxiosResponse<User> = await axios.post('http://localhost:8000', authData)

      return responseUser.data
    } catch (e) {
      return thunkAPI.rejectWithValue('error')
    }
  }
)
