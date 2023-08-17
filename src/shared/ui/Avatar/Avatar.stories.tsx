import type { Meta, StoryObj } from '@storybook/react'

import { Avatar } from './Avatar'

const meta = {
  title: 'shared/Avatar',
  component: Avatar,
  tags: ['autodocs']

} satisfies Meta<typeof Avatar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    src: 'https://avatars.githubusercontent.com/u/82669957?v=4',
    alt: 'Avatar'
  }
}
