import { classNames } from 'shared/lib/classNames/classNames'
import s from './styles.module.scss'

interface Props {
  className?: string
}

const Profile = ({ className }: Props) => {
  return (
        <div className={classNames(s.container, {}, [className as string])}>
            Profile
        </div>
  )
}

export default Profile
