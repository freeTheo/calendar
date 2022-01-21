
export class month {
    constructor(year: number, month: number) {
        this.year = year;
        this.month = month - 1
    }

    private year;
    private month;
    private next = 1;

    public getNextDate = (): Date | void => {
        const nextDate = new Date();
        nextDate.setFullYear(this.year);
        nextDate.setMonth(this.month);
        nextDate.setDate(this.next++);
        if(nextDate.getMonth() === this.month){
            return nextDate;
        }
    }

    

}