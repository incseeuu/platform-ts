import { classNames } from 'shared/lib'

import s from './styles.module.scss'
import { type ChangeEvent, memo, useMemo } from 'react'

export interface SelectOptinos {
  value: string
  content: string
}

interface Props {
  className?: string
  label?: string
  options?: SelectOptinos[]
  value?: string
  onChange?: (value: string) => void
  readonly?: boolean
}

export const Select = memo((props: Props) => {
  const {
    className,
    label,
    options,
    onChange,
    value,
    readonly
  } = props

  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(e.currentTarget.value)
  }

  const renderOptions = useMemo(() => (
    options?.map(el => <option key={el.value} className={s.option}>{el.content}</option>)
  ), [options])

  return (
        <div className={classNames(s.container, {}, [className])}>
          {label && (
            <span className={s.label}>{label}:</span>
          )}
          <select
            className={s.select}
            value={value}
            onChange={onChangeHandler}
            disabled={readonly}
          >
            {renderOptions}
          </select>
        </div>
  )
})
