import { classNames } from 'shared/lib/classNames'
import s from './styles.module.scss'
import { ToggleTheme } from 'widgets/ToggleTheme'
import { AppLink, AppLinkTheme } from 'shared/ui'
import Logo from 'shared/assets/logo.svg'
import Collapse from 'shared/assets/collapse.svg'
import HomeSVG from 'shared/assets/home.svg'
import AboutSVG from 'shared/assets/about.svg'
import ArticleSVG from 'shared/assets/article.svg'
import ProfileSVG from 'shared/assets/profile.svg'
import { useLocation } from 'react-router-dom'
import { ToggleLanguage } from 'widgets/ToggleLanguage'
import { useTranslation } from 'react-i18next'
import { useState } from 'react'

interface Props {
  className?: string
}

export const Sidebar = ({ className }: Props) => {
  const { t } = useTranslation()

  const { pathname } = useLocation()

  const [collapsed, setCollapsed] = useState<boolean>(false)

  return (
        <div
            className={classNames(
              s.container,
              { [s.collapsed]: collapsed },
              [className as string])
            }>
            <div className={s.header}>
                <div className={s.logoContainer}>
                    <Logo className={s.logo}/>
                </div>
                <div className={classNames(s.links, { [s.unlinks]: collapsed }, [])}>
                    <AppLink
                        className={pathname === '/' ? 'active' : ''}
                        to={'/'}
                        theme={AppLinkTheme.PRIMARY}
                        title={t('Home')}
                    ><HomeSVG/></AppLink>
                    <AppLink
                        className={pathname === '/profile' ? 'active' : ''}
                        to={'/profile'}
                        theme={AppLinkTheme.PRIMARY}
                        title={t('Profile')}
                    ><ProfileSVG/></AppLink>
                    <AppLink
                        className={pathname === '/article' ? 'active' : ''}
                        to={'/article'}
                        theme={AppLinkTheme.PRIMARY}
                        title={t('Article')}
                    ><ArticleSVG/></AppLink>
                    <AppLink
                        className={pathname === '/about' ? 'active' : ''}
                        to={'/about'}
                        theme={AppLinkTheme.PRIMARY}
                        title={t('About')}
                    ><AboutSVG/></AppLink>
                </div>
            </div>
            <div className={classNames(
              s.collapseBtnContainer,
              { [s.collapsedBtnContainerTransform]: collapsed },
              [])}
            >
                <button
                    className={classNames(s.collapseBtn, { [s.collapsedBtnTransform]: collapsed }, [])}
                    onClick={() => { setCollapsed(prevState => !prevState) }}
                ><Collapse/></button>
            </div>
            <div className={classNames(s.switchers, {}, [])}>
                <ToggleTheme/>
                <ToggleLanguage className={s.lang}/>
            </div>
        </div>
  )
}
