import type { Meta, StoryObj } from '@storybook/react'
import { Sidebar } from 'widgets/Sidebar'
import { ThemeDecorator } from 'shared/config/storybook/themeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

const meta = {
  title: 'widgets/Sidebar',
  component: Sidebar,
  tags: ['autodocs']

} satisfies Meta<typeof Sidebar>

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
