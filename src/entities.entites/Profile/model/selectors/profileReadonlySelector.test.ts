import { Country } from '../../../Country/model/type/index'
import { Currency } from '../../..//Currency/model/types/index'
import { type DeepPartial } from '@reduxjs/toolkit'
import { type StateScheme } from 'app/providers/StoreProvider'
import { profileReadonlySelector } from './profileReadonlySelector'

describe('profileReadonlySelector.test', () => {
  test('should work with filled state', () => {
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
    expect(profileReadonlySelector(state as StateScheme)).toEqual(false)
  })
  test('should work with empty state', () => {
    const state: DeepPartial<StateScheme> = {}
    expect(profileReadonlySelector(state as StateScheme)).toEqual(undefined)
  })
})
