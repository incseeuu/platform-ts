import { useTranslation } from 'react-i18next'
import { Button, ButtonTheme } from 'shared/ui'
import RU from 'shared/assets/RU.svg'
import NOT_RU from 'shared/assets/NOT_RU.svg'
import s from './styles.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'

interface Props {
  className?: string
}

export const ToggleLanguage = ({ className }: Props) => {
  const { i18n } = useTranslation()

  const toggle = async () => {
    await i18n.changeLanguage(i18n.language === 'ru' ? 'eng' : 'ru')
  }
  return (
        <Button
            className={classNames(s.langSwitcher, {}, [className as string])}
            onClick={toggle}
            theme={ButtonTheme.CLEAR}>
            {i18n.language === 'ru' ? <RU/> : <NOT_RU/>}
        </Button>
  )
}
