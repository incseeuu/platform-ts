import type { Meta, StoryObj } from '@storybook/react'

import { Modal } from 'shared/ui'
import { ThemeDecorator } from 'shared/config/storybook/themeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

const meta = {
  title: 'shared/Modal',
  component: Modal,
  tags: ['autodocs']

} satisfies Meta<typeof Modal>

export default meta
type Story = StoryObj<typeof meta>

export const Dark: Story = {
  args: {
    opened: true,
    children: 'Dark'
  }
}

export const Light: Story = {
  args: {
    opened: true,
    children: 'Light'
  },
  decorators: [(Story) => ThemeDecorator(Theme.LIGHT)(Story)]
}
