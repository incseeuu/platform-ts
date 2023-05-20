import {useContext} from "react";
import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext} from "app/providers/ThemeProvider/lib/ThemeContext";

interface UseThemeReturnValue {
    theme: Theme,
    toggleTheme: () => void
}

export const useTheme = (): UseThemeReturnValue => {

    const {theme,setTheme} = useContext(ThemeContext)


    const toggleTheme = () => {
        const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
        setTheme(newTheme)
    }

    return {
        theme,
        toggleTheme
    }
}