import s from './styles.module.scss'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui'

export const PageError = () => {
  const { t } = useTranslation()

  const reloadHandler = () => {
    window.location.reload()
  }

  return (
    <div className={s.container}>
    <h4>{t('Произошла ошибка')}</h4>
      <Button onClick={reloadHandler}>{t('Перезагрузить страницу')}</Button>
    </div>
  )
}
