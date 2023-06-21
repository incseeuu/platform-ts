import { type FC, type ReactNode } from 'react'
import { MemoryRouter } from 'react-router-dom'

export const RouterDecorator: FC<{ children: ReactNode }> = ({ children }) => <MemoryRouter>{children}</MemoryRouter>
