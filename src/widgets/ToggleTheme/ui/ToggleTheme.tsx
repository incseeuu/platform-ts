import { Theme, useTheme } from 'app/providers/ThemeProvider'
import LightTheme from 'shared/assets/light.svg'
import DarkTheme from 'shared/assets/dark.svg'
import { Button, ButtonTheme } from 'shared/ui'
import { memo } from 'react'

export const ToggleTheme = memo(() => {
  const { theme, toggleTheme } = useTheme()

  return (
        <Button
            theme={ButtonTheme.CLEAR}
            // className={classNames(s.toggleTheme, {}, [className])}
            onClick={toggleTheme}>
            {theme === Theme.LIGHT ? <DarkTheme /> : <LightTheme/>}
        </Button>
  )
})
