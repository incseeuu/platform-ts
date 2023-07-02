import { classNames } from 'shared/lib'
import s from './styles.module.scss'

export enum TextTheme {
  DEFAULT = 'default',
  ERROR = 'error',
  PRIMARY = 'primary'
}

interface Props {
  className?: string
  title?: string | null
  text?: string | null
  theme?: TextTheme
}

export const Text = (props: Props) => {
  const {
    className,
    text,
    title,
    theme = TextTheme.DEFAULT
  } = props

  return (
        <div className={classNames(s.container, {}, [s[theme], className as string])}>
          {title && <p className={s.title}>{title}</p>}
          {text && <p className={s.text}>{text}</p>}
        </div>
  )
}
