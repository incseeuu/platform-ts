import React, {useState} from 'react';
import s from './Counter.module.scss'

export const Counter = () => {
    const [counter, setCounter] = useState(0)

    return (
        <div>
            <h3>counter: {counter}</h3>
            <button className={s.button} onClick={() => setCounter(prevState => prevState + 1)}>+</button>
        </div>
    );
};

