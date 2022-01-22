
export class month {
    constructor(year: number, month: number) {
        this.year = year;
        this.month = month - 1;
        this.nextDate.setFullYear(year);
        this.nextDate.setMonth(month - 1);
        this.nextDate.setDate(1);
    }
    
    private year;
    private month;
    private nextDate = new Date();
    
    public isEmpty = (): boolean => {
        // console.warn('pppp',this.nextDate, this.month )
        return !(this.nextDate.getMonth() === this.month)
    }
    
    public getNextDate = (): Date | void => {
        if (!this.isEmpty()) {
            const result =  new Date(this.nextDate);
            this.nextDate.setDate(this.nextDate.getDate() + 1);
            return result;
        }
    }

    /**
     * 比较两天的先后
     * @param dateA 
     * @param dateB 
     * @returns 
     */
    public static compare = (dateA: Date, dateB: Date) => {
        return dateA.getTime() - dateB.getTime();
    }

    /**
     * 判断current是否在区间内；
     * @param current 
     * @param range 
     * @returns 
     */
    public static inRange = (current: Date, range: [Date, Date]) => {
        const currentTime = current.getTime();

        const a = range?.[0]?.getTime();
        const b = range?.[1]?.getTime();
        return (currentTime >= a && currentTime <= b) || (currentTime <= a && currentTime >= b)
    }

    /**
     * 计算当月第一天和表头第一位的差值
     * @param first number： 排序第一位的星期
     * @param monthFirstDate 当月第一天
     * @returns 
     */
    public static getDelta = (first: 1 | 2 | 3 | 4 | 5 | 6 | 7 = 1, monthFirstDate:Date)=>{

        let monthFirstDay:number = monthFirstDate.getDay();
    
        let delta;
        
        if(monthFirstDay> first){
            delta = monthFirstDay - first;
        }else if(monthFirstDay < first) {
            delta = 7-first + monthFirstDay;   
         }else{
             delta = 0;
         }
    
        return delta;
    }



}