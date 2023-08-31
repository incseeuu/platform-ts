import type { Meta, StoryObj } from '@storybook/react'

import { ProfileCard } from './ProfileCard'
import { StoreDecorator } from 'shared/config/storybook/storeDecorator'
import { Country } from 'entities.entites/Country/model/type'
import { Currency } from 'entities.entites/Currency/model/types'

const meta = {
  title: 'entity/ProfileCard',
  component: ProfileCard,
  tags: ['autodocs']

} satisfies Meta<typeof ProfileCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
  decorators: [
    (Story) => StoreDecorator({
      profile: {
        uiProfileData: {
          country: Country.Ukraine,
          username: 'incseeuu',
          lastname: 'Taturevich',
          first: 'Alexandr',
          avatar: 'https://avatars.githubusercontent.com/u/82669957?v=4',
          age: 24,
          city: 'Rostov-na-Donu',
          currency: Currency.RUB
        },
        isLoading: false,
        errorMessage: null,
        readonly: true
      }
    })(Story)
  ]
}
