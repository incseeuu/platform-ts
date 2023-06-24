import { I18nextProvider } from 'react-i18next'
import { type ReactNode } from 'react'
import i18nForTest from 'shared/config/i18n/i18nForTest'
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { StoreProvider } from 'app/providers/StoreProvider'
import { type DeepPartial } from '@reduxjs/toolkit'
import { type StateScheme } from 'app/providers/StoreProvider/config/stateScheme'

export const ProviderForTest = (children: ReactNode, initialState?: DeepPartial<StateScheme>) => {
  return render(
    <StoreProvider initialState={initialState}>
      <MemoryRouter>
        <I18nextProvider i18n={i18nForTest}>
          {children}
        </I18nextProvider>
      </MemoryRouter>
    </StoreProvider>
  )
}
