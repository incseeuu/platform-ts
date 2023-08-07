import { useTranslation } from 'react-i18next'
import { Button, ButtonTheme } from 'shared/ui'
import Ru from 'shared/assets/RU.svg'
import NotRu from 'shared/assets/NOTRU.svg'
import s from './styles.module.scss'
import { classNames } from 'shared/lib'
import { memo } from 'react'

interface Props {
  className?: string
}

export const ToggleLanguage = memo(({ className }: Props) => {
  const { i18n } = useTranslation()

  const toggle = async () => {
    await i18n.changeLanguage(i18n.language === 'ru' ? 'eng' : 'ru')
  }
  return (
        <Button
            className={classNames(s.langSwitcher, {}, [className as string])}
            onClick={toggle}
            theme={ButtonTheme.CLEAR}>
            {i18n.language === 'ru' ? <Ru/> : <NotRu/>}
        </Button>
  )
})
