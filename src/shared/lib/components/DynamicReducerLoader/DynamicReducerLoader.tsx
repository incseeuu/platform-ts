import { type ReactElement, useEffect } from 'react'
import { useStore } from 'react-redux'
import { type ReduxStoreWithManager } from 'app/providers/StoreProvider'
import { useAppDispatch } from 'app/providers/StoreProvider/config/store'
import { type Reducer } from '@reduxjs/toolkit'
import { type StateSchemeKey } from 'app/providers/StoreProvider/config/stateScheme'

export type ReducersListForLoader = {
  [name in StateSchemeKey]?: Reducer
}

type ReducersListEntries = [StateSchemeKey, Reducer]

interface Props {
  children: ReactElement<any, any>
  reducers: ReducersListForLoader
  isRemoveAfterUnmount?: boolean
}

export const DynamicReducerLoader = ({ children, reducers, isRemoveAfterUnmount = true }: Props) => {
  const store = useStore() as ReduxStoreWithManager
  const dispatch = useAppDispatch()

  useEffect(() => {
    Object.entries(reducers).forEach(([name, reducer]: ReducersListEntries) => {
      store.reducerManager.add(name, reducer)
      dispatch({ type: `@INIT ${name} reducer` })
    })

    return () => {
      if (isRemoveAfterUnmount) {
        Object.entries(reducers).forEach(([name, _]: ReducersListEntries) => {
          store.reducerManager.remove(name)
          dispatch({ type: `@REMOVE ${name} reducer` })
        })
      }
    }
    // eslint-disable-next-line
  }, [])

  return children
}
