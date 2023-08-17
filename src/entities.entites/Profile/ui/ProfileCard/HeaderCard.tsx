import s from './styles.module.scss'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui'
import { useSelector } from 'react-redux'
import {
  profileActions,
  profileReadonlySelector,
  profileUiDataSelector,
  updateProfileData
} from 'entities.entites/Profile'
import { useAppDispatch } from 'app/providers/StoreProvider'
import { ButtonColor } from 'shared/ui/Button/Button'
import { Avatar } from 'shared/ui/Avatar/Avatar'

interface Props {
  className?: string
}

export const HeaderCard = ({ className }: Props) => {
  const readonly = useSelector(profileReadonlySelector)
  const profile = useSelector(profileUiDataSelector)
  const dispatch = useAppDispatch()
  const { t } = useTranslation()

  const onModifiedHandler = () => {
    dispatch(profileActions.toggleReadOnly(false))
  }

  const offModifiedHandler = () => {
    dispatch(profileActions.cancelModified())
    dispatch(profileActions.toggleReadOnly(true))
  }

  const saveUiDataToServer = () => {
    dispatch(updateProfileData())
    dispatch(profileActions.toggleReadOnly(true))
  }

  return (
    <div className={s.header}>
      <Avatar src={profile?.avatar ?? ''} alt={'avatar'} width={'128px'} height={'128px'}/>
      <div className={s.btnContainer}>
        {readonly
          ? <Button onClick={onModifiedHandler}>{t('Change profile')}</Button>
          : <div className={s.saveCancelContainer}>
            <Button
              onClick={saveUiDataToServer}
            >{t('Save')}</Button>
            <Button
              onClick={offModifiedHandler}
              color={ButtonColor.warning}
            >{t('Cancel')}
            </Button>
          </div>}
      </div>
    </div>
  )
}
