import { classNames } from 'shared/lib'
import s from './styles.module.scss'
import { type ChangeEvent, type InputHTMLAttributes, memo, useCallback } from 'react'

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>

interface Props extends HTMLInputProps {
  className?: string
  value?: string | number
  type?: string
  autofocus?: boolean
  onChange?: (value: string) => void
  readonly?: boolean
}

export const Input = memo((props: Props) => {
  const {
    className = '',
    value = '',
    type = 'text',
    onChange,
    autofocus = false,
    readonly = false,
    ...otherProps
  } = props

  const setFocus = useCallback((element: HTMLInputElement) => {
    autofocus && element?.focus()
  }, [autofocus])
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value)
  }

  const mods = {
    [s.readonly]: readonly
  }

  return (
    <input
      ref={setFocus}
      type={type}
      value={value}
      autoFocus={autofocus}
      onChange={onChangeHandler}
      className={classNames(s.input, mods, [className])}
      readOnly={readonly}
      {...otherProps}
    />
  )
})
