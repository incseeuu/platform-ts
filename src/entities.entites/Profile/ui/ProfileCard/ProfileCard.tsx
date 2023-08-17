import s from './styles.module.scss'
import { HeaderCard } from 'entities.entites/Profile/ui/ProfileCard/HeaderCard'
import { BodyCard } from './BodyCard'
import { useSelector } from 'react-redux'
import { profileReadonlySelector } from 'entities.entites/Profile'
import { classNames } from 'shared/lib'

export const ProfileCard = () => {
  const readonly = useSelector(profileReadonlySelector)

  const mods = {
    [s.readonly]: !readonly
  }

  return (
        <div className={classNames(s.container, mods, [])}>
          <HeaderCard/>
          <BodyCard/>
        </div>
  )
}
