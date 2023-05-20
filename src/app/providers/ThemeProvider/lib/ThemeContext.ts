import {createContext} from "react";

export enum Theme {
    DARK = 'dark',
    LIGHT = 'light'
}

export interface ThemeContext {
    theme?: Theme
    setTheme?: (newTheme: Theme) => void
}

export const ThemeContext = createContext<ThemeContext>({})

export const LOCAL_STORAGE_THEME_KEY = 'theme'