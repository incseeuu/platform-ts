import { useState } from 'react'
import { Button, ButtonTheme, Modal } from 'shared/ui'
import { useTranslation } from 'react-i18next'

export const Login = () => {
  const { t } = useTranslation()

  const [show, setShow] = useState(false)
  const toggleModal = () => {
    setShow(prevState => !prevState)
  }
  return (
        <div >
          <Button theme={ButtonTheme.OUTLINE} onClick={toggleModal}></Button>
          <Modal opened={show} onClose={toggleModal}>Hello</Modal>
        </div>
  )
}
