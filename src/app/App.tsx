import { Suspense } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import AppRouter from 'app/providers/routing/AppRouter'
import { Sidebar } from 'widgets/Sidebar'
import { LoginModal } from 'features/Authorization'

const App = () => {
  return (
        <div className={classNames('app', {}, [])}>

            <header>
            </header>
            <main>
                <Suspense fallback={''}>
                    <Sidebar/>
                  <div className={classNames('content')}>
                    <AppRouter/>
                  </div>
                  <LoginModal/>
                </Suspense>
            </main>

        </div>
  )
}

export default App
