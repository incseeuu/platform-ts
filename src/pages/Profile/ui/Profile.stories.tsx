import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/themeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { Profile } from 'pages/Profile'

const meta = {
  title: 'pages/Profile',
  component: Profile,
  tags: ['autodocs']

} satisfies Meta<typeof Profile>

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
