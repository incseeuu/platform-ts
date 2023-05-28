import { classNames } from 'shared/lib/classNames'
import s from './styles.module.scss'
import { Loader } from 'shared/ui'

interface Props {
  className?: string
}

export const PageLoader = ({ className }: Props) => {
  return (
        <div className={classNames(s.container, {}, [className as string])}>
            <Loader/>
        </div>
  )
}
