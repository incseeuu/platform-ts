type Mods = Record<string, boolean | string>

export const classNames = (
  mainClass: string,
  mods: Mods = {},
  additionalClass: Array<string | undefined> = []): string => {
  return [
    mainClass,
    ...additionalClass.filter(Boolean),
    ...Object.entries(mods).filter(Boolean)
      .filter(([className, isTrue]) => Boolean(isTrue))
      .map(([className, isTrue]) => className)
  ].join(' ')
}
