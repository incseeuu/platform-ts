import { lazy } from 'react'

export const HomeAsyncPage = lazy(async () => (await import('./Home')))
