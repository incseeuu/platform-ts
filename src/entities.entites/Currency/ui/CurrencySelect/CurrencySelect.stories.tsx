import type { Meta, StoryObj } from '@storybook/react'

import { CurrencySelect } from './CurrencySelect'

const meta = {
  title: 'entity/CurrencySelect',
  component: CurrencySelect,
  tags: ['autodocs']

} satisfies Meta<typeof CurrencySelect>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {

  }
}
