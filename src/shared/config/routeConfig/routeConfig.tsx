import { type RouteProps } from 'react-router-dom'
import { HomePage } from 'pages/Home'
import { AboutPage } from 'pages/About'
import { Profile } from 'pages/Profile'
import { Article } from 'pages/Article'
import { NotFound } from 'pages/NotFound'

type AppRoutesProps = RouteProps & {
  authOnly?: boolean
}

export enum AppRoutes {
  ABOUT = 'about',
  HOME = 'home',
  PROFILE = 'profile',
  ARTICLE = 'article',
  PAGE_NOT_FOUND = 'notfound'
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.HOME]: '/',
  [AppRoutes.PROFILE]: '/profile',
  [AppRoutes.ARTICLE]: '/article',
  [AppRoutes.PAGE_NOT_FOUND]: '*'
}

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
  [AppRoutes.HOME]: {
    path: RoutePath.home,
    element: <HomePage />
  },
  [AppRoutes.ABOUT]: {
    path: RoutePath.about,
    element: <AboutPage />
  },
  [AppRoutes.PROFILE]: {
    path: RoutePath.profile,
    element: <Profile/>,
    authOnly: true
  },
  [AppRoutes.ARTICLE]: {
    path: RoutePath.article,
    element: <Article/>
  },
  [AppRoutes.PAGE_NOT_FOUND]: {
    path: RoutePath.notfound,
    element: <NotFound/>
  }
}
