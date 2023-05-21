import React, {ButtonHTMLAttributes, FC} from 'react';
import {classNames} from "shared/lib/classNames";
import s from './styles.module.scss'

export enum ButtonTheme {
    CLEAR = 'clear'
}

interface Props extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string
    theme?: ButtonTheme
}

export const Button: FC<Props> = (props) => {

    const {className,
        children,
        theme,
        ...restProps} = props


    return (
        <button
            className={classNames(s.btn, {}, [className, s[theme]])}
            {...restProps}
        >
            {children}
        </button>
    );
};