import React, {FC} from 'react';
import {classNames} from "shared/lib/classNames";
import s from './styles.module.scss'
import {Link, LinkProps} from "react-router-dom";

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary'
}

interface Props extends LinkProps {
    className?: string
    theme?: AppLinkTheme
    title?: string
}

export const AppLink: FC<Props> = (props) => {

    const {
        className,
        theme = AppLinkTheme.PRIMARY,
        to,
        children,
        title,
        ...restProps
    } = props

    return (
        <Link
            to={to}
            className={classNames(s.container, {}, [s[className], s[theme]])}
            {...restProps}
        >
            <div className={s.link}>
                <div>{children}</div>
                <span>{title}</span>
            </div>
        </Link>
    );
};