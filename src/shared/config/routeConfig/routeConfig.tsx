import { type RouteProps } from 'react-router-dom'
import { HomePage } from 'pages/Home'
import { AboutPage } from 'pages/About'
import { Profile } from 'pages/Profile'
import { Article } from 'pages/Article'
import { NotFound } from 'pages/NotFound'

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

export const routeConfig: Record<AppRoutes, RouteProps> = {
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
    element: <Profile/>
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
