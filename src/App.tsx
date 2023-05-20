import React, {Suspense} from 'react';
import './index.scss'
import {Link, Route, Routes} from "react-router-dom";
import {AboutAsyncPage} from "./page/About/About.async";
import {HomeAsyncPage} from "./page/Home/Home.async";

const App = () => {

    return (
        <div className='app'>
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