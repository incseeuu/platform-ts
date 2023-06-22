import s from './styles.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { type MouseEvent, type ReactNode, useCallback, useEffect } from 'react'
import { Portal } from 'shared/ui'
import { useTheme } from 'app/providers/ThemeProvider'

interface Props {
  opened: boolean
  onClose: () => void
  children: ReactNode
  className?: string
}

export const Modal = (props: Props) => {
  const { opened, onClose, children, className } = props

  const { theme } = useTheme()

  const mods: Record<string, boolean> = {
    [s.show]: opened,
    [s[theme]]: true
  }

  const contentHandler = (e: MouseEvent) => {
    e.stopPropagation()
  }

  const onKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose()
    }
  }, [onClose])

  useEffect(() => {
    if (opened) {
      window.addEventListener('keydown', onKeyDown)
    }

    return () => {
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [onKeyDown, opened])

  return <Portal>
    <div className={classNames(s.container, mods, [className as string])}>
      <div onClick={onClose} className={s.overlay}>
        <div onClick={contentHandler} className={s.content}>
          {children}
        </div>
      </div>
    </div>
  </Portal>
}
