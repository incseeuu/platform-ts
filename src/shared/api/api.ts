import axios from 'axios'
import { AUTH_DATA_USER_KEY } from 'shared/consts/localStorage'

export const $api = axios.create({
  baseURL: __API__,
  headers: {
    Authorization: localStorage.getItem(AUTH_DATA_USER_KEY)
  }
})
