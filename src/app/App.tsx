import React, {Suspense} from 'react';
import './styles/index.scss'
import {Link, Route, Routes} from "react-router-dom";
import {Theme} from "./providers/ThemeProvider/lib/ThemeContext";
import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "shared/lib/classNames";
import {HomePage} from "pages/Home";
import {AboutPage} from "pages/About";


const App = () => {

    const {theme,toggleTheme} = useTheme()

    return (
        <div className={classNames('app', {} , [theme])}>
            <button onClick={toggleTheme}>{theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT}</button>
            <Link to={'/'}>Home</Link>
            <Link to={'/about'}>About</Link>
            <Suspense fallback={<h1>Loading...</h1>}>
                <Routes>
                    <Route path={'/'} element={<HomePage/>}/>
                    <Route path={'/about'} element={<AboutPage/>}/>
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;