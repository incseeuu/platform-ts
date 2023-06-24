import { type ReactNode, useEffect, useMemo, useState } from 'react'
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from '../lib/ThemeContext'

interface Props {
  children: ReactNode
}

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme ?? Theme.LIGHT

export const ThemeProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme)

  useEffect(() => {
    document.body.className = theme
  }, [theme])

  const defaultValue = useMemo(() => ({
    theme,
    setTheme
  }), [theme])

  return (
        <ThemeContext.Provider value={defaultValue}>
            {children}
        </ThemeContext.Provider>
  )
}
