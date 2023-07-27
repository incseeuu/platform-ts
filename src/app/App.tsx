import { Suspense, useEffect } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import AppRouter from 'app/providers/routing/AppRouter'
import { Sidebar } from 'widgets/Sidebar'
import { LoginModal } from 'features/Authorization'
import { useAppDispatch } from 'app/providers/StoreProvider/config/store'
import { getUserData, userActions } from 'entities.entites'
import { useSelector } from 'react-redux'
import { Button, ButtonTheme } from 'shared/ui'
import { useTranslation } from 'react-i18next'

const App = () => {
  const { t } = useTranslation()
  const userData = useSelector(getUserData)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(userActions.initUserData())
  }, [dispatch])

  const onLogOut = () => {
    dispatch(userActions.clearUserData())
  }

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
                  {userData
                    ? <div>
                    <Button theme={ButtonTheme.OUTLINE}
                            onClick={onLogOut}>{t('Выйти')}
                    </Button></div>
                    : <LoginModal/>}
                </Suspense>
            </main>

        </div>
  )
}

export default App
