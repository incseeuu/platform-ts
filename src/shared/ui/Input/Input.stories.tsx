import type { Meta, StoryObj } from '@storybook/react'

import { Input } from './Input'
import { ThemeDecorator } from 'shared/config/storybook/themeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

const meta = {
  title: 'shared/Input',
  component: Input,
  tags: ['autodocs']

} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Dark: Story = {
  args: {
    placeholder: 'Some text...'
  }
}

export const Light: Story = {
  args: {
    placeholder: 'Some text...'
  },
  decorators: [(Story) => ThemeDecorator(Theme.LIGHT)(Story)]
}
