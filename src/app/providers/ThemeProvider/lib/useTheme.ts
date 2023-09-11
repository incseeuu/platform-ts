import { useContext } from 'react'
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext'

interface UseThemeReturnValue {
  theme: Theme
  toggleTheme: () => void
}

export const useTheme = (): UseThemeReturnValue => {
  const { theme, setTheme } = useContext(ThemeContext)

  const toggleTheme = () => {
    let newTheme: Theme

    switch (theme) {
      case Theme.DARK:
        newTheme = Theme.LIGHT
        break
      case Theme.LIGHT:
        newTheme = Theme.YELLOW
        break
      case Theme.YELLOW:
        newTheme = Theme.DARK
        break
      default:
        newTheme = Theme.LIGHT
    }

    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
    if (setTheme != null) {
      setTheme(newTheme)
    }
  }

  return {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    theme,
    toggleTheme
  }
}
