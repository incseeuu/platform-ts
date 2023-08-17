import { type Currency } from 'entities.entites/Currency/model/types'
import { type Country } from 'entities.entites/Country/model/type'

export interface Profile {
  first?: string
  lastname?: string
  age?: number
  currency?: Currency
  country?: Country
  city?: string
  username?: string
  avatar?: string
}

export interface ProfileSchema {
  fetchProfileData?: Profile
  uiProfileData: Profile | undefined
  isLoading: boolean
  errorMessage: string | null
  readonly: boolean
}
