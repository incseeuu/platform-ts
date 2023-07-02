import { type StateScheme } from 'app/providers/StoreProvider/config/stateScheme'

export const getAuthorizationState = (state: StateScheme) => state?.authorization
