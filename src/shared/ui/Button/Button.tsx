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
}

export const Button = memo((props: Props) => {
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
})
