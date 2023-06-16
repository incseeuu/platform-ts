import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/themeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { PageLoader } from 'widgets/PageLoader/ui/PageLoader'

const meta = {
  title: 'widgets/PageLoader',
  component: PageLoader,
  tags: ['autodocs']

} satisfies Meta<typeof PageLoader>

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
