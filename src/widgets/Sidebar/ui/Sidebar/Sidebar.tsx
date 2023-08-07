import { classNames } from 'shared/lib'
import s from './styles.module.scss'
import { ToggleTheme } from 'widgets/ToggleTheme'
import Logo from 'shared/assets/logo.svg'
import Collapse from 'shared/assets/collapse.svg'
import { ToggleLanguage } from 'widgets/ToggleLanguage'
import { memo, useMemo, useState } from 'react'
import { sidebarItemsList } from 'widgets/Sidebar/model/SidebarItem/SidebarItem'
import { SidebarItem } from 'widgets/Sidebar/ui/SIdebarItem/SidebarItem'

interface Props {
  className?: string
}

export const Sidebar = memo(({ className }: Props) => {
  const [collapsed, setCollapsed] = useState<boolean>(false)

  const itemsLinks = useMemo(() => {
    return sidebarItemsList.map(el => (
     <SidebarItem key={el.path} path={el.path} title={el.title} Icon={el.Icon} />
    ))
  }, [])

  return (
        <div
          data-testid={'sidebar'}
            className={classNames(
              s.container,
              { [s.collapsed]: collapsed },
              [className as string])
            }>
            <div className={s.header}>
                <div className={s.logoContainer}>
                    <Logo className={s.logo}/>
                </div>
                <div className={classNames(s.links, { [s.unlinks]: collapsed }, [])}>
                  {itemsLinks}
                </div>
            </div>
            <div className={classNames(
              s.collapseBtnContainer,
              { [s.collapsedBtnContainerTransform]: collapsed },
              [])}
            >
                <button
                  data-testid={'sidebar-toggle'}
                    className={classNames(s.collapseBtn, { [s.collapsedBtnTransform]: collapsed }, [])}
                    onClick={() => { setCollapsed(prevState => !prevState) }}
                ><Collapse/>
                </button>
            </div>
            <div className={classNames(s.switchers, {}, [])}>
                <ToggleTheme/>
                <ToggleLanguage className={s.lang}/>
            </div>
        </div>
  )
})
