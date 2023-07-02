import type { Preview } from '@storybook/react'
import { StyleDecorator } from 'shared/config/storybook/styleDecorator'
import { ThemeDecorator } from 'shared/config/storybook/themeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { RouterDecorator } from 'shared/config/storybook/routerDeccorator'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    }
  },
  decorators: [
    (Story) => <StyleDecorator><Story/></StyleDecorator>,
    (Story) => ThemeDecorator(Theme.DARK)(Story),
    (Story) => <RouterDecorator><Story/></RouterDecorator>
    // (Story) => <I18nDecorator><Story/></I18nDecorator>
  ]
}
export default preview
