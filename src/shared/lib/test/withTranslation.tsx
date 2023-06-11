import { I18nextProvider } from 'react-i18next'
import { type ReactNode } from 'react'
import i18nForTest from 'shared/config/i18n/i18nForTest'
import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'

export const WithTranslation = (component: ReactNode) => {
  return render(
    <BrowserRouter>
      <I18nextProvider i18n={i18nForTest}>
        {component}
      </I18nextProvider>
    </BrowserRouter>
  )
}
