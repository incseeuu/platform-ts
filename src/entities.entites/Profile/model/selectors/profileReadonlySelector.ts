import { type StateScheme } from 'app/providers/StoreProvider'

export const profileReadonlySelector = (state: StateScheme) => state.profile?.readonly
