import type { Meta, StoryObj } from '@storybook/react'

import { Button, ButtonTheme } from './Button'

const meta = {
  title: 'shared/Button',
  component: Button,
  tags: ['autodocs']

} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Default'
  }
}

export const Clear: Story = {
  args: {
    children: 'Clear',
    theme: ButtonTheme.CLEAR
  }
}

export const Outline: Story = {
  args: {
    children: 'Outline',
    theme: ButtonTheme.OUTLINE
  }
}

export const Disabled: Story = {
  args: {
    children: 'Disabled',
    disabled: true
  }
}
