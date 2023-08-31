import { Country } from '../../../Country/model/type/index'
import { Currency } from '../../..//Currency/model/types/index'
import { type DeepPartial } from '@reduxjs/toolkit'
import { type StateScheme } from 'app/providers/StoreProvider'
import { profileFetchingDataSelector } from './profileFetchingDataSelector'

describe('profileFetchingDataSelector.test', () => {
  test('should return error', () => {
    const uiProfileData = {
      username: 'admin',
      age: 22,
      country: Country.Ukraine,
      lastname: 'asdasdsa',
      first: 'asd',
      city: 'asf',
      currency: Currency.USD
    }
    const state: DeepPartial<StateScheme> = {
      profile: {
        uiProfileData,
        fetchProfileData: uiProfileData,
        errorMessage: null,
        isLoading: false,
        readonly: false
      }
    }
    expect(profileFetchingDataSelector(state as StateScheme)).toEqual(uiProfileData)
  })
  test('should work with empty state', () => {
    const state: DeepPartial<StateScheme> = {}
    expect(profileFetchingDataSelector(state as StateScheme)).toEqual(undefined)
  })
})
