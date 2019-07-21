import { Moment } from 'moment';
export declare class DateUtilsService {
    constructor();
    isSame(firstDate: any, secondDate: any): boolean;
    getDayNum(date: Moment, locale: any): string;
    getlocaleDayNames(locale: any): string[];
    isToday(day: Moment): boolean;
}
