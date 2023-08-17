import type { Meta, StoryObj } from '@storybook/react'

import { Select } from './Select'

const meta = {
  title: 'shared/Select',
  component: Select,
  tags: ['autodocs']

} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'choose one',
    options: [
      { value: '1212', content: 'hello world' },
      { value: '1212121', content: 'hello space' },
      { value: '121122', content: 'hello mars' }
    ]
  }
}
