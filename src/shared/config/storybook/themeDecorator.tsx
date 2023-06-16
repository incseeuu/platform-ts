import 'app/styles/index.scss'
import { type FC, type ReactNode } from 'react'
import { type Theme } from 'app/providers/ThemeProvider'
import { type StoryFn } from '@storybook/react'

// eslint-disable-next-line react/display-name
export const ThemeDecorator = (theme: Theme) => (Story: StoryFn) => <div className={`app ${theme}`}><Story/></div>