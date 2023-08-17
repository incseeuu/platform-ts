import { classNames } from 'shared/lib'

import s from './styles.module.scss'
import { type CSSProperties, useMemo } from 'react'

interface Props {
  className?: string
  src: string
  alt: string
  width?: string
  height?: string
}

export const Avatar = ({ className, src, alt, height, width }: Props) => {
  const styles = useMemo<CSSProperties>(() => ({
    width: width ?? 128,
    height: height ?? 128
  }), [height, width])

  return <img
    style={styles}
    className={classNames(s.container, {}, [className])}
    src={src}
    alt={alt}
  />
}
