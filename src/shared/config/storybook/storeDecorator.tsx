import { StoreProvider } from 'app/providers/StoreProvider'
import { type StateScheme } from 'app/providers/StoreProvider/config/stateScheme'
import { type StoryFn } from '@storybook/react'
import { type DeepPartial } from '@reduxjs/toolkit'

export const StoreDecorator = (state: DeepPartial<StateScheme>) => (Story: StoryFn) => (
  <StoreProvider initialState={state as StateScheme}>
    <Story/>
  </StoreProvider>
)
