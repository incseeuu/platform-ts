import { type StateScheme } from 'app/providers/StoreProvider'

export const profileFetchingDataSelector = (state: StateScheme) => state.profile?.fetchProfileData
