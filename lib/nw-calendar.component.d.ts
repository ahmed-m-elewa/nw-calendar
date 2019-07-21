import { OnInit } from '@angular/core';
import { Moment } from 'moment';
import { DateUtilsService } from './utils/date-utils.service';
import { nwDirection, nwView } from './types';
export declare class NwCalendarComponent implements OnInit {
    dateUtils: DateUtilsService;
    viewType: nwView;
    locale: string;
    dir: nwDirection;
    private range;
    private selectedDateChange;
    private navigate;
    private _selectedDate;
    days: Moment[];
    private currentDate;
    private from_date;
    private to_date;
    disabledDate: (date: Date) => boolean;
    constructor(dateUtils: DateUtilsService);
    ngOnInit(): void;
    prev(year?: any): void;
    next(year?: any): void;
    prevWeek(): void;
    nextWeek(): void;
    prevMonth(): void;
    nextMonth(): void;
    prevYear(): void;
    nextYear(): void;
    readonly currentMonth: string;
    readonly currentYear: string;
    private initCalendar;
    selectedDate: Date;
    selectDay(date: any): void;
    isDisabled(date: Moment): boolean;
}