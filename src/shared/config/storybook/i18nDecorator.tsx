import { I18nextProvider } from 'react-i18next'
import { type FC, type ReactNode, Suspense } from 'react'
import i18n from 'shared/config/i18n/i18n'

export const I18nDecorator: FC<{ children: ReactNode }> = ({ children }) => (
  <I18nextProvider i18n={i18n}>
    <Suspense fallback=''>
      {children}
    </Suspense>
  </I18nextProvider>
)
