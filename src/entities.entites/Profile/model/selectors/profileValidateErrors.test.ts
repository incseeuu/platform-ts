import { Country } from '../../../Country/model/type/index'
import { Currency } from '../../..//Currency/model/types/index'
import { type DeepPartial } from '@reduxjs/toolkit'
import { type StateScheme } from 'app/providers/StoreProvider'
import { profileValidateErrors } from './profileValidateErrors'
import { ValidateProfileError } from '../types/types'

describe('profileValidateErrors.test', () => {
  test('should return validate error', () => {
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
        validateError: [ValidateProfileError.WRONG_AGE],
        errorMessage: null,
        isLoading: false,
        readonly: false
      }
    }
    expect(profileValidateErrors(state as StateScheme)).toEqual([ValidateProfileError.WRONG_AGE])
  })
  test('should work with empty state', () => {
    const state: DeepPartial<StateScheme> = {}
    expect(profileValidateErrors(state as StateScheme)).toEqual(undefined)
  })
})
