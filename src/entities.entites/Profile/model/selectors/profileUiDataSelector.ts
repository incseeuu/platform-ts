import { type StateScheme } from 'app/providers/StoreProvider'

export const profileUiDataSelector = (state: StateScheme) => state.profile?.uiProfileData
