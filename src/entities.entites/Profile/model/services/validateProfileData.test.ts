import { Country } from '../../../Country/model/type/index'
import { Currency } from '../../../Currency/model/types/index'
import { ValidateProfileError } from '../../model/types/types'
import { validateProfileData } from './validateProfileData'

const data = {
  username: 'admin',
  age: 22,
  country: Country.Ukraine,
  lastname: 'ulbi tv',
  first: 'asd',
  city: 'asf',
  currency: Currency.USD
}

describe('validateProfileData.test', () => {
  test('success', async () => {
    const result = validateProfileData(data)

    expect(result).toEqual([])
  })

  test('without first and last name', async () => {
    const result = validateProfileData({ ...data, first: '', lastname: '' })

    expect(result).toEqual([
      ValidateProfileError.WRONG_USER_DATA
    ])
  })

  test('incorrect age', async () => {
    const result = validateProfileData({ ...data, age: undefined })

    expect(result).toEqual([
      ValidateProfileError.WRONG_AGE
    ])
  })

  test('incorrect country', async () => {
    const result = validateProfileData({ ...data, country: undefined })

    expect(result).toEqual([
      ValidateProfileError.WRONG_COUNTRY
    ])
  })

  test('incorrect all', async () => {
    const result = validateProfileData({})

    expect(result).toEqual([
      ValidateProfileError.WRONG_USER_DATA,
      ValidateProfileError.WRONG_AGE,
      ValidateProfileError.WRONG_COUNTRY
    ])
  })
})
