import { classNames } from 'shared/lib/classNames/classNames'
import s from './styles.module.scss'
import { AppLink, AppLinkTheme } from 'shared/ui'
import { useTranslation } from 'react-i18next'

interface Props {
  className?: string

}

export const Navbar = ({ className }: Props) => {
  const { t } = useTranslation()

  return (
        <div className={classNames(s.container, {}, [className as string])}>
            <div className={s.leftSide}>
                <h4>{t('Платформа')}</h4>
            </div>
            <div className={s.rightSide}>
                <AppLink to={'/'} theme={AppLinkTheme.SECONDARY}>{t('Главная')}</AppLink>
                <AppLink to={'/about'} theme={AppLinkTheme.SECONDARY}>{t('О нас')}</AppLink>
            </div>
        </div>
  )
}
