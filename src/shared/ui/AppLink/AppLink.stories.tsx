import type { Meta, StoryObj } from '@storybook/react'
import { AppLink, AppLinkTheme } from 'shared/ui'
import HomeSVG from 'shared/assets/home.svg'

const meta = {
  title: 'shared/AppLink',
  component: AppLink,
  tags: ['autodocs']

} satisfies Meta<typeof AppLink>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    title: 'Primary',
    Icon: HomeSVG,
    to: '/'
  }
}

export const Secondary: Story = {
  args: {
    children: 'Secondary',
    Icon: HomeSVG,
    to: '/',
    theme: AppLinkTheme.SECONDARY
  }
}

export const Active: Story = {
  args: {
    children: 'Active',
    Icon: HomeSVG,
    className: 'active',
    to: '/',
    theme: AppLinkTheme.SECONDARY
  }
}
