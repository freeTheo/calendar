import React, { useState } from 'react';
import { useMemo } from 'react';
import styles from './index.module.less';

interface DayProps {
    date: Date,
    onClick: Function,
    disabled: boolean,
    checked: boolean,
    tagged: boolean,
}
export default (props: DayProps) => {

    const { date, onClick, disabled, checked, tagged } = props

    // const [disabled,setDisabled] = useState(false)

    const clickDay = () => {
        onClick?.(date)
    }



    return <span className={styles.day} onClick={clickDay} style={{ color: disabled ? 'gray' : 'black' }}>
        {date.getDate()}
        {checked && <span >✔</span>}
        {tagged && <span>✨</span>}
    </span>
}