import type { Meta, StoryObj } from '@storybook/react'

import { LoginForm } from './LoginForm'
import { StoreDecorator } from 'shared/config/storybook/storeDecorator'

const meta = {
  title: 'features/LoginForm',
  component: LoginForm,
  tags: ['autodocs']

} satisfies Meta<typeof LoginForm>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {

  },
  decorators: [
    (Story) => StoreDecorator({
      authorization: { login: 'admin', password: '123', errorMessage: null, isLoading: false }
    })(Story)
  ]
}

export const IsFetching: Story = {
  args: {

  },
  decorators: [
    (Story) => StoreDecorator({
      authorization: { login: 'admin', password: '123', errorMessage: null, isLoading: true }
    })(Story)
  ]
}
