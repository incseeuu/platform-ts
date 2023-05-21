import React from 'react';
import {classNames} from "shared/lib/classNames";
import s from './styles.module.scss'
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";


interface Props {
    className?: string

}

export const Navbar = ({className}: Props) => {
    return (
        <div className={classNames(s.container, {}, [className])}>
            <div className={s.leftSide}>
                <h4>Platform</h4>
            </div>
            <div className={s.rightSide}>
                <AppLink to={'/'} theme={AppLinkTheme.SECONDARY}>Home</AppLink>
                <AppLink to={'/about'} theme={AppLinkTheme.SECONDARY}>About</AppLink>
            </div>
        </div>
    );
};
