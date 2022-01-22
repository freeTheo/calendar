import React from 'react';
import { useMemo } from 'react';
import { month } from '../../core/month';
import styles from './index.module.less';
const getMonth = () => {
    let a;
    let _result = [];
    const amonth = new month(2022, 1);

    while (!a) {
        const item = amonth.getNextDate();
        if (item) {
            _result.push(
                item.getDate()
            )
        } else a = 1;
    }
    console.warn('000', _result)
    return _result;
}
export default () => {

    const dateData = useMemo(getMonth, []);

    console.warn('[[', styles)
    return <div className={styles.wrap}>
        {dateData.map((item,index)=>
            <span key={index} className={styles.day} onClick={onCL}>{item}</span>
        )}
    </div>
}