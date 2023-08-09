import { createAsyncThunk } from '@reduxjs/toolkit'
import { type User, userActions } from 'entities.entites/User'
import axios, { type AxiosResponse } from 'axios'
import { AUTH_DATA_USER_KEY } from 'shared/consts/localStorage'
import { type ThunkConfig } from 'app/providers/StoreProvider'

export interface AuthorizationForm {
  username: string
  password: string
}

export const authorizationThunk = createAsyncThunk<User, AuthorizationForm, ThunkConfig<string>>(
  'authorization/fetchAuthorizationData',
  async (authData, thunkAPI) => {
    try {
      const responseUser: AxiosResponse<User> = await thunkAPI.extra.api.post('/login', authData)

      localStorage.setItem(AUTH_DATA_USER_KEY, JSON.stringify(responseUser.data))
      thunkAPI.dispatch(userActions.setUserData(responseUser.data))

      return responseUser.data
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
