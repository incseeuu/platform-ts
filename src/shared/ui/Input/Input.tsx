import { classNames } from 'shared/lib'
import s from './styles.module.scss'
import { type ChangeEvent, type InputHTMLAttributes, memo, useCallback } from 'react'

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

  // const ref = useRef<HTMLInputElement>(null)
  const setFocus = useCallback((element: HTMLInputElement) => {
    autofocus && element?.focus()
  }, [autofocus])
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.currentTarget.value)
  }

  return (
    <input
      ref={setFocus}
      type={type}
      value={value}
      autoFocus={autofocus}
      onChange={onChangeHandler}
      className={classNames(s.input, {}, [className])}
      {...otherProps}
    />
  )
})
