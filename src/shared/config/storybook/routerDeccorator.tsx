import { type FC, type ReactNode } from 'react'
import { BrowserRouter } from 'react-router-dom'

export const RouterDecorator: FC<{ children: ReactNode }> = ({ children }) => <BrowserRouter>{children}</BrowserRouter>
