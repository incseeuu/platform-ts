import type { Meta, StoryObj } from '@storybook/react'

import { Text, TextTheme } from './Text'
import { ThemeDecorator } from 'shared/config/storybook/themeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

const meta = {
  title: 'shared/Text',
  component: Text,
  tags: ['autodocs']

} satisfies Meta<typeof Text>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: 'Hello i am a title',
    text: 'Hello i am a text'
  }
}

export const Error: Story = {
  args: {
    title: 'Hello i am a title',
    text: 'Hello i am a text',
    theme: TextTheme.ERROR
  }
}

export const OnlyTitle: Story = {
  args: {
    title: 'Hello i am a title'
  }
}

export const OnlyText: Story = {
  args: {
    text: 'Hello i am a text'
  }
}

export const DefaultLight: Story = {
  args: {
    title: 'Hello i am a title',
    text: 'Hello i am a text'
  },
  decorators: [(Story) => ThemeDecorator(Theme.LIGHT)(Story)]
}

export const OnlyTitleLight: Story = {
  args: {
    title: 'Hello i am a title'
  },
  decorators: [(Story) => ThemeDecorator(Theme.LIGHT)(Story)]
}

export const OnlyTextLight: Story = {
  args: {
    text: 'Hello i am a text'
  },
  decorators: [(Story) => ThemeDecorator(Theme.LIGHT)(Story)]
}
