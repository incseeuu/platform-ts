import React, {Suspense} from 'react';
import './styles/index.scss'
import {Link, Route, Routes} from "react-router-dom";
import {AboutAsyncPage} from "./page/About/About.async";
import {HomeAsyncPage} from "./page/Home/Home.async";
import {Theme} from "./theme/ThemeContext";
import {useTheme} from "./theme/useTheme";
import {classNames} from "./helpers/classNames";


const App = () => {

    const {theme,toggleTheme} = useTheme()

    return (
        <div className={classNames('app', {} , [theme])}>
            <button onClick={toggleTheme}>{theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT}</button>
            <Link to={'/'}>Home</Link>
            <Link to={'/about'}>About</Link>
            <Suspense fallback={<h1>Loading...</h1>}>
                <Routes>
                    <Route path={'/'} element={<HomeAsyncPage/>}/>
                    <Route path={'/about'} element={<AboutAsyncPage/>}/>
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;