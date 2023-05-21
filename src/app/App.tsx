import React from 'react';
import './styles/index.scss'
import {Link} from "react-router-dom";
import {Theme} from "./providers/ThemeProvider/lib/ThemeContext";
import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "shared/lib/classNames";
import AppRouter from "app/providers/routing/AppRouter";


const App = () => {

    const {theme,toggleTheme} = useTheme()

    return (
        <div className={classNames('app', {} , [theme])}>
            <button onClick={toggleTheme}>{theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT}</button>
            <Link to={'/'}>Home</Link>
            <Link to={'/about'}>About</Link>
            <AppRouter/>
        </div>
    );
};

export default App;