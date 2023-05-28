import { type FC } from 'react'
import { classNames } from 'shared/lib/classNames'
import s from './styles.module.scss'
import { Link, type LinkProps } from 'react-router-dom'
import { type DefaultTFuncReturn } from 'i18next'

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary'
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
interface Props extends LinkProps {
  className?: string
  theme?: AppLinkTheme
  title?: string | DefaultTFuncReturn
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
            className={classNames(s.container, {}, [s[className as string], s[theme]])}
            {...restProps}
        >
            <div className={s.link}>
                <div>{children}</div>
                <span>{title}</span>
            </div>
        </Link>
  )
}
