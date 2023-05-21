import React from 'react';
import './styles/index.scss'
import {Theme} from "./providers/ThemeProvider/lib/ThemeContext";
import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "shared/lib/classNames";
import AppRouter from "app/providers/routing/AppRouter";
import {Navbar} from "widgets/Navbar";


const App = () => {

    const {theme,toggleTheme} = useTheme()

    return (
        <div className={classNames('app', {} , [theme])}>
            <Navbar/>
            <button onClick={toggleTheme}>{theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT}</button>
            <AppRouter/>
        </div>
    );
};

export default App;