import { type StateScheme } from 'app/providers/StoreProvider'

export const profileValidateErrors = (state: StateScheme) => state.profile?.validateError
