import { Suspense } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import AppRouter from 'app/providers/routing/AppRouter'
import { useTheme } from 'app/providers/ThemeProvider'
import { Sidebar } from 'widgets/Sidebar'
import { Login } from 'widgets/Login'

const App = () => {
  return (
        <div className={classNames('app', {}, [])}>

            <header>
                {/* <Navbar/> */}

            </header>
            <main>
                <Suspense fallback={''}>
                    <Sidebar/>
                  <div className={classNames('content')}>
                    <AppRouter/>
                  </div>
                  <Login/>
                </Suspense>
            </main>

        </div>
  )
}

export default App
