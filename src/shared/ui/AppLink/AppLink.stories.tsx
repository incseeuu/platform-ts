import type { Meta, StoryObj } from '@storybook/react'
import { AppLink, AppLinkTheme } from 'shared/ui'

const meta = {
  title: 'shared/AppLink',
  component: AppLink,
  tags: ['autodocs']

} satisfies Meta<typeof AppLink>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: 'Primary',
    to: '/'
  }
}

export const Secondary: Story = {
  args: {
    children: 'Secondary',
    to: '/',
    theme: AppLinkTheme.SECONDARY
  }
}

export const Active: Story = {
  args: {
    children: 'Active',
    className: 'active',
    to: '/',
    theme: AppLinkTheme.SECONDARY
  }
}
