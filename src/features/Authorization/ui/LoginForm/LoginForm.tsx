import s from './styles.module.scss'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib'
import { Button, FetchAlert, Input } from 'shared/ui'
import { useSelector } from 'react-redux'
import { memo, useCallback } from 'react'
import { authorizationActions, authorizationReducer } from '../../model/slice/Authorization'
import { getAuthorizationState } from '../../model/selectors/getAuthorizationState'
import { type AuthorizationForm, authorizationThunk } from '../../model/services/authorizationThunk'
import { Text, TextTheme } from 'shared/ui/Text/Text'
import {
  DynamicReducerLoader,
  type ReducersListForLoader
} from 'shared/lib/components/DynamicReducerLoader/DynamicReducerLoader'
import { useAppDispatch } from 'app/providers/StoreProvider'

const initialReducers: ReducersListForLoader = {
  authorization: authorizationReducer
}

export interface Props {
  className?: string
  onShowModal: (show: boolean) => void
}

const LoginForm = memo(({ className, onShowModal }: Props) => {
  const { t } = useTranslation()
  const authorization = useSelector(getAuthorizationState)
  const dispatch = useAppDispatch()

  const onChangeLogin = useCallback(
    (value: string) => {
      dispatch(authorizationActions.setLogin(value))
    },
    [dispatch]
  )

  const onChangePassword = useCallback(
    (value: string) => {
      dispatch(authorizationActions.setPassword(value))
    },
    [dispatch]
  )

  const onLoginHandler = useCallback(async () => {
    const argForThunk = {
      username: authorization?.login,
      password: authorization?.password
    }

    const result = await dispatch(authorizationThunk(argForThunk as AuthorizationForm))

    if (result.meta.requestStatus === 'fulfilled') {
      onShowModal(false)
    }
  }, [authorization?.login, authorization?.password, dispatch, onShowModal])

  const onLoginKeyboardHandler = useCallback((e: React.KeyboardEvent) => { e.key === 'Enter' && onLoginHandler() }, [onLoginHandler])

  return (
    <DynamicReducerLoader reducers={initialReducers}>
    <div className={classNames(s.container, {}, [className as string])}>
      <Text title={t('Форма авторизации') } theme={TextTheme.PRIMARY}/>
      <Input
        placeholder={'Login'}
        value={authorization?.login}
        onChange={onChangeLogin}
        onKeyDown={onLoginKeyboardHandler}
        autofocus
      />
      <Input
        placeholder={'Password'}
        value={authorization?.password}
        onChange={onChangePassword}
        onKeyDown={onLoginKeyboardHandler}
        type={'password'}
      />
      <Button disabled={authorization?.isLoading} onKeyDown={onLoginHandler} onClick={onLoginHandler}>{t('Войти')}</Button>
      {authorization?.errorMessage && <FetchAlert errorMessage={authorization.errorMessage} />}
    </div>
    </DynamicReducerLoader>
  )
})

export default LoginForm
