import { classNames } from 'shared/lib'
import s from './styles.module.scss'
import { type ChangeEvent, type InputHTMLAttributes, memo, useEffect, useRef } from 'react'

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface Props extends HTMLInputProps {
  className?: string
  value?: string
  type?: string
  autofocus?: boolean
  onChange?: (value: string) => void
}

export const Input = memo((props: Props) => {
  const {
    className = '',
    value,
    type = 'text',
    onChange,
    autofocus = false,
    ...otherProps
  } = props

  const ref = useRef<HTMLInputElement>(null)

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.currentTarget.value)
  }

  useEffect(() => {
    if (autofocus) {
      ref.current?.focus()
    }
  }, [autofocus])

  return (
    <input
      ref={ref}
      type={type}
      value={value}
      autoFocus={autofocus}
      onChange={onChangeHandler}
      className={classNames(s.input, {}, [className])}
      {...otherProps}
    />
  )
})
