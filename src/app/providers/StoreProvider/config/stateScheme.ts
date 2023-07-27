import { type UserSchema } from 'entities.entites'
import { type AuthorizationSchema } from 'features/Authorization'
import { type AnyAction, type CombinedState, type EnhancedStore, type Reducer, type ReducersMapObject } from '@reduxjs/toolkit'

export interface StateScheme {
  user?: UserSchema
  authorization?: AuthorizationSchema
}

export type StateSchemeKey = keyof StateScheme

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateScheme>
  reduce: (state: StateScheme, action: AnyAction) => CombinedState<StateScheme>
  add: (key: StateSchemeKey, reducer: Reducer) => void
  remove: (key: StateSchemeKey) => void
}

export interface ReduxStoreWithManager extends EnhancedStore<StateScheme> {
  reducerManager: ReducerManager
}
