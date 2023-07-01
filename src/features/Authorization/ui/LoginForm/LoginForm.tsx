import s from './styles.module.scss'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib'
import { Input } from 'shared/ui/Input/Input'
import { Button } from 'shared/ui'
import { useSelector } from 'react-redux'
import { memo, useCallback } from 'react'
import { authorizationActions } from '../../model/slice/Authorization'
import { getAuthorizationState } from '../../model/selectors/getAuthorizationState'
import { type AuthorizationForm, authorizationThunk } from 'features/Authorization/model/services/authorizationThunk'
import { useAppDispatch } from 'app/providers/StoreProvider/config/store'

interface Props {
  className?: string
}

export const LoginForm = memo(({ className }: Props) => {
  const { t } = useTranslation()
  const authorization = useSelector(getAuthorizationState)
  const dispatch = useAppDispatch()

  const onChangeLogin = useCallback((value: string) => {
    dispatch(authorizationActions.setLogin(value))
  }, [dispatch])

  const onChangePassword = useCallback((value: string) => {
    dispatch(authorizationActions.setPassword(value))
  }, [dispatch])

  const onLoginHandler = useCallback(() => {
    const argForThunk = {
      login: authorization?.login,
      password: authorization?.password
    }

    dispatch(authorizationThunk(argForThunk as AuthorizationForm))
  }, [authorization?.login, authorization?.password, dispatch])

  return (
        <div className={classNames(s.container, {}, [className as string])}>
          <Input
            placeholder={'Login'}
            value={authorization?.login}
            onChange={onChangeLogin}
            autofocus

          />
          <Input
            placeholder={'Password'}
            value={authorization?.password}
            onChange={onChangePassword}
            type={'password'}
          />
          <Button onClick={onLoginHandler}>{t('Войти')}</Button>
        </div>
  )
})
