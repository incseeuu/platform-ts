import { classNames } from 'shared/lib/classNames'
import s from './styles.module.scss'

interface Props {
  className?: string
}

const Article = ({ className }: Props) => {
  return (
        <div className={classNames(s.container, {}, [className as string])}>
            Article
        </div>
  )
}

export default Article
