import { Select } from 'shared/ui/Select/Select'
import { Currency } from '../../model/types/index'
import { memo, useCallback } from 'react'

interface Props {
  className?: string
  value?: Currency
  onChange?: (value: Currency) => void
  readonly?: boolean
}

const options = [
  { content: Currency.RUB, value: Currency.RUB },
  { content: Currency.USD, value: Currency.USD },
  { content: Currency.EURO, value: Currency.EURO }
]

export const CurrencySelect = memo(({ className, value, onChange, readonly }: Props) => {
  const onChangeHandler = useCallback((value: string) => {
    onChange?.(value as Currency)
  }, [onChange])

  return (
        <Select
          label={'Укажите валюту'}
          options={options}
          value={value}
          onChange={onChangeHandler}
          readonly={readonly}
        />
  )
})
