import { classNames } from 'shared/lib'
import s from './styles.module.scss'

export enum TextTheme {
  DEFAULT = 'default',
  ERROR = 'error',
  PRIMARY = 'primary'
}

export enum TextAlign {
  START = 'start',
  CENTER = 'center',
  END = 'end'
}

interface Props {
  className?: string
  title?: string | null
  text?: string | null
  theme?: TextTheme
  textAlign?: TextAlign
}

export const Text = (props: Props) => {
  const {
    className,
    text,
    title,
    theme = TextTheme.DEFAULT,
    textAlign = TextAlign.START
  } = props

  return (
        <div className={classNames(s.container, {}, [className, s[theme], s[textAlign]])}>
          {title && <p className={s.title}>{title}</p>}
          {text && <p className={s.text}>{text}</p>}
        </div>
  )
}
