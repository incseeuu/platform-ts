import { classNames } from 'shared/lib/classNames/classNames'

describe('classNames test', () => {
  test('classNames with mainClass', () => {
    expect(classNames('mainClass')).toBe('mainClass')
  })

  test('classNames with main + additionalClass', () => {
    expect(classNames('mainClass', {}, ['additionalClass']))
      .toBe('mainClass additionalClass')
  })

  test('classNames with main + modeClass + additionalClass', () => {
    expect(classNames('mainClass', { hovered: true }, ['additionalClass']))
      .toBe('mainClass additionalClass hovered')
  })
})
