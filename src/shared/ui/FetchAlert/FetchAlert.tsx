import { classNames } from 'shared/lib'
import s from './styles.module.scss'
import { useEffect, useState } from 'react'
import { Text, TextTheme } from 'shared/ui/Text/Text'

interface Props {
  className?: string
  errorMessage: string
}

export const FetchAlert = ({ className, errorMessage }: Props) => {
  const [show, setShow] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false)
    }, 2000)

    return () => {
      clearTimeout(timer)
    }
  }, [])

  if (!show) {
    return null
  }

  return (
        <div className={classNames(s.container, {}, [className as string])}>
          <Text theme={TextTheme.ERROR} text={errorMessage}/>
        </div>
  )
}
