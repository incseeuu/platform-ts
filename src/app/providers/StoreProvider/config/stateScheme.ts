import { type UserSchema } from 'entities.entites/User'
import { type AuthorizationSchema } from 'features/Authorization'
import { type AnyAction, type CombinedState, type EnhancedStore, type Reducer, type ReducersMapObject } from '@reduxjs/toolkit'
import { type ProfileSchema } from 'entities.entites/Profile'

export interface StateScheme {
  user?: UserSchema
  authorization?: AuthorizationSchema
  profile?: ProfileSchema
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
