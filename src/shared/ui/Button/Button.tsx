import { type ButtonHTMLAttributes, memo } from 'react'
import { classNames } from 'shared/lib'
import s from './styles.module.scss'

export enum ButtonTheme {
  CLEAR = 'clear',
  OUTLINE = 'outline',

}

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: ButtonTheme
  disabled?: boolean
}

export const Button = memo((props: Props) => {
  const {
    className,
    children,
    theme,
    disabled = false,
    ...restProps
  } = props

  const mods = {
    [s.disabled]: disabled
  }

  return (
        <button
            className={classNames(s.btn, mods, [className as string, s[theme as string]])}
            disabled={disabled}
            {...restProps}
        >
            {children}
        </button>
  )
})
