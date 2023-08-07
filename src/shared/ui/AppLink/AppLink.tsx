import { type FC, type SVGProps } from 'react'
import s from './styles.module.scss'
import { Link, type LinkProps } from 'react-router-dom'
import { classNames } from 'shared/lib'

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary'
}

interface Props extends LinkProps {
  className?: string
  theme?: AppLinkTheme
  title?: string
  Icon: FC<SVGProps<SVGSVGElement>>
}

export const AppLink: FC<Props> = (props) => {
  const {
    className,
    theme = AppLinkTheme.PRIMARY,
    to,
    children,
    Icon,
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
                 <Icon />
                <span>{title}</span>
            </div>
        </Link>
  )
}
