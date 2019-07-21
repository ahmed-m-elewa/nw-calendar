/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as moment_ from 'moment';
/** @type {?} */
const moment = moment_;
import locale from './decorators/locale-decorator';
import direction from './decorators/dir-decorator';
import viewType from './decorators/view-type-decorator';
import { DateUtilsService } from './utils/date-utils.service';
export class NwCalendarComponent {
    /**
     * @param {?} dateUtils
     */
    constructor(dateUtils) {
        this.dateUtils = dateUtils;
        this.selectedDateChange = new EventEmitter();
        this.navigate = new EventEmitter();
        this.days = [];
        this.disabledDate = (/**
         * @param {?} date
         * @return {?}
         */
        (date) => {
            return false;
        });
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        moment.locale(this.locale);
        if (this.viewType === 'week') {
            this.from_date = moment().startOf('week');
            this.to_date = moment().endOf('week');
        }
        else {
            this.from_date = (moment().startOf('month')).startOf('week');
            this.to_date = (moment().endOf('month')).endOf('week').add(1, 'week');
        }
        this.initCalendar();
    }
    /**
     * @param {?=} year
     * @return {?}
     */
    prev(year) {
        year ? this.prevYear() : this.viewType === 'week' ? this.prevWeek() : this.prevMonth();
        // this.selectedDate = null;
        this.navigate.emit({
            start: this.from_date.toDate(),
            end: this.to_date.toDate()
        });
    }
    /**
     * @param {?=} year
     * @return {?}
     */
    next(year) {
        year ? this.nextYear() : this.viewType === 'week' ? this.nextWeek() : this.nextMonth();
        // this.selectedDate = null;
        this.navigate.emit({
            start: this.from_date.toDate(),
            end: this.to_date.toDate()
        });
    }
    /**
     * @return {?}
     */
    prevWeek() {
        this.from_date = this.from_date.clone().subtract(1, 'w');
        this.to_date = this.to_date.clone().subtract(1, 'w');
        this.initCalendar();
    }
    /**
     * @return {?}
     */
    nextWeek() {
        this.from_date = this.from_date.clone().add(1, 'w');
        this.to_date = this.to_date.clone().add(1, 'w');
        this.initCalendar();
    }
    /**
     * @return {?}
     */
    prevMonth() {
        /** @type {?} */
        const prevMonth = this.currentDate.clone().subtract(1, 'month');
        this.from_date = (prevMonth.clone().startOf('month')).startOf('week');
        this.to_date = this.from_date.clone().add(6, 'weeks').subtract(1, 'd');
        this.initCalendar();
    }
    /**
     * @return {?}
     */
    nextMonth() {
        /** @type {?} */
        const nextMonth = this.currentDate.clone().add(1, 'month');
        this.from_date = (nextMonth.clone().startOf('month')).startOf('week');
        this.to_date = this.from_date.clone().add(6, 'weeks').subtract(1, 'd');
        this.initCalendar();
    }
    /**
     * @return {?}
     */
    prevYear() {
        /** @type {?} */
        const prevYear = this.currentDate.clone().subtract(1, 'year');
        this.from_date = (prevYear.clone().startOf('month')).startOf('week');
        this.to_date = this.from_date.clone().add(6, 'weeks').subtract(1, 'd');
        this.initCalendar();
    }
    /**
     * @return {?}
     */
    nextYear() {
        /** @type {?} */
        const nextYear = this.currentDate.clone().add(1, 'year');
        this.from_date = (nextYear.clone().startOf('month')).startOf('week');
        this.to_date = this.from_date.clone().add(6, 'weeks').subtract(1, 'd');
        this.initCalendar();
    }
    /**
     * @return {?}
     */
    get currentMonth() {
        return this.currentDate.locale(this.locale).format('MMMM');
    }
    /**
     * @return {?}
     */
    get currentYear() {
        return this.currentDate.locale(this.locale).format('YYYY');
    }
    /**
     * @private
     * @return {?}
     */
    initCalendar() {
        /** @type {?} */
        let day = this.from_date;
        this.days = [];
        while (day <= this.to_date) {
            this.days.push(day);
            day = day.clone().add(1, 'd');
        }
        /** @type {?} */
        const center = this.viewType === 'week' ? 3 : 15;
        this.currentDate = this.days[center];
    }
    /**
     * @return {?}
     */
    get selectedDate() {
        return this._selectedDate ? this._selectedDate.toDate() : undefined;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set selectedDate(value) {
        this._selectedDate = moment(value);
    }
    /**
     * @param {?} date
     * @return {?}
     */
    selectDay(date) {
        this.selectedDate = date;
        this.currentDate = date;
        this.selectedDateChange.emit(date.toDate());
    }
    /**
     * @param {?} date
     * @return {?}
     */
    isDisabled(date) {
        return ((this.range && this.range.start && date.isBefore(moment(this.range.start)) && !this.dateUtils.isSame(moment(this.range.start), date))
            || (this.range && this.range.end && date.isAfter(moment(this.range.end)) && !this.dateUtils.isSame(moment(this.range.end), date))
            || this.disabledDate(date.toDate())
            || (!date.isSame(this.currentDate, 'month') && this.viewType === 'month'));
    }
}
NwCalendarComponent.decorators = [
    { type: Component, args: [{
                selector: 'nw-calendar',
                template: "<div class=\"nw-calendar\" [ngClass]=\"{'nw-rtl-calendar': dir == 'rtl'}\">\r\n  <div class=\"nw-calendar-header row\">\r\n    <div class=\"col-4\">\r\n      <a\r\n        (click)=\"prev()\"\r\n        [ngStyle]=\"{'float': dir == 'ltr' ? 'right' : 'left'}\" style=\"cursor: pointer\"\r\n        data-toggle=\"tooltip\">\r\n        <i class=\"nw-dir fa\" [class.fa-angle-left]=\"dir == 'ltr'\" [class.fa-angle-right]=\"dir == 'rtl'\"\r\n           aria-hidden=\"true\"></i>\r\n      </a>\r\n      <a\r\n        *ngIf=\"viewType == 'month'\"\r\n        (click)=\"prev(true)\"\r\n        [ngStyle]=\"{'float': dir == 'ltr' ? 'right' : 'left'}\" style=\"cursor: pointer\">\r\n        <i class=\"nw-dir fa\" [class.fa-angle-double-left]=\"dir == 'ltr'\" [class.fa-angle-double-right]=\"dir == 'rtl'\"\r\n           aria-hidden=\"true\"></i>\r\n      </a>\r\n    </div>\r\n    <div class=\"col-4\" style=\"padding: 0.7rem 0\">\r\n      <span class=\"nw-calendar-header-txt\">{{currentMonth.toString() | uppercase}} {{ currentYear.toString()}}</span>\r\n    </div>\r\n    <div class=\"col-4\">\r\n      <a\r\n        (click)=\"next()\"\r\n        [ngStyle]=\"{'float': dir == 'ltr' ? 'left' : 'right'}\" style=\"cursor: pointer\">\r\n        <i class=\"nw-dir fa\" [class.fa-angle-right]=\"dir == 'ltr'\" [class.fa-angle-left]=\"dir == 'rtl'\"\r\n           aria-hidden=\"true\"></i>\r\n      </a>\r\n      <a\r\n        *ngIf=\"viewType == 'month'\"\r\n        (click)=\"next(true)\"\r\n        [ngStyle]=\"{'float': dir == 'ltr' ? 'left' : 'right'}\" style=\"cursor: pointer\">\r\n        <i class=\"nw-dir fa\" [class.fa-angle-double-right]=\"dir == 'ltr'\" [class.fa-angle-double-left]=\"dir == 'rtl'\"\r\n           aria-hidden=\"true\"></i>\r\n      </a>\r\n    </div>\r\n\r\n  </div>\r\n  <div class=\"row nw-calendar-body\">\r\n\r\n    <div *ngFor=\"let day of dateUtils.getlocaleDayNames(locale)\" class=\"nw-day-div\">\r\n      <div class=\"nw-calendar-day\">\r\n        <div class=\"nw-calendar-day-name\">{{day | uppercase }}</div>\r\n      </div>\r\n    </div>\r\n    <div *ngFor=\"let day of days\" class=\"nw-week-div\">\r\n    <div class=\"nw-calendar-week\">\r\n        <a style=\"cursor:pointer;\" class=\"nw-calendar-day-num\"\r\n           [class.nw-today]=\"dateUtils.isToday(day)\"\r\n           [class.nw-active-day]=\"dateUtils.isSame(selectedDate , day)\"\r\n           [class.nw-calendar-disabled-day]=\"isDisabled(day)\"\r\n           (click)=\"selectDay(day)\">\r\n          {{dateUtils.getDayNum(day , locale)}}\r\n        </a>\r\n      </div>\r\n\r\n    </div>\r\n\r\n\r\n  </div>\r\n</div>\r\n",
                styles: ["", ".nw-calendar{font-family:'Open Sans';border:1px solid #2e83d5;min-width:280px}.nw-calendar-header{min-height:3rem;background-color:#dbe9fa;border-radius:.3rem;text-align:center;margin:.3rem}.nw-calendar-header-txt{font-family:'Open Sans';font-size:1em;font-weight:700;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:normal;text-align:center;color:#000}.nw-day-div{width:14.28571%;padding:0;display:inline-block;height:4rem}.nw-week-div{width:14.28571%;padding:0;display:inline-block;height:2.5rem}.nw-calendar-day{width:100%;height:4rem;-o-object-fit:contain;object-fit:contain;text-align:center}.nw-calendar-week{width:100%;height:3rem;-o-object-fit:contain;object-fit:contain;text-align:center}.nw-active-day{background-color:#6972ff}.nw-calendar-day-name{padding:1.5rem 0 1rem;font-family:'Open Sans';font-size:.9rem;font-weight:700;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:normal;text-align:center;color:#010101}.nw-calendar-day-num{font-family:'Open Sans';font-size:1em;text-align:center;color:#000;border-radius:50%;line-height:2rem;display:inline-block;min-width:2rem}.nw-calendar-disabled-day{pointer-events:none!important;cursor:initial!important;color:#888!important}.nw-today{text-decoration:underline!important}:focus{outline:0!important}.nw-dir{padding:.5rem .15rem;margin:.4rem;font-size:1.5rem;color:#2e83d5;border-radius:50%;cursor:pointer}.nw-calendar-body{margin:.5rem .3rem;background-color:#cdd5fa;border-radius:.5rem}.nw-rtl-calendar,.nw-rtl-calendar .col-*{direction:rtl}"]
            }] }
];
/** @nocollapse */
NwCalendarComponent.ctorParameters = () => [
    { type: DateUtilsService }
];
NwCalendarComponent.propDecorators = {
    viewType: [{ type: Input }],
    locale: [{ type: Input }],
    dir: [{ type: Input }],
    range: [{ type: Input }],
    selectedDateChange: [{ type: Output }],
    navigate: [{ type: Output }],
    disabledDate: [{ type: Input }],
    selectedDate: [{ type: Input }]
};
tslib_1.__decorate([
    viewType,
    tslib_1.__metadata("design:type", String)
], NwCalendarComponent.prototype, "viewType", void 0);
tslib_1.__decorate([
    locale,
    tslib_1.__metadata("design:type", String)
], NwCalendarComponent.prototype, "locale", void 0);
tslib_1.__decorate([
    direction,
    tslib_1.__metadata("design:type", String)
], NwCalendarComponent.prototype, "dir", void 0);
if (false) {
    /** @type {?} */
    NwCalendarComponent.prototype.viewType;
    /** @type {?} */
    NwCalendarComponent.prototype.locale;
    /** @type {?} */
    NwCalendarComponent.prototype.dir;
    /**
     * @type {?}
     * @private
     */
    NwCalendarComponent.prototype.range;
    /**
     * @type {?}
     * @private
     */
    NwCalendarComponent.prototype.selectedDateChange;
    /**
     * @type {?}
     * @private
     */
    NwCalendarComponent.prototype.navigate;
    /**
     * @type {?}
     * @private
     */
    NwCalendarComponent.prototype._selectedDate;
    /** @type {?} */
    NwCalendarComponent.prototype.days;
    /**
     * @type {?}
     * @private
     */
    NwCalendarComponent.prototype.currentDate;
    /**
     * @type {?}
     * @private
     */
    NwCalendarComponent.prototype.from_date;
    /**
     * @type {?}
     * @private
     */
    NwCalendarComponent.prototype.to_date;
    /** @type {?} */
    NwCalendarComponent.prototype.disabledDate;
    /** @type {?} */
    NwCalendarComponent.prototype.dateUtils;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnctY2FsZW5kYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbnctY2FsZW5kYXIvIiwic291cmNlcyI6WyJsaWIvbnctY2FsZW5kYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUM3RSxPQUFPLEtBQUssT0FBTyxNQUFNLFFBQVEsQ0FBQzs7TUFDNUIsTUFBTSxHQUFHLE9BQU87QUFFdEIsT0FBTyxNQUFNLE1BQU0sK0JBQStCLENBQUM7QUFDbkQsT0FBTyxTQUFTLE1BQU0sNEJBQTRCLENBQUM7QUFDbkQsT0FBTyxRQUFRLE1BQU0sa0NBQWtDLENBQUM7QUFDeEQsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFXNUQsTUFBTSxPQUFPLG1CQUFtQjs7OztJQTZCOUIsWUFBbUIsU0FBMkI7UUFBM0IsY0FBUyxHQUFULFNBQVMsQ0FBa0I7UUFiNUIsdUJBQWtCLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQztRQUM5QyxhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQUV6RCxTQUFJLEdBQWEsRUFBRSxDQUFDO1FBS1gsaUJBQVk7Ozs7UUFBRyxDQUFDLElBQVUsRUFBRSxFQUFFO1lBQ3JDLE9BQU8sS0FBSyxDQUFDO1FBQ2YsQ0FBQyxFQUFBO0lBR2dELENBQUM7Ozs7SUFFbEQsUUFBUTtRQUNOLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzNCLElBQUksSUFBSSxDQUFDLFFBQVEsS0FBSyxNQUFNLEVBQUU7WUFDNUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLEVBQUUsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDMUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLEVBQUUsQ0FBQyxLQUFLLENB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QyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDdkUsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3RCLENBQUM7Ozs7SUFFRCxTQUFTOztjQUNELFNBQVMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsT0FBTyxDQUFDO1FBQzFELElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3RFLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDdkUsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3RCLENBQUM7Ozs7SUFFRCxRQUFROztjQUNBLFFBQVEsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDO1FBQzdELElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3JFLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDdkUsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBRXRCLENBQUM7Ozs7SUFFRCxRQUFROztjQUNBLFFBQVEsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxD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QUssQ0FBQyxHQUFHLENBQUMsRUFBRyxJQUFJLENBQUMsQ0FBQztlQUMvSCxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztlQUNoQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLE9BQU8sQ0FBQyxJQUFJLElBQUksQ0FBQyxRQUFRLEtBQUssT0FBTyxDQUFDLENBQzFFLENBQUM7SUFDSixDQUFDOzs7WUF2SkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxhQUFhO2dCQUN2Qixza0ZBQXlDOzthQUsxQzs7OztZQVZPLGdCQUFnQjs7O3VCQWNyQixLQUFLO3FCQUlMLEtBQUs7a0JBSUwsS0FBSztvQkFFTCxLQUFLO2lDQUdMLE1BQU07dUJBQ04sTUFBTTsyQkFPTixLQUFLOzJCQWtHTCxLQUFLOztBQXRITjtJQUZDLFFBQVE7O3FEQUVRO0FBSWpCO0lBRkMsTUFBTTs7bURBRVE7QUFHTjtJQURSLFNBQVM7O2dEQUNnQjs7O0lBVDFCLHVDQUVpQjs7SUFFakIscUNBRWU7O0lBRWYsa0NBQzBCOzs7OztJQUUxQixvQ0FDNkM7Ozs7O0lBRTdDLGlEQUFnRTs7Ozs7SUFDaEUsdUNBQXlEOzs7OztJQUN6RCw0Q0FBOEI7O0lBQzlCLG1DQUFvQjs7Ozs7SUFDcEIsMENBQTRCOzs7OztJQUM1Qix3Q0FBa0I7Ozs7O0lBQ2xCLHNDQUFnQjs7SUFFaEIsMkNBRUM7O0lBR1csd0NBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIG1vbWVudF8gZnJvbSAnbW9tZW50JztcbmNvbnN0IG1vbWVudCA9IG1vbWVudF87XG5pbXBvcnQge01vbWVudH0gZnJvbSAnbW9tZW50JztcbmltcG9ydCBsb2NhbGUgZnJvbSAnLi9kZWNvcmF0b3JzL2xvY2FsZS1kZWNvcmF0b3InO1xuaW1wb3J0IGRpcmVjdGlvbiBmcm9tICcuL2RlY29yYXRvcnMvZGlyLWRlY29yYXRvcic7XG5pbXBvcnQgdmlld1R5cGUgZnJvbSAnLi9kZWNvcmF0b3JzL3ZpZXctdHlwZS1kZWNvcmF0b3InO1xuaW1wb3J0IHtEYXRlVXRpbHNTZXJ2aWNlfSBmcm9tICcuL3V0aWxzL2RhdGUtdXRpbHMuc2VydmljZSc7XG5pbXBvcnQge253RGlyZWN0aW9uLCBOd1JhbmdlLCBud1ZpZXd9IGZyb20gJy4vdHlwZXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdudy1jYWxlbmRhcicsXG4gIHRlbXBsYXRlVXJsOiAnbnctY2FsZW5kYXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFtcbiAgICAnLi9pbXBvcnRzLmNzcycsXG4gICAgJ253LWNhbGVuZGFyLmNvbXBvbmVudC5jc3MnXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTndDYWxlbmRhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQHZpZXdUeXBlXG4gIEBJbnB1dCgpXG4gIHZpZXdUeXBlOiBud1ZpZXc7XG5cbiAgQGxvY2FsZVxuICBASW5wdXQoKVxuICBsb2NhbGU6IHN0cmluZztcblxuICBAZGlyZWN0aW9uXG4gIEBJbnB1dCgpIGRpcjogbndEaXJlY3Rpb247XG5cbiAgQElucHV0KClcbiAgcHJpdmF0ZSByYW5nZToge3N0YXJ0PzogRGF0ZSAsICBlbmQ/OiBEYXRlIH07XG5cbiAgQE91dHB1dCgpIHByaXZhdGUgc2VsZWN0ZWREYXRlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxEYXRlPigpO1xuICBAT3V0cHV0KCkgcHJpdmF0ZSBuYXZpZ2F0ZSA9IG5ldyBFdmVudEVtaXR0ZXI8TndSYW5nZT4oKTtcbiAgcHJpdmF0ZSBfc2VsZWN0ZWREYXRlOiBNb21lbnQ7XG4gIGRheXM6IE1vbWVudFtdID0gW107XG4gIHByaXZhdGUgY3VycmVudERhdGU6IE1vbWVudDtcbiAgcHJpdmF0ZSBmcm9tX2RhdGU7XG4gIHByaXZhdGUgdG9fZGF0ZTtcblxuICBASW5wdXQoKSBkaXNhYmxlZERhdGUgPSAoZGF0ZTogRGF0ZSkgPT4ge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG5cbiAgY29uc3RydWN0b3IocHVibGljIGRhdGVVdGlsczogRGF0ZVV0aWxzU2VydmljZSkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICBtb21lbnQubG9jYWxlKHRoaXMubG9jYWxlKTtcbiAgICBpZiAodGhpcy52aWV3VHlwZSA9PT0gJ3dlZWsnKSB7XG4gICAgICB0aGlzLmZyb21fZGF0ZSA9IG1vbWVudCgpLnN0YXJ0T2YoJ3dlZWsnKTtcbiAgICAgIHRoaXMudG9fZGF0ZSA9IG1vbWVudCgpLmVuZE9mKCd3ZWVrJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZnJvbV9kYXRlID0gKG1vbWVudCgpLnN0YXJ0T2YoJ21vbnRoJykpLnN0YXJ0T2YoJ3dlZWsnKTtcbiAgICAgIHRoaXMudG9fZGF0ZSA9IChtb21lbnQoKS5lbmRPZignbW9udGgnKSkuZW5kT2YoJ3dlZWsnKS5hZGQoMSwgJ3dlZWsnKTtcbiAgICB9XG4gICAgdGhpcy5pbml0Q2FsZW5kYXIoKTtcbiAgfVxuXG4gIHByZXYoeWVhcj8pIHtcbiAgICB5ZWFyID8gdGhpcy5wcmV2WWVhcigpIDogdGhpcy52aWV3VHlwZSA9PT0gJ3dlZWsnID8gdGhpcy5wcmV2V2VlaygpIDogdGhpcy5wcmV2TW9udGgoKTtcbiAgICAvLyB0aGlzLnNlbGVjdGVkRGF0ZSA9IG51bGw7XG4gICAgdGhpcy5uYXZpZ2F0ZS5lbWl0KHtcbiAgICAgIHN0YXJ0OiB0aGlzLmZyb21fZGF0ZS50b0RhdGUoKSxcbiAgICAgIGVuZDogdGhpcy50b19kYXRlLnRvRGF0ZSgpXG4gICAgfSk7XG4gIH1cblxuICBuZXh0KHllYXI/KSB7XG4gICAgeWVhciA/IHRoaXMubmV4dFllYXIoKSA6IHRoaXMudmlld1R5cGUgPT09ICd3ZWVrJyA/IHRoaXMubmV4dFdlZWsoKSA6IHRoaXMubmV4dE1vbnRoKCk7XG4gICAgLy8gdGhpcy5zZWxlY3RlZERhdGUgPSBudWxsO1xuICAgIHRoaXMubmF2aWdhdGUuZW1pdCh7XG4gICAgICBzdGFydDogdGhpcy5mcm9tX2RhdGUudG9EYXRlKCksXG4gICAgICBlbmQ6IHRoaXMudG9fZGF0ZS50b0RhdGUoKVxuICAgIH0pO1xuICB9XG5cblxuICAgcHJldldlZWsoKSB7XG4gICAgdGhpcy5mcm9tX2RhdGUgPSB0aGlzLmZyb21fZGF0ZS5jbG9uZSgpLnN1YnRyYWN0KDEsICd3Jyk7XG4gICAgdGhpcy50b19kYXRlID0gdGhpcy50b19kYXRlLmNsb25lKCkuc3VidHJhY3QoMSwgJ3cnKTtcbiAgICB0aGlzLmluaXRDYWxlbmRhcigpO1xuICB9XG5cbiAgbmV4dFdlZWsoKSB7XG4gICAgdGhpcy5mcm9tX2RhdGUgPSB0aGlzLmZyb21fZGF0ZS5jbG9uZSgpLmFkZCgxLCAndycpO1xuICAgIHRoaXMudG9fZGF0ZSA9IHRoaXMudG9fZGF0ZS5jbG9uZSgpLmFkZCgxLCAndycpO1xuICAgIHRoaXMuaW5pdENhbGVuZGFyKCk7XG4gIH1cblxuICBwcmV2TW9udGgoKSB7XG4gICAgY29uc3QgcHJldk1vbnRoID0gdGhpcy5jdXJyZW50RGF0ZS5jbG9uZSgpLnN1YnRyYWN0KDEsICdtb250aCcpO1xuICAgIHRoaXMuZnJvbV9kYXRlID0gKHByZXZNb250aC5jbG9uZSgpLnN0YXJ0T2YoJ21vbnRoJykpLnN0YXJ0T2YoJ3dlZWsnKTtcbiAgICB0aGlzLnRvX2RhdGUgPSB0aGlzLmZyb21fZGF0ZS5jbG9uZSgpLmFkZCg2LCAnd2Vla3MnKS5zdWJ0cmFjdCgxLCAnZCcpO1xuICAgIHRoaXMuaW5pdENhbGVuZGFyKCk7XG4gIH1cblxuICBuZXh0TW9udGgoKSB7XG4gICAgY29uc3QgbmV4dE1vbnRoID0gdGhpcy5jdXJyZW50RGF0ZS5jbG9uZSgpLmFkZCgxLCAnbW9udGgnKTtcbiAgICB0aGlzLmZyb21fZGF0ZSA9IChuZXh0TW9udGguY2xvbmUoKS5zdGFydE9mKCdtb250aCcpKS5zdGFydE9mKCd3ZWVrJyk7XG4gICAgdGhpcy50b19kYXRlID0gdGhpcy5mcm9tX2RhdGUuY2xvbmUoKS5hZGQoNiwgJ3dlZWtzJykuc3VidHJhY3QoMSwgJ2QnKTtcbiAgICB0aGlzLmluaXRDYWxlbmRhcigpO1xuICB9XG5cbiAgcHJldlllYXIoKSB7XG4gICAgY29uc3QgcHJldlllYXIgPSB0aGlzLmN1cnJlbnREYXRlLmNsb25lKCkuc3VidHJhY3QoMSwgJ3llYXInKTtcbiAgICB0aGlzLmZyb21fZGF0ZSA9IChwcmV2WWVhci5jbG9uZSgpLnN0YXJ0T2YoJ21vbnRoJykpLnN0YXJ0T2YoJ3dlZWsnKTtcbiAgICB0aGlzLnRvX2RhdGUgPSB0aGlzLmZyb21fZGF0ZS5jbG9uZSgpLmFkZCg2LCAnd2Vla3MnKS5zdWJ0cmFjdCgxLCAnZCcpO1xuICAgIHRoaXMuaW5pdENhbGVuZGFyKCk7XG5cbiAgfVxuXG4gIG5leHRZZWFyKCkge1xuICAgIGNvbnN0IG5leHRZZWFyID0gdGhpcy5jdXJyZW50RGF0ZS5jbG9uZSgpLmFkZCgxLCAneWVhcicpO1xuICAgIHRoaXMuZnJvbV9kYXRlID0gKG5leHRZZWFyLmNsb25lKCkuc3RhcnRPZignbW9udGgnKSkuc3RhcnRPZignd2VlaycpO1xuICAgIHRoaXMudG9fZGF0ZSA9IHRoaXMuZnJvbV9kYXRlLmNsb25lKCkuYWRkKDYsICd3ZWVrcycpLnN1YnRyYWN0KDEsICdkJyk7XG4gICAgdGhpcy5pbml0Q2FsZW5kYXIoKTtcbiAgfVxuXG4gIGdldCBjdXJyZW50TW9udGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuY3VycmVudERhdGUubG9jYWxlKHRoaXMubG9jYWxlKS5mb3JtYXQoJ01NTU0nKTtcbiAgfVxuICBnZXQgY3VycmVudFllYXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuY3VycmVudERhdGUubG9jYWxlKHRoaXMubG9jYWxlKS5mb3JtYXQoJ1lZWVknKTtcbiAgfVxuXG4gIHByaXZhdGUgaW5pdENhbGVuZGFyKCkge1xuXG4gICAgbGV0IGRheSA9IHRoaXMuZnJvbV9kYXRlO1xuICAgIHRoaXMuZGF5cyA9IFtdO1xuICAgIHdoaWxlIChkYXkgPD0gdGhpcy50b19kYXRlKSB7XG4gICAgICB0aGlzLmRheXMucHVzaChkYXkpO1xuICAgICAgZGF5ID0gZGF5LmNsb25lKCkuYWRkKDEsICdkJyk7XG4gICAgfVxuICAgIGNvbnN0IGNlbnRlciA9IHRoaXMudmlld1R5cGUgPT09ICd3ZWVrJyA/IDMgOiAxNTtcbiAgICB0aGlzLmN1cnJlbnREYXRlID0gdGhpcy5kYXlzW2NlbnRlcl07XG4gIH1cblxuICBASW5wdXQoKVxuICBnZXQgc2VsZWN0ZWREYXRlKCk6IERhdGUge1xuICAgIHJldHVybiB0aGlzLl9zZWxlY3RlZERhdGUgPyB0aGlzLl9zZWxlY3RlZERhdGUudG9EYXRlKCkgOiB1bmRlZmluZWQ7XG4gIH1cbiAgc2V0IHNlbGVjdGVkRGF0ZSh2YWx1ZTogRGF0ZSkge1xuICAgIHRoaXMuX3NlbGVjdGVkRGF0ZSA9IG1vbWVudCh2YWx1ZSk7XG4gIH1cblxuICBzZWxlY3REYXkoZGF0ZSkge1xuICAgIHRoaXMuc2VsZWN0ZWREYXRlID0gZGF0ZTtcbiAgICB0aGlzLmN1cnJlbnREYXRlID0gZGF0ZTtcbiAgICB0aGlzLnNlbGVjdGVkRGF0ZUNoYW5nZS5lbWl0KGRhdGUudG9EYXRlKCkpO1xuICB9XG5cbiAgaXNEaXNhYmxlZChkYXRlOiBNb21lbnQpOiBib29sZWFuIHtcbiAgICByZXR1cm4gKFxuICAgICAgKHRoaXMucmFuZ2UgJiYgdGhpcy5yYW5nZS5zdGFydCAmJiBkYXRlLmlzQmVmb3JlKG1vbWVudCh0aGlzLnJhbmdlLnN0YXJ0KSkgJiYgIXRoaXMuZGF0ZVV0aWxzLmlzU2FtZShtb21lbnQodGhpcy5yYW5nZS5zdGFydCkgLCBkYXRlKSlcbiAgICAgIHx8ICh0aGlzLnJhbmdlICYmIHRoaXMucmFuZ2UuZW5kICYmIGRhdGUuaXNBZnRlcihtb21lbnQodGhpcy5yYW5nZS5lbmQpKSAmJiAhdGhpcy5kYXRlVXRpbHMuaXNTYW1lKG1vbWVudCh0aGlzLnJhbmdlLmVuZCkgLCBkYXRlKSlcbiAgICAgIHx8IHRoaXMuZGlzYWJsZWREYXRlKGRhdGUudG9EYXRlKCkpXG4gICAgICB8fCAoIWRhdGUuaXNTYW1lKHRoaXMuY3VycmVudERhdGUsICdtb250aCcpICYmIHRoaXMudmlld1R5cGUgPT09ICdtb250aCcpXG4gICAgKTtcbiAgfVxufVxuIl19