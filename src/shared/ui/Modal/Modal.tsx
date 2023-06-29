import s from './styles.module.scss'
import { classNames } from 'shared/lib'
import { type MouseEvent, type ReactNode, useCallback, useEffect, useState } from 'react'
import { Portal } from 'shared/ui'

interface Props {
  opened: boolean
  onClose: () => void
  children: ReactNode
  className?: string
  lazy?: boolean
}

export const Modal = (props: Props) => {
  const { opened, onClose, children, className, lazy = false } = props

  const [isMounted, setIsMounted] = useState<boolean>(false)

  const mods: Record<string, boolean> = {
    [s.show]: opened
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

  useEffect(() => {
    if (opened) {
      setIsMounted(true)
    }
  }, [opened])

  if (lazy && !isMounted) {
    return null
  }

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
