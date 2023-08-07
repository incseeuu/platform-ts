import { classNames } from 'shared/lib'
import s from './styles.module.scss'
import { Button, ButtonTheme, Loader, Modal } from 'shared/ui'
import { LoginFormAsync } from '../LoginForm/LoginForm.async'
import { Suspense, useState } from 'react'
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
      {show && <Modal
        opened={show}
        onClose={toggleModal}
        lazy
        className={classNames(
          s.container,
          {},
          [className as string])}
      >
        <Suspense fallback={<Loader/>}>
          <LoginFormAsync onShowModal={setShow}/>
        </Suspense>
      </Modal>}
    </div>

  )
}
