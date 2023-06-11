import { classNames } from 'shared/lib/classNames/classNames'
import s from './styles.module.scss'
import { useTranslation } from 'react-i18next'

interface Props {
  className?: string
}

export const NotFound = ({ className }: Props) => {
  const { t } = useTranslation()
  return (
        <div className={classNames(s.container, {}, [className as string])}>
            <h1>{t('Страницы не существует')}</h1>
        </div>
  )
}
