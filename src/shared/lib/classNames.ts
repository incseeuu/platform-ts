type Mods = Record<string, boolean | string>

export const classNames = (mainClass: string, mods: Mods = {}, additionalClass: string[] = []): string => {
  return [
    mainClass,
    ...additionalClass,
    ...Object.entries(mods).filter(Boolean)
      .filter(([className, isTrue]) => Boolean(isTrue))
      .map(([className, isTrue]) => className)
  ].join(' ')
}
