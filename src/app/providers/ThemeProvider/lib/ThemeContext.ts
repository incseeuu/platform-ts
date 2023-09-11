import { createContext } from 'react'

export enum Theme {
  DARK = 'app_dark_theme',
  LIGHT = 'app_light_theme',
  YELLOW = 'app_yellow_theme'
}

export interface ThemeContextType {
  theme?: Theme
  setTheme?: (newTheme: Theme) => void
}

export const ThemeContext = createContext<ThemeContextType>({})

export const LOCAL_STORAGE_THEME_KEY = 'theme'
