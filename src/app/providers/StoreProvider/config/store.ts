import { configureStore, type ReducersMapObject } from '@reduxjs/toolkit'
import { type StateScheme } from './stateScheme'
import { userReducer } from 'entities.entites/'
import { authorizationReducer } from 'features/Authorization'
import { useDispatch } from 'react-redux'

export const createReduxStore = (initialState?: StateScheme) => {
  const rootReducers: ReducersMapObject<StateScheme> = {
    user: userReducer,
    authorization: authorizationReducer
  }

  return configureStore<StateScheme>({
    reducer: rootReducers,
    devTools: __IS_DEV__,
    preloadedState: initialState
  })
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']

export const useAppDispatch = () => useDispatch<AppDispatch>()
