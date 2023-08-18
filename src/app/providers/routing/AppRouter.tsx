import { memo, Suspense, useMemo } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routeConfig } from 'shared/config/routeConfig/routeConfig'
import { PageLoader } from 'widgets/PageLoader/ui/PageLoader'
import { useSelector } from 'react-redux'
import { getUserData } from 'entities.entites/User'

const AppRouter = () => {
  const userData = useSelector(getUserData)

  const routes = useMemo(() => {
    return Object.values(routeConfig).filter(el => {
      return !(el.authOnly && !userData)
    })
  }, [userData])

  return (
        <Suspense fallback={<PageLoader/>}>
            <Routes>
                {routes.map(({ element, path }) => (
                    <Route key={path} path={path} element={element} />
                ))}
            </Routes>
        </Suspense>
  )
}

export default memo(AppRouter)
