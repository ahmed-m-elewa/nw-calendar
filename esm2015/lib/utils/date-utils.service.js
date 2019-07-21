/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as moment_ from 'moment';
import * as i0 from "@angular/core";
/** @type {?} */
const moment = moment_;
export class DateUtilsService {
    constructor() { }
    /**
     * @param {?} firstDate
     * @param {?} secondDate
     * @return {?}
     */
    isSame(firstDate, secondDate) {
        if (firstDate && secondDate) {
            return moment(firstDate).isSame(secondDate, 'date');
        }
        else {
            return false;
        }
    }
    /**
     * @param {?} date
     * @param {?} locale
     * @return {?}
     */
    getDayNum(date, locale) {
        return date.locale(locale).format('D').toString();
    }
    /**
     * @param {?} locale
     * @return {?}
     */
    getlocaleDayNames(locale) {
        moment.locale(locale);
        return moment.weekdaysShort();
    }
    /**
     * @param {?} day
     * @return {?}
     */
    isToday(day) {
        return moment().isSame(day, 'date');
    }
}
DateUtilsService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DateUtilsService.ctorParameters = () => [];
/** @nocollapse */ DateUtilsService.ngInjectableDef = i0.defineInjectable({ factory: function DateUtilsService_Factory() { return new DateUtilsService(); }, token: DateUtilsService, providedIn: "root" });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS11dGlscy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbnctY2FsZW5kYXIvIiwic291cmNlcyI6WyJsaWIvdXRpbHMvZGF0ZS11dGlscy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sS0FBSyxPQUFPLE1BQU0sUUFBUSxDQUFDOzs7TUFDNUIsTUFBTSxHQUFHLE9BQU87QUFLdEIsTUFBTSxPQUFPLGdCQUFnQjtJQUUzQixnQkFBZ0IsQ0FBQzs7Ozs7O0lBRWhCLE1BQU0sQ0FBQyxTQUFTLEVBQUcsVUFBVTtRQUM1QixJQUFJLFNBQVMsSUFBSSxVQUFVLEVBQUU7WUFDM0IsT0FBTyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRyxNQUFNLENBQUMsQ0FBQztTQUN0RDthQUFNO1lBQ0wsT0FBTyxLQUFLLENBQUM7U0FDZDtJQUNILENBQUM7Ozs7OztJQUVELFNBQVMsQ0FBQyxJQUFZLEVBQUcsTUFBTTtRQUM3QixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3BELENBQUM7Ozs7O0lBRUQsaUJBQWlCLENBQUMsTUFBTTtRQUN0QixNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3RCLE9BQU8sTUFBTSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ2hDLENBQUM7Ozs7O0lBRUQsT0FBTyxDQUFDLEdBQVc7UUFDakIsT0FBTyxNQUFNLEVBQUUsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFHLE1BQU0sQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7OztZQTFCRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgKiBhcyBtb21lbnRfIGZyb20gJ21vbWVudCc7XG5jb25zdCBtb21lbnQgPSBtb21lbnRfO1xuaW1wb3J0IHtNb21lbnR9IGZyb20gJ21vbWVudCc7XG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBEYXRlVXRpbHNTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gICBpc1NhbWUoZmlyc3REYXRlICwgc2Vjb25kRGF0ZSApIHtcbiAgICBpZiAoZmlyc3REYXRlICYmIHNlY29uZERhdGUpIHtcbiAgICAgIHJldHVybiBtb21lbnQoZmlyc3REYXRlKS5pc1NhbWUoc2Vjb25kRGF0ZSAsICdkYXRlJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBnZXREYXlOdW0oZGF0ZTogTW9tZW50ICwgbG9jYWxlKSB7XG4gICAgcmV0dXJuIGRhdGUubG9jYWxlKGxvY2FsZSkuZm9ybWF0KCdEJykudG9TdHJpbmcoKTtcbiAgfVxuXG4gIGdldGxvY2FsZURheU5hbWVzKGxvY2FsZSk6IHN0cmluZ1tdIHtcbiAgICBtb21lbnQubG9jYWxlKGxvY2FsZSk7XG4gICAgcmV0dXJuIG1vbWVudC53ZWVrZGF5c1Nob3J0KCk7XG4gIH1cblxuICBpc1RvZGF5KGRheTogTW9tZW50KSB7XG4gICAgcmV0dXJuIG1vbWVudCgpLmlzU2FtZShkYXkgLCAnZGF0ZScpO1xuICB9XG59XG4iXX0=