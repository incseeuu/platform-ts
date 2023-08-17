import type { Meta, StoryObj } from '@storybook/react'

import { CountrySelect } from './CountrySelect'

const meta = {
  title: 'entity/CountrySelect',
  component: CountrySelect,
  tags: ['autodocs']

} satisfies Meta<typeof CountrySelect>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {

  }
}
