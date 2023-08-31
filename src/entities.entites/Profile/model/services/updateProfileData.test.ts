import { Country } from '../../../Country/model/type'
import { Currency } from '../../../Currency/model/types'
import { TestAsyncThunk } from '../../../../shared/lib/test/TestAsyncThunk'
import { updateProfileData } from './updateProfileData'
import { ValidateProfileError } from '../types/types'

const data = {
  username: 'admin',
  age: 22,
  country: Country.Ukraine,
  lastname: 'ulbi tv',
  first: 'asd',
  city: 'asf',
  currency: Currency.USD
}

describe('updateProfileData.test', () => {
  test('success', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        uiProfileData: data,
        readonly: true,
        isLoading: false,
        errorMessage: null
      }
    })

    thunk.api.put.mockReturnValue(Promise.resolve({ data }))

    const result = await thunk.callThunk()

    expect(thunk.api.put).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe('fulfilled')
    expect(result.payload).toEqual(data)
  })

  test('error', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        uiProfileData: data,
        readonly: true,
        isLoading: false,
        errorMessage: null
      }
    })
    thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }))

    const result = await thunk.callThunk()

    expect(result.meta.requestStatus).toBe('rejected')
    expect(result.payload).toEqual([
      ValidateProfileError.SERVER_ERROR
    ])
  })

  test('validate error', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        uiProfileData: { ...data, lastname: '' },
        readonly: true,
        isLoading: false,
        errorMessage: null
      }
    })
    const result = await thunk.callThunk()

    expect(result.meta.requestStatus).toBe('rejected')
    expect(result.payload).toEqual([
      ValidateProfileError.WRONG_USER_DATA
    ])
  })
})
