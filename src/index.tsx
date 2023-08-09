import { createRoot } from 'react-dom/client'
import App from './app/App'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'app/providers/ThemeProvider'
import 'shared/config/i18n/i18n'
import './app/styles/index.scss'
import { ErrorBoundary } from 'react-error-boundary'
import { PageError } from 'widgets/PageError'
import { Suspense } from 'react'
import { StoreProvider } from 'app/providers/StoreProvider'

const root = document.getElementById('root')

createRoot(root as HTMLElement).render(
  <BrowserRouter>
    <StoreProvider>
      <ErrorBoundary fallback={<Suspense><PageError/></Suspense>}>
        <ThemeProvider>
          <App/>
        </ThemeProvider>
      </ErrorBoundary>
    </StoreProvider>
  </BrowserRouter>
)
