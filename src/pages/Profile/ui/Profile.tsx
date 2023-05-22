import React from 'react';
import {classNames} from "shared/lib/classNames";
import s from './styles.module.scss'

interface Props {
    className?: string
}

const Profile = ({className}: Props) => {
    return (
        <div className={classNames(s.container, {}, [className])}>
            Profile
        </div>
    );
};

export default Profile