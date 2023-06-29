import s from './styles.module.scss'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib'
import { Input } from 'shared/ui/Input/Input'
import { Button } from 'shared/ui'

interface Props {
  className?: string
}

export const LoginForm = ({ className }: Props) => {
  const { t } = useTranslation()

  return (
        <div className={classNames(s.container, {}, [className as string])}>
          <Input placeholder={'Login'} autofocus />
          <Input placeholder={'Password'} type={'password'}/>
          <Button>{t('Войти')}</Button>
        </div>
  )
}
