import s from './styles.module.scss'
import { useTranslation } from 'react-i18next'
import { Input } from 'shared/ui'
import { useSelector } from 'react-redux'
import {
  profileActions,
  profileReadonlySelector,
  profileUiDataSelector,
  profileValidateErrors
} from 'entities.entites/Profile'
import { useAppDispatch } from 'app/providers/StoreProvider'
import { CurrencySelect } from 'entities.entites/Currency'
import { CountrySelect } from 'entities.entites/Country/ui/CountrySelect/CountrySelect'
import { Text, TextTheme } from 'shared/ui/Text/Text'

export const BodyCard = () => {
  const uiProfileData = useSelector(profileUiDataSelector)
  const readonly = useSelector(profileReadonlySelector)
  const validateErrors = useSelector(profileValidateErrors)
  const dispatch = useAppDispatch()
  const { t } = useTranslation()

  const onChangeNameHandler = (value: string) => {
    dispatch(profileActions.changeUiData({ first: value }))
  }
  const onChangeSurnameHandler = (value: string) => {
    dispatch(profileActions.changeUiData({ lastname: value }))
  }
  const onChangeUsernameHandler = (value: string) => {
    dispatch(profileActions.changeUiData({ username: value }))
  }
  const onChangeAgeHandler = (value: string) => {
    if (/^\d*$/.test(value)) {
      dispatch(profileActions.changeUiData({ age: Number(value) }))
    }
  }
  const onChangeAvatarLinkHandler = (value: string) => {
    dispatch(profileActions.changeUiData({ avatar: value }))
  }
  const onChangeCityHandler = (value: string) => {
    dispatch(profileActions.changeUiData({ city: value }))
  }

  const onChangeCurrencyHandler = (value: string) => {
    dispatch(profileActions.changeUiData({ currency: value }))
  }

  const onChangeCountryHandler = (value: string) => {
    dispatch(profileActions.changeUiData({ country: value }))
  }

  return (
    <div>
      {validateErrors?.length
        ? validateErrors.map((el, index) =>
          <Text key={index} theme={TextTheme.ERROR} text={el}/>)
        : null}
      <div className={s.body}>
        <label className={s.bodyItem}>{t('Name')}:
          <Input
            className={s.bodyInput}
            readonly={readonly}
            value={uiProfileData?.first}
            onChange={onChangeNameHandler}
          />
        </label>
        <label className={s.bodyItem}>{t('Nickname')}:
          <Input
            className={s.bodyInput}
            readonly={readonly}
            value={uiProfileData?.username}
            onChange={onChangeUsernameHandler}
          />
        </label>
        <label className={s.bodyItem}>{t('Surname')}:
          <Input
            className={s.bodyInput}
            readonly={readonly}
            value={uiProfileData?.lastname}
            onChange={onChangeSurnameHandler}
          />
        </label>
        <label className={s.bodyItem}>{t('Avatar link')}:
          <Input
            className={s.bodyInput}
            readonly={readonly}
            value={uiProfileData?.avatar}
            onChange={onChangeAvatarLinkHandler}
          />
        </label>
        <label className={s.bodyItem}>{t('Age')}:
          <Input
            className={s.bodyInput}
            readonly={readonly}
            value={uiProfileData?.age}
            onChange={onChangeAgeHandler}
          />
        </label>
        <CurrencySelect
          value={uiProfileData?.currency}
          onChange={onChangeCurrencyHandler}
          readonly={readonly}
        />
        <label className={s.bodyItem}>{t('City')}:
          <Input
            className={s.bodyInput}
            readonly={readonly}
            value={uiProfileData?.city}
            onChange={onChangeCityHandler}
          />
        </label>
        <CountrySelect
          readonly={readonly}
          onChange={onChangeCountryHandler}
          value={uiProfileData?.country}
        />
      </div>
    </div>
  )
}
