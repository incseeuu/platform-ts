import { StoreProvider } from 'app/providers/StoreProvider'
import { type StateScheme } from 'app/providers/StoreProvider/config/stateScheme'
import { type StoryFn } from '@storybook/react'
import { type DeepPartial, type ReducersMapObject } from '@reduxjs/toolkit'
import { authorizationReducer } from 'features/Authorization'
import { type ReducersListForLoader } from 'shared/lib/components/DynamicReducerLoader/DynamicReducerLoader'

const defaultAsyncReducers: ReducersListForLoader = {
  authorization: authorizationReducer
}

export const StoreDecorator = (state: DeepPartial<StateScheme>, asyncReducers?: DeepPartial<ReducersMapObject<StateScheme>>) => (Story: StoryFn) => (
  <StoreProvider initialState={state as StateScheme} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
    <Story/>
  </StoreProvider>
)
