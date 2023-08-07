import HomeSVG from 'shared/assets/home.svg'
import AboutSVG from 'shared/assets/about.svg'
import ArticleSVG from 'shared/assets/article.svg'
import ProfileSVG from 'shared/assets/profile.svg'
import { type FC, type SVGProps } from 'react'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'

export interface SidebarItemInterface {
  path: string
  title: string
  Icon: FC<SVGProps<SVGSVGElement>>
}

export const sidebarItemsList: SidebarItemInterface[] = [
  {
    path: RoutePath.home,
    title: 'Home',
    Icon: HomeSVG
  },
  {
    path: RoutePath.profile,
    title: 'Profile',
    Icon: ProfileSVG
  },
  {
    path: RoutePath.article,
    title: 'Article',
    Icon: ArticleSVG
  },
  {
    path: RoutePath.about,
    title: 'About',
    Icon: AboutSVG
  }
]
