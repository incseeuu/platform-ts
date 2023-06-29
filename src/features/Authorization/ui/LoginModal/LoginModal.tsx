import { classNames } from 'shared/lib'
import s from './styles.module.scss'
import { Button, ButtonTheme, Modal } from 'shared/ui'
import { LoginForm } from '../LoginForm/LoginForm'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

interface Props {
  className?: string
}

export const LoginModal = ({ className }: Props) => {
  const [show, setShow] = useState<boolean>(false)

  const { t } = useTranslation()

  const toggleModal = () => {
    setShow(prevState => !prevState)
  }

  return (
    <div>
      <Button theme={ButtonTheme.OUTLINE} onClick={toggleModal}>
        {t('Войти')}
      </Button>
      <Modal
        opened={show}
        onClose={toggleModal}
        lazy
        className={classNames(
          s.container,
          {},
          [className as string])}
      >
        <LoginForm/>
      </Modal>
    </div>

  )
}
