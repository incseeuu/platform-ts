import { render, screen } from '@testing-library/react'
import { Button, ButtonTheme } from 'shared/ui'

describe('button test', () => {
  test('text inside button', () => {
    render(<Button theme={ButtonTheme.CLEAR}>TEXT</Button>)
    expect(screen.getByText('TEXT')).toHaveClass('clear')
    screen.debug()
  })
})
