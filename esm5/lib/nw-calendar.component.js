/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as moment_ from 'moment';
/** @type {?} */
var moment = moment_;
import locale from './decorators/locale-decorator';
import direction from './decorators/dir-decorator';
import viewType from './decorators/view-type-decorator';
import { DateUtilsService } from './utils/date-utils.service';
var NwCalendarComponent = /** @class */ (function () {
    function NwCalendarComponent(dateUtils) {
        this.dateUtils = dateUtils;
        this.selectedDateChange = new EventEmitter();
        this.navigate = new EventEmitter();
        this.days = [];
        this.disabledDate = (/**
         * @param {?} date
         * @return {?}
         */
        function (date) {
            return false;
        });
    }
    /**
     * @return {?}
     */
    NwCalendarComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
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
    };
    /**
     * @param {?=} year
     * @return {?}
     */
    NwCalendarComponent.prototype.prev = /**
     * @param {?=} year
     * @return {?}
     */
    function (year) {
        year ? this.prevYear() : this.viewType === 'week' ? this.prevWeek() : this.prevMonth();
        // this.selectedDate = null;
        this.navigate.emit({
            start: this.from_date.toDate(),
            end: this.to_date.toDate()
        });
    };
    /**
     * @param {?=} year
     * @return {?}
     */
    NwCalendarComponent.prototype.next = /**
     * @param {?=} year
     * @return {?}
     */
    function (year) {
        year ? this.nextYear() : this.viewType === 'week' ? this.nextWeek() : this.nextMonth();
        // this.selectedDate = null;
        this.navigate.emit({
            start: this.from_date.toDate(),
            end: this.to_date.toDate()
        });
    };
    /**
     * @return {?}
     */
    NwCalendarComponent.prototype.prevWeek = /**
     * @return {?}
     */
    function () {
        this.from_date = this.from_date.clone().subtract(1, 'w');
        this.to_date = this.to_date.clone().subtract(1, 'w');
        this.initCalendar();
    };
    /**
     * @return {?}
     */
    NwCalendarComponent.prototype.nextWeek = /**
     * @return {?}
     */
    function () {
        this.from_date = this.from_date.clone().add(1, 'w');
        this.to_date = this.to_date.clone().add(1, 'w');
        this.initCalendar();
    };
    /**
     * @return {?}
     */
    NwCalendarComponent.prototype.prevMonth = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var prevMonth = this.currentDate.clone().subtract(1, 'month');
        this.from_date = (prevMonth.clone().startOf('month')).startOf('week');
        this.to_date = this.from_date.clone().add(6, 'weeks').subtract(1, 'd');
        this.initCalendar();
    };
    /**
     * @return {?}
     */
    NwCalendarComponent.prototype.nextMonth = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var nextMonth = this.currentDate.clone().add(1, 'month');
        this.from_date = (nextMonth.clone().startOf('month')).startOf('week');
        this.to_date = this.from_date.clone().add(6, 'weeks').subtract(1, 'd');
        this.initCalendar();
    };
    /**
     * @return {?}
     */
    NwCalendarComponent.prototype.prevYear = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var prevYear = this.currentDate.clone().subtract(1, 'year');
        this.from_date = (prevYear.clone().startOf('month')).startOf('week');
        this.to_date = this.from_date.clone().add(6, 'weeks').subtract(1, 'd');
        this.initCalendar();
    };
    /**
     * @return {?}
     */
    NwCalendarComponent.prototype.nextYear = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var nextYear = this.currentDate.clone().add(1, 'year');
        this.from_date = (nextYear.clone().startOf('month')).startOf('week');
        this.to_date = this.from_date.clone().add(6, 'weeks').subtract(1, 'd');
        this.initCalendar();
    };
    Object.defineProperty(NwCalendarComponent.prototype, "currentMonth", {
        get: /**
         * @return {?}
         */
        function () {
            return this.currentDate.locale(this.locale).format('MMMM');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NwCalendarComponent.prototype, "currentYear", {
        get: /**
         * @return {?}
         */
        function () {
            return this.currentDate.locale(this.locale).format('YYYY');
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @private
     * @return {?}
     */
    NwCalendarComponent.prototype.initCalendar = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var day = this.from_date;
        this.days = [];
        while (day <= this.to_date) {
            this.days.push(day);
            day = day.clone().add(1, 'd');
        }
        /** @type {?} */
        var center = this.viewType === 'week' ? 3 : 15;
        this.currentDate = this.days[center];
    };
    Object.defineProperty(NwCalendarComponent.prototype, "selectedDate", {
        get: /**
         * @return {?}
         */
        function () {
            return this._selectedDate ? this._selectedDate.toDate() : undefined;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._selectedDate = moment(value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} date
     * @return {?}
     */
    NwCalendarComponent.prototype.selectDay = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        this.selectedDate = date;
        this.currentDate = date;
        this.selectedDateChange.emit(date.toDate());
    };
    /**
     * @param {?} date
     * @return {?}
     */
    NwCalendarComponent.prototype.isDisabled = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return ((this.range && this.range.start && date.isBefore(moment(this.range.start)) && !this.dateUtils.isSame(moment(this.range.start), date))
            || (this.range && this.range.end && date.isAfter(moment(this.range.end)) && !this.dateUtils.isSame(moment(this.range.end), date))
            || this.disabledDate(date.toDate())
            || (!date.isSame(this.currentDate, 'month') && this.viewType === 'month'));
    };
    NwCalendarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nw-calendar',
                    template: "<div class=\"nw-calendar\" [ngClass]=\"{'nw-rtl-calendar': dir == 'rtl'}\">\r\n  <div class=\"nw-calendar-header row\">\r\n    <div class=\"col-4\">\r\n      <a\r\n        (click)=\"prev()\"\r\n        [ngStyle]=\"{'float': dir == 'ltr' ? 'right' : 'left'}\" style=\"cursor: pointer\"\r\n        data-toggle=\"tooltip\">\r\n        <i class=\"nw-dir fa\" [class.fa-angle-left]=\"dir == 'ltr'\" [class.fa-angle-right]=\"dir == 'rtl'\"\r\n           aria-hidden=\"true\"></i>\r\n      </a>\r\n      <a\r\n        *ngIf=\"viewType == 'month'\"\r\n        (click)=\"prev(true)\"\r\n        [ngStyle]=\"{'float': dir == 'ltr' ? 'right' : 'left'}\" style=\"cursor: pointer\">\r\n        <i class=\"nw-dir fa\" [class.fa-angle-double-left]=\"dir == 'ltr'\" [class.fa-angle-double-right]=\"dir == 'rtl'\"\r\n           aria-hidden=\"true\"></i>\r\n      </a>\r\n    </div>\r\n    <div class=\"col-4\" style=\"padding: 0.7rem 0\">\r\n      <span class=\"nw-calendar-header-txt\">{{currentMonth.toString() | uppercase}} {{ currentYear.toString()}}</span>\r\n    </div>\r\n    <div class=\"col-4\">\r\n      <a\r\n        (click)=\"next()\"\r\n        [ngStyle]=\"{'float': dir == 'ltr' ? 'left' : 'right'}\" style=\"cursor: pointer\">\r\n        <i class=\"nw-dir fa\" [class.fa-angle-right]=\"dir == 'ltr'\" [class.fa-angle-left]=\"dir == 'rtl'\"\r\n           aria-hidden=\"true\"></i>\r\n      </a>\r\n      <a\r\n        *ngIf=\"viewType == 'month'\"\r\n        (click)=\"next(true)\"\r\n        [ngStyle]=\"{'float': dir == 'ltr' ? 'left' : 'right'}\" style=\"cursor: pointer\">\r\n        <i class=\"nw-dir fa\" [class.fa-angle-double-right]=\"dir == 'ltr'\" [class.fa-angle-double-left]=\"dir == 'rtl'\"\r\n           aria-hidden=\"true\"></i>\r\n      </a>\r\n    </div>\r\n\r\n  </div>\r\n  <div class=\"row nw-calendar-body\">\r\n\r\n    <div *ngFor=\"let day of dateUtils.getlocaleDayNames(locale)\" class=\"nw-day-div\">\r\n      <div class=\"nw-calendar-day\">\r\n        <div class=\"nw-calendar-day-name\">{{day | uppercase }}</div>\r\n      </div>\r\n    </div>\r\n    <div *ngFor=\"let day of days\" class=\"nw-week-div\">\r\n    <div class=\"nw-calendar-week\">\r\n        <a style=\"cursor:pointer;\" class=\"nw-calendar-day-num\"\r\n           [class.nw-today]=\"dateUtils.isToday(day)\"\r\n           [class.nw-active-day]=\"dateUtils.isSame(selectedDate , day)\"\r\n           [class.nw-calendar-disabled-day]=\"isDisabled(day)\"\r\n           (click)=\"selectDay(day)\">\r\n          {{dateUtils.getDayNum(day , locale)}}\r\n        </a>\r\n      </div>\r\n\r\n    </div>\r\n\r\n\r\n  </div>\r\n</div>\r\n",
                    styles: ["", ".nw-calendar{font-family:'Open Sans';border:1px solid #2e83d5;min-width:280px}.nw-calendar-header{min-height:3rem;background-color:#dbe9fa;border-radius:.3rem;text-align:center;margin:.3rem}.nw-calendar-header-txt{font-family:'Open Sans';font-size:1em;font-weight:700;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:normal;text-align:center;color:#000}.nw-day-div{width:14.28571%;padding:0;display:inline-block;height:4rem}.nw-week-div{width:14.28571%;padding:0;display:inline-block;height:2.5rem}.nw-calendar-day{width:100%;height:4rem;-o-object-fit:contain;object-fit:contain;text-align:center}.nw-calendar-week{width:100%;height:3rem;-o-object-fit:contain;object-fit:contain;text-align:center}.nw-active-day{background-color:#6972ff}.nw-calendar-day-name{padding:1.5rem 0 1rem;font-family:'Open Sans';font-size:.9rem;font-weight:700;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:normal;text-align:center;color:#010101}.nw-calendar-day-num{font-family:'Open Sans';font-size:1em;text-align:center;color:#000;border-radius:50%;line-height:2rem;display:inline-block;min-width:2rem}.nw-calendar-disabled-day{pointer-events:none!important;cursor:initial!important;color:#888!important}.nw-today{text-decoration:underline!important}:focus{outline:0!important}.nw-dir{padding:.5rem .15rem;margin:.4rem;font-size:1.5rem;color:#2e83d5;border-radius:50%;cursor:pointer}.nw-calendar-body{margin:.5rem .3rem;background-color:#cdd5fa;border-radius:.5rem}.nw-rtl-calendar,.nw-rtl-calendar .col-*{direction:rtl}"]
                }] }
    ];
    /** @nocollapse */
    NwCalendarComponent.ctorParameters = function () { return [
        { type: DateUtilsService }
    ]; };
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
    return NwCalendarComponent;
}());
export { NwCalendarComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnctY2FsZW5kYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbnctY2FsZW5kYXIvIiwic291cmNlcyI6WyJsaWIvbnctY2FsZW5kYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUM3RSxPQUFPLEtBQUssT0FBTyxNQUFNLFFBQVEsQ0FBQzs7SUFDNUIsTUFBTSxHQUFHLE9BQU87QUFFdEIsT0FBTyxNQUFNLE1BQU0sK0JBQStCLENBQUM7QUFDbkQsT0FBTyxTQUFTLE1BQU0sNEJBQTRCLENBQUM7QUFDbkQsT0FBTyxRQUFRLE1BQU0sa0NBQWtDLENBQUM7QUFDeEQsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFHNUQ7SUFxQ0UsNkJBQW1CLFNBQTJCO1FBQTNCLGNBQVMsR0FBVCxTQUFTLENBQWtCO1FBYjVCLHVCQUFrQixHQUFHLElBQUksWUFBWSxFQUFRLENBQUM7UUFDOUMsYUFBUSxHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7UUFFekQsU0FBSSxHQUFhLEVBQUUsQ0FBQztRQUtYLGlCQUFZOzs7O1FBQUcsVUFBQyxJQUFVO1lBQ2pDLE9BQU8sS0FBSyxDQUFDO1FBQ2YsQ0FBQyxFQUFBO0lBR2dELENBQUM7Ozs7SUFFbEQsc0NBQVE7OztJQUFSO1FBQ0UsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDM0IsSUFBSSxJQUFJLENBQUMsUUFBUSxLQUFLLE1BQU0sRUFBRTtZQUM1QixJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sRUFBRSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUMxQyxJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sRUFBRSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUN2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QyxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUN2RSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDdEIsQ0FBQzs7OztJQUVELHVDQUFTOzs7SUFBVDs7WUFDUSxTQUFTLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLE9BQU8sQ0FBQztRQUMxRCxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN0RSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZFLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN0QixDQUFDOzs7O0lBRUQsc0NBQVE7OztJQUFSOztZQUNRLFFBQVEsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDO1FBQzdELElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3JFLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDdkUsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBRXRCLENBQUM7Ozs7SUFFRCxzQ0FBUTs7O0lBQVI7O1lBQ1EsUUFBUSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUM7UUFDeEQsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDckUsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUN2RSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVELHNCQUFJLDZDQUFZOzs7O1FBQWhCO1lBQ0UsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzdELENBQUM7OztPQUFBO0lBQ0Qsc0JBQUksNENBQVc7Ozs7UUFBZjtZQUNFLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM3RCxDQUFDOzs7T0FBQTs7Ozs7SUFFTywwQ0FBWTs7OztJQUFwQjs7WUFFTSxHQUFHLEdBQUcsSUFBSSxDQUFDLFNBQVM7UUFDeEIsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7UUFDZixPQUFPLEdBQUcsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQzFCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3BCLEdBQUcsR0FBRyxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztTQUMvQjs7WUFDSyxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsS0FBSyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtRQUNoRCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVELHNCQUNJLDZDQUFZOzs7O1FBRGhCO1lBRUUsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDdEUsQ0FBQzs7Ozs7UUFDRCxVQUFpQixLQUFXO1lBQzFCLElBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JDLENBQUM7OztPQUhBOzs7OztJQUtELHVDQUFTOzs7O0lBQVQsVUFBVSxJQUFJO1FBQ1osSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7UUFDekIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7UUFDeEIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztJQUM5QyxDQUFDOzs7OztJQUVELHdDQUFVOzs7O0lBQVYsVUFBVyxJQUFZO1FBQ3JCLE9BQU8sQ0FDTCxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQUcsSUFBSSxDQUFDLENBQUM7ZUFDbkksQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFHLElBQUksQ0FBQyxDQUFDO2VBQy9ILElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO2VBQ2hDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsT0FBTyxDQUFDLElBQUksSUFBSSxDQUFDLFFBQVEsS0FBSyxPQUFPLENBQUMsQ0FDMUUsQ0FBQztJQUNKLENBQUM7O2dCQXZKRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGFBQWE7b0JBQ3ZCLHNrRkFBeUM7O2lCQUsxQzs7OztnQkFWTyxnQkFBZ0I7OzsyQkFjckIsS0FBSzt5QkFJTCxLQUFLO3NCQUlMLEtBQUs7d0JBRUwsS0FBSztxQ0FHTCxNQUFNOzJCQUNOLE1BQU07K0JBT04sS0FBSzsrQkFrR0wsS0FBSzs7SUF0SE47UUFGQyxRQUFROzt5REFFUTtJQUlqQjtRQUZDLE1BQU07O3VEQUVRO0lBR047UUFEUixTQUFTOztvREFDZ0I7SUFxSTVCLDBCQUFDO0NBQUEsQUF4SkQsSUF3SkM7U0FoSlksbUJBQW1COzs7SUFFOUIsdUNBRWlCOztJQUVqQixxQ0FFZTs7SUFFZixrQ0FDMEI7Ozs7O0lBRTFCLG9DQUM2Qzs7Ozs7SUFFN0MsaURBQWdFOzs7OztJQUNoRSx1Q0FBeUQ7Ozs7O0lBQ3pELDRDQUE4Qjs7SUFDOUIsbUNBQW9COzs7OztJQUNwQiwwQ0FBNEI7Ozs7O0lBQzVCLHdDQUFrQjs7Ozs7SUFDbEIsc0NBQWdCOztJQUVoQiwyQ0FFQzs7SUFHVyx3Q0FBa0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0ICogYXMgbW9tZW50XyBmcm9tICdtb21lbnQnO1xuY29uc3QgbW9tZW50ID0gbW9tZW50XztcbmltcG9ydCB7TW9tZW50fSBmcm9tICdtb21lbnQnO1xuaW1wb3J0IGxvY2FsZSBmcm9tICcuL2RlY29yYXRvcnMvbG9jYWxlLWRlY29yYXRvcic7XG5pbXBvcnQgZGlyZWN0aW9uIGZyb20gJy4vZGVjb3JhdG9ycy9kaXItZGVjb3JhdG9yJztcbmltcG9ydCB2aWV3VHlwZSBmcm9tICcuL2RlY29yYXRvcnMvdmlldy10eXBlLWRlY29yYXRvcic7XG5pbXBvcnQge0RhdGVVdGlsc1NlcnZpY2V9IGZyb20gJy4vdXRpbHMvZGF0ZS11dGlscy5zZXJ2aWNlJztcbmltcG9ydCB7bndEaXJlY3Rpb24sIE53UmFuZ2UsIG53Vmlld30gZnJvbSAnLi90eXBlcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ253LWNhbGVuZGFyJyxcbiAgdGVtcGxhdGVVcmw6ICdudy1jYWxlbmRhci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogW1xuICAgICcuL2ltcG9ydHMuY3NzJyxcbiAgICAnbnctY2FsZW5kYXIuY29tcG9uZW50LmNzcydcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBOd0NhbGVuZGFyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBAdmlld1R5cGVcbiAgQElucHV0KClcbiAgdmlld1R5cGU6IG53VmlldztcblxuICBAbG9jYWxlXG4gIEBJbnB1dCgpXG4gIGxvY2FsZTogc3RyaW5nO1xuXG4gIEBkaXJlY3Rpb25cbiAgQElucHV0KCkgZGlyOiBud0RpcmVjdGlvbjtcblxuICBASW5wdXQoKVxuICBwcml2YXRlIHJhbmdlOiB7c3RhcnQ/OiBEYXRlICwgIGVuZD86IERhdGUgfTtcblxuICBAT3V0cHV0KCkgcHJpdmF0ZSBzZWxlY3RlZERhdGVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPERhdGU+KCk7XG4gIEBPdXRwdXQoKSBwcml2YXRlIG5hdmlnYXRlID0gbmV3IEV2ZW50RW1pdHRlcjxOd1JhbmdlPigpO1xuICBwcml2YXRlIF9zZWxlY3RlZERhdGU6IE1vbWVudDtcbiAgZGF5czogTW9tZW50W10gPSBbXTtcbiAgcHJpdmF0ZSBjdXJyZW50RGF0ZTogTW9tZW50O1xuICBwcml2YXRlIGZyb21fZGF0ZTtcbiAgcHJpdmF0ZSB0b19kYXRlO1xuXG4gIEBJbnB1dCgpIGRpc2FibGVkRGF0ZSA9IChkYXRlOiBEYXRlKSA9PiB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZGF0ZVV0aWxzOiBEYXRlVXRpbHNTZXJ2aWNlKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIG1vbWVudC5sb2NhbGUodGhpcy5sb2NhbGUpO1xuICAgIGlmICh0aGlzLnZpZXdUeXBlID09PSAnd2VlaycpIHtcbiAgICAgIHRoaXMuZnJvbV9kYXRlID0gbW9tZW50KCkuc3RhcnRPZignd2VlaycpO1xuICAgICAgdGhpcy50b19kYXRlID0gbW9tZW50KCkuZW5kT2YoJ3dlZWsnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5mcm9tX2RhdGUgPSAobW9tZW50KCkuc3RhcnRPZignbW9udGgnKSkuc3RhcnRPZignd2VlaycpO1xuICAgICAgdGhpcy50b19kYXRlID0gKG1vbWVudCgpLmVuZE9mKCdtb250aCcpKS5lbmRPZignd2VlaycpLmFkZCgxLCAnd2VlaycpO1xuICAgIH1cbiAgICB0aGlzLmluaXRDYWxlbmRhcigpO1xuICB9XG5cbiAgcHJldih5ZWFyPykge1xuICAgIHllYXIgPyB0aGlzLnByZXZZZWFyKCkgOiB0aGlzLnZpZXdUeXBlID09PSAnd2VlaycgPyB0aGlzLnByZXZXZWVrKCkgOiB0aGlzLnByZXZNb250aCgpO1xuICAgIC8vIHRoaXMuc2VsZWN0ZWREYXRlID0gbnVsbDtcbiAgICB0aGlzLm5hdmlnYXRlLmVtaXQoe1xuICAgICAgc3RhcnQ6IHRoaXMuZnJvbV9kYXRlLnRvRGF0ZSgpLFxuICAgICAgZW5kOiB0aGlzLnRvX2RhdGUudG9EYXRlKClcbiAgICB9KTtcbiAgfVxuXG4gIG5leHQoeWVhcj8pIHtcbiAgICB5ZWFyID8gdGhpcy5uZXh0WWVhcigpIDogdGhpcy52aWV3VHlwZSA9PT0gJ3dlZWsnID8gdGhpcy5uZXh0V2VlaygpIDogdGhpcy5uZXh0TW9udGgoKTtcbiAgICAvLyB0aGlzLnNlbGVjdGVkRGF0ZSA9IG51bGw7XG4gICAgdGhpcy5uYXZpZ2F0ZS5lbWl0KHtcbiAgICAgIHN0YXJ0OiB0aGlzLmZyb21fZGF0ZS50b0RhdGUoKSxcbiAgICAgIGVuZDogdGhpcy50b19kYXRlLnRvRGF0ZSgpXG4gICAgfSk7XG4gIH1cblxuXG4gICBwcmV2V2VlaygpIHtcbiAgICB0aGlzLmZyb21fZGF0ZSA9IHRoaXMuZnJvbV9kYXRlLmNsb25lKCkuc3VidHJhY3QoMSwgJ3cnKTtcbiAgICB0aGlzLnRvX2RhdGUgPSB0aGlzLnRvX2RhdGUuY2xvbmUoKS5zdWJ0cmFjdCgxLCAndycpO1xuICAgIHRoaXMuaW5pdENhbGVuZGFyKCk7XG4gIH1cblxuICBuZXh0V2VlaygpIHtcbiAgICB0aGlzLmZyb21fZGF0ZSA9IHRoaXMuZnJvbV9kYXRlLmNsb25lKCkuYWRkKDEsICd3Jyk7XG4gICAgdGhpcy50b19kYXRlID0gdGhpcy50b19kYXRlLmNsb25lKCkuYWRkKDEsICd3Jyk7XG4gICAgdGhpcy5pbml0Q2FsZW5kYXIoKTtcbiAgfVxuXG4gIHByZXZNb250aCgpIHtcbiAgICBjb25zdCBwcmV2TW9udGggPSB0aGlzLmN1cnJlbnREYXRlLmNsb25lKCkuc3VidHJhY3QoMSwgJ21vbnRoJyk7XG4gICAgdGhpcy5mcm9tX2RhdGUgPSAocHJldk1vbnRoLmNsb25lKCkuc3RhcnRPZignbW9udGgnKSkuc3RhcnRPZignd2VlaycpO1xuICAgIHRoaXMudG9fZGF0ZSA9IHRoaXMuZnJvbV9kYXRlLmNsb25lKCkuYWRkKDYsICd3ZWVrcycpLnN1YnRyYWN0KDEsICdkJyk7XG4gICAgdGhpcy5pbml0Q2FsZW5kYXIoKTtcbiAgfVxuXG4gIG5leHRNb250aCgpIHtcbiAgICBjb25zdCBuZXh0TW9udGggPSB0aGlzLmN1cnJlbnREYXRlLmNsb25lKCkuYWRkKDEsICdtb250aCcpO1xuICAgIHRoaXMuZnJvbV9kYXRlID0gKG5leHRNb250aC5jbG9uZSgpLnN0YXJ0T2YoJ21vbnRoJykpLnN0YXJ0T2YoJ3dlZWsnKTtcbiAgICB0aGlzLnRvX2RhdGUgPSB0aGlzLmZyb21fZGF0ZS5jbG9uZSgpLmFkZCg2LCAnd2Vla3MnKS5zdWJ0cmFjdCgxLCAnZCcpO1xuICAgIHRoaXMuaW5pdENhbGVuZGFyKCk7XG4gIH1cblxuICBwcmV2WWVhcigpIHtcbiAgICBjb25zdCBwcmV2WWVhciA9IHRoaXMuY3VycmVudERhdGUuY2xvbmUoKS5zdWJ0cmFjdCgxLCAneWVhcicpO1xuICAgIHRoaXMuZnJvbV9kYXRlID0gKHByZXZZZWFyLmNsb25lKCkuc3RhcnRPZignbW9udGgnKSkuc3RhcnRPZignd2VlaycpO1xuICAgIHRoaXMudG9fZGF0ZSA9IHRoaXMuZnJvbV9kYXRlLmNsb25lKCkuYWRkKDYsICd3ZWVrcycpLnN1YnRyYWN0KDEsICdkJyk7XG4gICAgdGhpcy5pbml0Q2FsZW5kYXIoKTtcblxuICB9XG5cbiAgbmV4dFllYXIoKSB7XG4gICAgY29uc3QgbmV4dFllYXIgPSB0aGlzLmN1cnJlbnREYXRlLmNsb25lKCkuYWRkKDEsICd5ZWFyJyk7XG4gICAgdGhpcy5mcm9tX2RhdGUgPSAobmV4dFllYXIuY2xvbmUoKS5zdGFydE9mKCdtb250aCcpKS5zdGFydE9mKCd3ZWVrJyk7XG4gICAgdGhpcy50b19kYXRlID0gdGhpcy5mcm9tX2RhdGUuY2xvbmUoKS5hZGQoNiwgJ3dlZWtzJykuc3VidHJhY3QoMSwgJ2QnKTtcbiAgICB0aGlzLmluaXRDYWxlbmRhcigpO1xuICB9XG5cbiAgZ2V0IGN1cnJlbnRNb250aCgpIHtcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50RGF0ZS5sb2NhbGUodGhpcy5sb2NhbGUpLmZvcm1hdCgnTU1NTScpO1xuICB9XG4gIGdldCBjdXJyZW50WWVhcigpIHtcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50RGF0ZS5sb2NhbGUodGhpcy5sb2NhbGUpLmZvcm1hdCgnWVlZWScpO1xuICB9XG5cbiAgcHJpdmF0ZSBpbml0Q2FsZW5kYXIoKSB7XG5cbiAgICBsZXQgZGF5ID0gdGhpcy5mcm9tX2RhdGU7XG4gICAgdGhpcy5kYXlzID0gW107XG4gICAgd2hpbGUgKGRheSA8PSB0aGlzLnRvX2RhdGUpIHtcbiAgICAgIHRoaXMuZGF5cy5wdXNoKGRheSk7XG4gICAgICBkYXkgPSBkYXkuY2xvbmUoKS5hZGQoMSwgJ2QnKTtcbiAgICB9XG4gICAgY29uc3QgY2VudGVyID0gdGhpcy52aWV3VHlwZSA9PT0gJ3dlZWsnID8gMyA6IDE1O1xuICAgIHRoaXMuY3VycmVudERhdGUgPSB0aGlzLmRheXNbY2VudGVyXTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIGdldCBzZWxlY3RlZERhdGUoKTogRGF0ZSB7XG4gICAgcmV0dXJuIHRoaXMuX3NlbGVjdGVkRGF0ZSA/IHRoaXMuX3NlbGVjdGVkRGF0ZS50b0RhdGUoKSA6IHVuZGVmaW5lZDtcbiAgfVxuICBzZXQgc2VsZWN0ZWREYXRlKHZhbHVlOiBEYXRlKSB7XG4gICAgdGhpcy5fc2VsZWN0ZWREYXRlID0gbW9tZW50KHZhbHVlKTtcbiAgfVxuXG4gIHNlbGVjdERheShkYXRlKSB7XG4gICAgdGhpcy5zZWxlY3RlZERhdGUgPSBkYXRlO1xuICAgIHRoaXMuY3VycmVudERhdGUgPSBkYXRlO1xuICAgIHRoaXMuc2VsZWN0ZWREYXRlQ2hhbmdlLmVtaXQoZGF0ZS50b0RhdGUoKSk7XG4gIH1cblxuICBpc0Rpc2FibGVkKGRhdGU6IE1vbWVudCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoXG4gICAgICAodGhpcy5yYW5nZSAmJiB0aGlzLnJhbmdlLnN0YXJ0ICYmIGRhdGUuaXNCZWZvcmUobW9tZW50KHRoaXMucmFuZ2Uuc3RhcnQpKSAmJiAhdGhpcy5kYXRlVXRpbHMuaXNTYW1lKG1vbWVudCh0aGlzLnJhbmdlLnN0YXJ0KSAsIGRhdGUpKVxuICAgICAgfHwgKHRoaXMucmFuZ2UgJiYgdGhpcy5yYW5nZS5lbmQgJiYgZGF0ZS5pc0FmdGVyKG1vbWVudCh0aGlzLnJhbmdlLmVuZCkpICYmICF0aGlzLmRhdGVVdGlscy5pc1NhbWUobW9tZW50KHRoaXMucmFuZ2UuZW5kKSAsIGRhdGUpKVxuICAgICAgfHwgdGhpcy5kaXNhYmxlZERhdGUoZGF0ZS50b0RhdGUoKSlcbiAgICAgIHx8ICghZGF0ZS5pc1NhbWUodGhpcy5jdXJyZW50RGF0ZSwgJ21vbnRoJykgJiYgdGhpcy52aWV3VHlwZSA9PT0gJ21vbnRoJylcbiAgICApO1xuICB9XG59XG4iXX0=