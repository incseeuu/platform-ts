import { Provider } from 'react-redux'
import { type ReactNode } from 'react'
import { createReduxStore } from 'app/providers/StoreProvider'
import { type StateScheme } from 'app/providers/StoreProvider/config/stateScheme'
import { type DeepPartial, type ReducersMapObject } from '@reduxjs/toolkit'

interface Props {
  children?: ReactNode
  initialState?: DeepPartial<StateScheme>
  asyncReducers?: DeepPartial<ReducersMapObject<StateScheme>>
}

export const StoreProvider = ({ children, initialState, asyncReducers }: Props) => {
  const store = createReduxStore(
    initialState as StateScheme,
    asyncReducers as ReducersMapObject<StateScheme>
  )

  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}
