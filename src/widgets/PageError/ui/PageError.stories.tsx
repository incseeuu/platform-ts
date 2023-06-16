import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/themeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { PageError } from 'widgets/PageError'

const meta = {
  title: 'widgets/PageError',
  component: PageError,
  tags: ['autodocs']

} satisfies Meta<typeof PageError>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
  }
}

export const Dark: Story = {
  decorators: [
    (Story) => ThemeDecorator(Theme.DARK)(Story)
  ]
}
