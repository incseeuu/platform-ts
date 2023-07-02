import 'app/styles/index.scss'
import { type Theme, ThemeProvider } from 'app/providers/ThemeProvider'
import { type StoryFn } from '@storybook/react'

export const ThemeDecorator = (theme: Theme) => (Story: StoryFn) => (
  <ThemeProvider>
    <div className={`app ${theme}`}><Story/></div>
  </ThemeProvider>
)
