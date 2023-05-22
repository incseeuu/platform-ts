import React from 'react';
import './styles/index.scss'
import {classNames} from "shared/lib/classNames";
import AppRouter from "app/providers/routing/AppRouter";
import {Navbar} from "widgets/Navbar";
import {useTheme} from "app/providers/ThemeProvider";
import {Sidebar} from "widgets/Sidebar";


const App = () => {

    const {theme} = useTheme()

    return (
        <div className={classNames('app', {} , [theme])}>
            <header>
                {/*<Navbar/>*/}
            </header>
            <main>
                <Sidebar/>
                <div className={classNames('content')}>
                    <AppRouter/>
                </div>
            </main>
        </div>
    );
};

export default App;