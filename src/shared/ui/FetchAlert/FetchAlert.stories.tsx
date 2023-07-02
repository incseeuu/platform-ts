import type { Meta, StoryObj } from '@storybook/react'

import { FetchAlert } from 'shared/ui'

const meta = {
  title: 'shared/FetchAlert',
  component: FetchAlert,
  tags: ['autodocs']

} satisfies Meta<typeof FetchAlert>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    errorMessage: 'something went wrong'
  }
}
