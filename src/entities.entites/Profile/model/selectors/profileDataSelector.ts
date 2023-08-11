import { type StateScheme } from 'app/providers/StoreProvider'

export const profileDataSelector = (state: StateScheme) => state.profile?.data
