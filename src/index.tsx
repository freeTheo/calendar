import React, { useState } from 'react';
import styles from './index.module.less';
import Month from './components/Month';

interface calenderProps{
  customCard?: React.ReactNode;
}

export default (props:calenderProps) => {

  const {} = props;
  const [currentRange, setCurrentRange] = useState<(Date | undefined)[]>([undefined, undefined]);
  const [year, setYear] = useState(2022);


  const onClickDay = (date: Date) => {

    if (!currentRange[0] && !currentRange[1]) {
      setCurrentRange([date, undefined])
    } else if (currentRange[0] && currentRange[1]) {
      setCurrentRange([date, undefined])
    } else if (currentRange[0] && !currentRange[1]) {
      setCurrentRange([currentRange[0], date])
    }
  }

  const getAllMonth = ()=>{
    let allMonth = []
      for (let i = 1; i<=12 ; i++ ) {
        allMonth.push(< Month key={i} year={year} month={i} onClick={onClickDay} collection={currentRange} />)
      }
      return allMonth
  }

  return (
    <div className={styles.App}>
      <div>
        <span> {'<'} </span>
        <span>2022</span>
        <span> {'>'} </span>
      </div>

      <div className={styles.container}>
        {getAllMonth()}
      </div>

    </div>
  );
}
