import { fireEvent, screen } from '@testing-library/react'
import { Sidebar } from './Sidebar'
import { withTranslation } from 'react-i18next'
import { ProviderForTest } from 'shared/lib/test/providerForTest'

describe('sidebar test', () => {
  test('sidebar test svg', () => {
    const SidebarWithTranslation = withTranslation()(Sidebar)
    ProviderForTest(<SidebarWithTranslation />)

    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
  })

  test('toggle sidebar', () => {
    const SidebarWithTranslation = withTranslation()(Sidebar)
    ProviderForTest(<SidebarWithTranslation />)
    const toggleButton = screen.getByTestId('sidebar-toggle')
    expect(screen.getByTestId('sidebar-toggle')).toBeInTheDocument()
    fireEvent.click(toggleButton)
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
  })
})
