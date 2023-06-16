import 'app/styles/index.scss'
import { type FC, type ReactNode } from 'react'

export const StyleDecorator: FC<{ children: ReactNode }> = ({ children }) => <>{children}</>
