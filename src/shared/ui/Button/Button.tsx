import { type ButtonHTMLAttributes, memo } from 'react'
import { classNames } from 'shared/lib'
import s from './styles.module.scss'

export enum ButtonTheme {
  CONTAINED = 'contained',
  CLEAR = 'clear',
  OUTLINE = 'outline'
}

export enum ButtonColor {
  primary = 'primary',
  secondary = 'secondary',
  warning = 'warning'
}

export enum ButtonSize {
  sm = 'small',
  df = 'default',
}

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: ButtonTheme
  color?: ButtonColor
  size?: ButtonSize
  disabled?: boolean
}

export const Button = memo((props: Props) => {
  const {
    className,
    children,
    theme = ButtonTheme.CONTAINED,
    disabled = false,
    size = ButtonSize.df,
    color = ButtonColor.primary,
    ...restProps
  } = props

  const mods = {
    [s.disabled]: disabled
  }

  return (
        <button
            className={classNames(s.btn, mods, [className, s[color], s[theme], s[size]])}
            disabled={disabled}
            {...restProps}
        >
            {children}
        </button>
  )
})
