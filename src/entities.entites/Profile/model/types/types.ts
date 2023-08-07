import { type Country, type Currency } from 'shared/consts/common'

export interface Profile {
  first: string
  lastname: string
  age: number
  currency: typeof Currency
  country: typeof Country
  city: string
  username: string
  avatar: string
}

export interface ProfileSchema {
  data?: Profile
  isLoading: boolean
  errorMessage: string | null
  readonly: boolean
}
