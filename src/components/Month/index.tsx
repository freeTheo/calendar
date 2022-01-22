import React, { useState } from 'react';
import { useMemo } from 'react';
import { month } from '../../core/month';
import Day from '../Day';
import WeekDay from '../WeekDay';
import styles from './index.module.less';

interface MonthProps {
    year:number,
    month:number,
    onClick:(value:Date, e:any)=>void;
    collection:(Date|undefined)[];
}

const getMonth = ( year:number,_month:number,): Date[] | any => {
    let _result = [];
    const amonth = new month(year, _month);

    while (!amonth.isEmpty()) {
        const item = amonth.getNextDate();
        _result.push(item)
    }
    console.warn('000', _result)
    return _result;
}

const compute = (_date: Date, collection:(Date|undefined)[]) => {
    let disabled = false;
    let checked = false;
    let tagged = false;

    const currentRange = collection;
    if (currentRange[0] && currentRange[1]) {
        if (month.inRange(_date, currentRange as any)) {
            checked = true
        }

    }
    if(currentRange.some(item=>item?.getTime() === _date.getTime())){
        tagged = true
    }
    return {
        disabled,
        checked,
        tagged,
    }
}

export default (props:MonthProps) => {

    const {
        month:monthNum,
        year, 
        onClick,
        collection,
    } = props;

    const dateData = useMemo(()=> getMonth(year,monthNum), []);

    const delta = month.getDelta(7, dateData[0])

    

    const setWeekDay = (_delta:number)=>{
        let __delta = _delta;
        let _result = []; 
        while(__delta--){
            _result.push(<WeekDay key={__delta}/>   )
        }
        return _result;
    }

    console.warn('[[', delta)
    return <div className={styles.wrap}>
        <div className={styles.header}>{year}.{monthNum}</div>
        {setWeekDay(delta)}
        {dateData.map((item: Date, index: number) =>
            <Day key={index} onClick={onClick} date={item} {...compute(item,collection)} />
        )}
    </div>
}