import { configureStore, type ReducersMapObject } from '@reduxjs/toolkit'
import { type StateScheme } from 'app/providers/StoreProvider/config/stateScheme'
import { userReducer } from 'entities/User/model/slice/userSlice'

export const createReduxStore = (initialState?: StateScheme) => {
  const rootReducers: ReducersMapObject<StateScheme> = {
    user: userReducer
  }

  return configureStore<StateScheme>({
    reducer: rootReducers,
    devTools: __IS_DEV__,
    preloadedState: initialState
  })
}
