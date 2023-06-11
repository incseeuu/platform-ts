import { classNames } from 'shared/lib/classNames/classNames'
import s from './styles.module.scss'

interface Props {
  className?: string
}

export const Loader = ({ className }: Props) => {
  return (
        <div className={classNames(s.loader, {}, [className as string])}>
        </div>
  )
}
