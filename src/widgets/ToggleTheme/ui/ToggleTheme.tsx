import React from 'react';
import {Theme, useTheme} from "app/providers/ThemeProvider";
import LightTheme from "shared/assets/theme-light.svg"
import DarkTheme from "shared/assets/theme-dark.svg"
import {Button, ButtonTheme} from "shared/ui";

interface Props {
    className?: string
}

export const ToggleTheme = ({className}: Props) => {
    const {theme,toggleTheme} = useTheme()


    return (
        <Button
            theme={ButtonTheme.CLEAR}
            // className={classNames(s.toggleTheme, {}, [className])}
            onClick={toggleTheme}>
            {theme === Theme.LIGHT ? <DarkTheme /> : <LightTheme/>}
        </Button>
    );
};