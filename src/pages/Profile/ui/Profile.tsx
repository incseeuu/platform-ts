import { classNames } from 'shared/lib/classNames/classNames'
import s from './styles.module.scss'
import { useTranslation } from 'react-i18next'

interface Props {
  className?: string
}

const Profile = ({ className }: Props) => {
  const { t } = useTranslation()

  return (
        <div className={classNames(s.container, {}, [className as string])}>
          {t('Профиль')}
        </div>
  )
}

export default Profile
