import { AppLink, AppLinkTheme } from 'shared/ui'
import { useLocation } from 'react-router-dom'
import { memo } from 'react'
import { type SidebarItemInterface } from '../../model/SidebarItem/SidebarItem'
import { useSelector } from 'react-redux'
import { getUserData } from 'entities.entites/User'

export const SidebarItem = memo(({ title, Icon, path, authOnly }: SidebarItemInterface) => {
  const { pathname } = useLocation()
  const userData = useSelector(getUserData)

  if (authOnly && !userData) {
    return null
  }

  return (
    <AppLink
      className={pathname === path ? 'active' : ''}
      to={path}
      theme={AppLinkTheme.PRIMARY}
      title={title}
      Icon={Icon}
    />
  )
})
