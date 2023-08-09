import { type UserSchema } from 'entities.entites/User'
import { type AuthorizationSchema } from 'features/Authorization'
import { type AnyAction, type CombinedState, type EnhancedStore, type Reducer, type ReducersMapObject } from '@reduxjs/toolkit'
import { type ProfileSchema } from 'entities.entites/Profile'
import { type AxiosInstance } from 'axios'

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

export interface ThunkExtraArg {
  api: AxiosInstance
}

export interface ThunkConfig<T> {
  rejectValue: T
  extra: ThunkExtraArg
}
