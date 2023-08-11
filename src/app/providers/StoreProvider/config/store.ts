import {
  type CombinedState,
  configureStore,
  type DeepPartial,
  type Reducer,
  type ReducersMapObject
} from '@reduxjs/toolkit'
import { type StateScheme } from './stateScheme'
import { useDispatch } from 'react-redux'
import { createReducerManager } from './reducerManager'
import { $api } from 'shared/api/api'

export const createReduxStore = (
  initialState?: StateScheme,
  asyncReducers?: DeepPartial<ReducersMapObject<StateScheme>>) => {
  const rootReducers: ReducersMapObject<StateScheme> = {
    ...asyncReducers
  }
  const reducerManager = createReducerManager(rootReducers)

  const store = configureStore({
    reducer: reducerManager.reduce as Reducer<CombinedState<StateScheme>>,
    devTools: __IS_DEV__,
    preloadedState: initialState,
    middleware: getDefaultMiddleware => getDefaultMiddleware({
      thunk: {
        extraArgument: {
          api: $api
        }
      }
    })
  })

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  store.reducerManager = reducerManager

  return store
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']

export const useAppDispatch = () => useDispatch<AppDispatch>()
