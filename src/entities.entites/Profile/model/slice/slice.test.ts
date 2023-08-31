import { Country } from '../../../Country/model/type'
import { Currency } from '../../../Currency/model/types'
import { profileActions, profileReducer, type ProfileSchema, updateProfileData } from '../../../Profile'
import { ValidateProfileError } from '../types/types'

const fetchProfileData = {
  username: 'admin',
  age: 22,
  country: Country.Ukraine,
  lastname: 'ulbi tv',
  first: 'asd',
  city: 'asf',
  currency: Currency.USD
}

describe('profileSlice.test', () => {
  test('test set readonly', () => {
    const state: ProfileSchema = { uiProfileData: fetchProfileData, isLoading: false, errorMessage: null, readonly: false }
    expect(profileReducer(
      state,
      profileActions.toggleReadOnly(true)
    )).toEqual({ readonly: true })
  })

  test('test cancel edit', () => {
    const state: ProfileSchema = { uiProfileData: { username: '' }, isLoading: false, errorMessage: null, readonly: false }

    expect(profileReducer(
      state,
      profileActions.cancelModified()
    )).toEqual({
      readonly: true,
      validateErrors: undefined,
      fetchProfileData,
      uiProfileData: fetchProfileData
    })
  })

  test('test update profile', () => {
    const state: ProfileSchema = { uiProfileData: { username: '123' }, isLoading: false, errorMessage: null, readonly: false }

    expect(profileReducer(
      state,
      profileActions.changeUiData({
        username: '123456'
      })
    )).toEqual({
      form: { username: '123456' }
    })
  })

  test('test update profile service pending', () => {
    const state: ProfileSchema = {
      uiProfileData: { username: '123' },
      isLoading: false,
      errorMessage: null,
      readonly: false,
      validateError: [ValidateProfileError.SERVER_ERROR]
    }

    expect(profileReducer(
      state,
      updateProfileData.pending
    )).toEqual({
      isLoading: true,
      validateErrors: undefined
    })
  })

  test('test update profile service fullfiled', () => {
    const state: ProfileSchema = {
      uiProfileData: { username: '123' },
      isLoading: true,
      errorMessage: null,
      readonly: false
    }

    expect(profileReducer(
      state,
      updateProfileData.fulfilled(fetchProfileData, '')
    )).toEqual({
      isLoading: false,
      validateErrors: undefined,
      readonly: true,
      validateError: undefined,
      form: fetchProfileData,
      fetchProfileData
    })
  })
})
