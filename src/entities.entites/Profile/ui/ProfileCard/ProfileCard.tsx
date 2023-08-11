import { classNames } from 'shared/lib'
import { useTranslation } from 'react-i18next'
import s from './styles.module.scss'
import { useSelector } from 'react-redux'
import { profileDataSelector } from '../../model/selectors/profileDataSelector'

interface Props {
  className?: string
}

export const ProfileCard = ({ className }: Props) => {
  const profileData = useSelector(profileDataSelector)

  const { t } = useTranslation()

  return (
        <div className={classNames(s.container, {}, [className])}>

        </div>
  )
}
