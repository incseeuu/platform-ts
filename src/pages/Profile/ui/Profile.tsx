import { classNames } from 'shared/lib/classNames/classNames'
import s from './styles.module.scss'
import {
  DynamicReducerLoader,
  type ReducersListForLoader
} from 'shared/lib/components/DynamicReducerLoader/DynamicReducerLoader'
import { fetchProfileDataThunk, ProfileCard, profileReducer } from 'entities.entites/Profile'
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

  useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      dispatch(fetchProfileDataThunk())
    }
  }, [dispatch])

  return (
        <DynamicReducerLoader reducers={initialReducers}>
          <div className={classNames(s.container, {}, [className as string])}>
            <ProfileCard/>
          </div>
        </DynamicReducerLoader>
  )
}

export default Profile
