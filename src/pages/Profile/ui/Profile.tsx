import { classNames } from 'shared/lib/classNames/classNames'
import s from './styles.module.scss'
import { useTranslation } from 'react-i18next'
import {
  DynamicReducerLoader,
  type ReducersListForLoader
} from 'shared/lib/components/DynamicReducerLoader/DynamicReducerLoader'
import { fetchProfileDataThunk, profileReducer } from 'entities.entites/Profile'
import { useAppDispatch } from 'app/providers/StoreProvider'
import { useEffect } from 'react'

const initialReducers: ReducersListForLoader = {
  profile: profileReducer
}

interface Props {
  className?: string
}

const Profile = ({ className }: Props) => {
  const dispatch = useAppDispatch()
  const { t } = useTranslation()

  useEffect(() => {
    dispatch(fetchProfileDataThunk())
  }, [dispatch])

  return (
        <DynamicReducerLoader reducers={initialReducers}>
          <div className={classNames(s.container, {}, [className as string])}>
            {t('Профиль')}
          </div>
        </DynamicReducerLoader>
  )
}

export default Profile
