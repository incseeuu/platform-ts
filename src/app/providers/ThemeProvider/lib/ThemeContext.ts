import { createContext } from 'react'

export enum Theme {
  DARK = 'dark',
  LIGHT = 'light'
}

export interface ThemeContextType {
  theme?: Theme
  setTheme?: (newTheme: Theme) => void
}

export const ThemeContext = createContext<ThemeContextType>({})

export const LOCAL_STORAGE_THEME_KEY = 'theme'
