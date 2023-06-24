import { Provider } from 'react-redux'
import { type ReactNode } from 'react'
import { createReduxStore } from 'app/providers/StoreProvider'
import { type StateScheme } from 'app/providers/StoreProvider/config/stateScheme'

interface Props {
  children?: ReactNode
  initialState?: StateScheme
}

export const StoreProvider = ({ children, initialState }: Props) => {
  const store = createReduxStore(initialState)

  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}
