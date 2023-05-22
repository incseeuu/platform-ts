import React, {useState} from 'react';
import {classNames} from "shared/lib/classNames";
import s from './styles.module.scss'
import {ToggleTheme} from "widgets/ToggleTheme";
import {AppLink, AppLinkTheme, Button, ButtonTheme} from "shared/ui";
import Logo from 'shared/assets/logo.svg'
import Collapse from 'shared/assets/collapse.svg'
import HomeSVG from 'shared/assets/home.svg'
import AboutSVG from 'shared/assets/about.svg'
import ArticleSVG from 'shared/assets/article.svg'
import ProfileSVG from 'shared/assets/profile.svg'
import {useLocation} from "react-router-dom";

interface Props {
    className?: string
}

export const Sidebar = ({className}: Props) => {

    const {pathname} = useLocation()

    const [collapsed, setCollapsed] = useState<boolean>(false)

    return (
        <div
            className={classNames(
                s.container,
                {[s.collapsed]: collapsed},
                [className])
            }>
            <div className={s.header}>
                <div className={s.logoContainer}>
                    <Logo className={s.logo}/>
                </div>
                <div className={classNames(s.links, {[s.unlinks]: collapsed}, [])}>
                    <AppLink
                        className={pathname === '/' ? 'active' : ''}
                        to={'/'}
                        theme={AppLinkTheme.PRIMARY}
                        title={'Home'}
                    ><HomeSVG/></AppLink>
                    <AppLink
                        className={pathname === '/profile' ? 'active' : ''}
                        to={'/profile'}
                        theme={AppLinkTheme.PRIMARY}
                        title={'Profile'}
                    ><ProfileSVG/></AppLink>
                    <AppLink
                        className={pathname === '/article' ? 'active' : ''}
                        to={'/article'}
                        theme={AppLinkTheme.PRIMARY}
                        title={'Article'}
                    ><ArticleSVG/></AppLink>
                    <AppLink
                        className={pathname === '/about' ? 'active' : ''}
                        to={'/about'}
                        theme={AppLinkTheme.PRIMARY}
                        title={'About'}
                    ><AboutSVG/></AppLink>
                </div>
            </div>
            <div className={classNames(
                s.collapseBtnContainer,
                {[s.collapsedBtnContainerTransform]: collapsed},
                [])}
            >
                <button
                    className={classNames(s.collapseBtn, {[s.collapsedBtnTransform]: collapsed}, [])}
                    onClick={() => setCollapsed(prevState => !prevState)}
                ><Collapse/></button>
            </div>
            <div className={s.switchers}>
                <ToggleTheme/>
                {/*LanguageSwitcher*/}
            </div>
        </div>
    );
};