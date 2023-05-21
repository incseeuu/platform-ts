import React from 'react';
import './styles/index.scss'
import {classNames} from "shared/lib/classNames";
import AppRouter from "app/providers/routing/AppRouter";
import {Navbar} from "widgets/Navbar";
import {useTheme} from "app/providers/ThemeProvider";


const App = () => {

    const {theme} = useTheme()

    return (
        <div className={classNames('app', {} , [theme])}>
            <Navbar/>
            <AppRouter/>
        </div>
    );
};

export default App;