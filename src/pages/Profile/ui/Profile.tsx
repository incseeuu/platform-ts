import { classNames } from 'shared/lib/classNames/classNames'
import s from './styles.module.scss'
import { useTranslation } from 'react-i18next'
import {
  DynamicReducerLoader,
  type ReducersListForLoader
} from 'shared/lib/components/DynamicReducerLoader/DynamicReducerLoader'
import { profileReducer } from 'entities.entites/Profile'

const initialReducers: ReducersListForLoader = {
  profile: profileReducer
}

interface Props {
  className?: string
}

const Profile = ({ className }: Props) => {
  const { t } = useTranslation()

  return (
        <DynamicReducerLoader reducers={initialReducers} isRemoveAfterUnmount>
          <div className={classNames(s.container, {}, [className as string])}>
            {t('Профиль')}
          </div>
        </DynamicReducerLoader>
  )
}

export default Profile
