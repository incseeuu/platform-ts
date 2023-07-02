import { type StateScheme } from 'app/providers/StoreProvider/config/stateScheme'

export const getUserData = (state: StateScheme) => state.user?.authData
