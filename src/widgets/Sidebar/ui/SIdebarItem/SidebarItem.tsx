import { AppLink, AppLinkTheme } from 'shared/ui'
import { useLocation } from 'react-router-dom'
import { memo } from 'react'
import { type SidebarItemInterface } from '../../model/SidebarItem/SidebarItem'

export const SidebarItem = memo(({ title, Icon, path }: SidebarItemInterface) => {
  const { pathname } = useLocation()

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
