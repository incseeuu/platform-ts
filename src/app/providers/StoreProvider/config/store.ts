import { configureStore } from '@reduxjs/toolkit'
import { type StateScheme } from 'app/providers/StoreProvider/config/stateScheme'

export const createReduxStore = (initialState?: StateScheme) => {
  return configureStore<StateScheme>({
    reducer: {},
    devTools: __IS_DEV__
  })
}
