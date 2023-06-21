import { type ButtonHTMLAttributes, type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import s from './styles.module.scss'

export enum ButtonTheme {
  CLEAR = 'clear',
  OUTLINE = 'outline',

}

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: ButtonTheme
}

export const Button: FC<Props> = (props) => {
  const {
    className,
    children,
    theme,
    ...restProps
  } = props

  return (
        <button
            className={classNames(s.btn, {}, [className as string, s[theme as string]])}
            {...restProps}
        >
            {children}
        </button>
  )
}
