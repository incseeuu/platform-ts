import { configureStore, type ReducersMapObject } from '@reduxjs/toolkit'
import { type StateScheme } from './stateScheme'
import { userReducer } from 'entities.entites/'
import { useDispatch } from 'react-redux'
import { createReducerManager } from './reducerManager'

export const createReduxStore = (initialState?: StateScheme) => {
  const rootReducers: ReducersMapObject<StateScheme> = {
    user: userReducer
  }
  const reducerManager = createReducerManager(rootReducers)

  const store = configureStore<StateScheme>({
    reducer: reducerManager.reduce,
    devTools: __IS_DEV__,
    preloadedState: initialState
  })

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  store.reducerManager = reducerManager

  return store
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']

export const useAppDispatch = () => useDispatch<AppDispatch>()
