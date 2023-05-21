import React, {useState} from 'react';
import {classNames} from "shared/lib/classNames";
import s from './styles.module.scss'
import {ToggleTheme} from "widgets/ToggleTheme";

interface Props {
    className?: string
}

export const Sidebar = ({className}: Props) => {

    const [collapsed, setCollapsed] = useState<boolean>(false)

    return (
        <div
            className={classNames(
                s.container,
                {[s.collapsed]: collapsed},
                [className])
        }>
        <button onClick={() => setCollapsed(prevState => !prevState)}>toggle</button>
            <div className={s.switchers}>
                <ToggleTheme/>
            {/*LanguageSwitcher*/}
            </div>
        </div>
    );
};