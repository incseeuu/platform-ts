import { type Profile, ValidateProfileError } from '../types/types'

export const validateProfileData = (profile?: Profile) => {
  if (!profile) {
    return [ValidateProfileError.NO_DATA]
  }

  const { country, first, lastname, age } = profile

  const errors: ValidateProfileError[] = []

  if (!first || !lastname) {
    errors.push(ValidateProfileError.WRONG_USER_DATA)
  }

  if (!age || !Number.isInteger(age)) {
    errors.push(ValidateProfileError.WRONG_AGE)
  }

  if (!country) {
    errors.push(ValidateProfileError.WRONG_COUNTRY)
  }

  return errors
}
