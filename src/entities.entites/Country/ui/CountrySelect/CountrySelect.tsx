import { Select } from 'shared/ui/Select/Select'
import { memo, useCallback } from 'react'
import { Country } from '../../model/type'

interface Props {
  className?: string
  value?: Country
  onChange?: (value: Country) => void
  readonly?: boolean
}

const options = [
  { value: Country.Armenia, content: Country.Armenia },
  { value: Country.Kazakhstan, content: Country.Kazakhstan },
  { value: Country.Russia, content: Country.Russia },
  { value: Country.Kazakhstan, content: Country.Kazakhstan },
  { value: Country.Belarus, content: Country.Belarus }
]

export const CountrySelect = memo(({ className, value, onChange, readonly }: Props) => {
  const onChangeHandler = useCallback((value: string) => {
    onChange?.(value as Country)
  }, [onChange])

  return (
    <Select
      label={'Укажите город'}
      options={options}
      value={value}
      onChange={onChangeHandler}
      readonly={readonly}
    />
  )
})
