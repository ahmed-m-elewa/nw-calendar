/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as moment_ from 'moment';
import * as i0 from "@angular/core";
/** @type {?} */
var moment = moment_;
var DateUtilsService = /** @class */ (function () {
    function DateUtilsService() {
    }
    /**
     * @param {?} firstDate
     * @param {?} secondDate
     * @return {?}
     */
    DateUtilsService.prototype.isSame = /**
     * @param {?} firstDate
     * @param {?} secondDate
     * @return {?}
     */
    function (firstDate, secondDate) {
        if (firstDate && secondDate) {
            return moment(firstDate).isSame(secondDate, 'date');
        }
        else {
            return false;
        }
    };
    /**
     * @param {?} date
     * @param {?} locale
     * @return {?}
     */
    DateUtilsService.prototype.getDayNum = /**
     * @param {?} date
     * @param {?} locale
     * @return {?}
     */
    function (date, locale) {
        return date.locale(locale).format('D').toString();
    };
    /**
     * @param {?} locale
     * @return {?}
     */
    DateUtilsService.prototype.getlocaleDayNames = /**
     * @param {?} locale
     * @return {?}
     */
    function (locale) {
        moment.locale(locale);
        return moment.weekdaysShort();
    };
    /**
     * @param {?} day
     * @return {?}
     */
    DateUtilsService.prototype.isToday = /**
     * @param {?} day
     * @return {?}
     */
    function (day) {
        return moment().isSame(day, 'date');
    };
    DateUtilsService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DateUtilsService.ctorParameters = function () { return []; };
    /** @nocollapse */ DateUtilsService.ngInjectableDef = i0.defineInjectable({ factory: function DateUtilsService_Factory() { return new DateUtilsService(); }, token: DateUtilsService, providedIn: "root" });
    return DateUtilsService;
}());
export { DateUtilsService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS11dGlscy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbnctY2FsZW5kYXIvIiwic291cmNlcyI6WyJsaWIvdXRpbHMvZGF0ZS11dGlscy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sS0FBSyxPQUFPLE1BQU0sUUFBUSxDQUFDOzs7SUFDNUIsTUFBTSxHQUFHLE9BQU87QUFFdEI7SUFLRTtJQUFnQixDQUFDOzs7Ozs7SUFFaEIsaUNBQU07Ozs7O0lBQU4sVUFBTyxTQUFTLEVBQUcsVUFBVTtRQUM1QixJQUFJLFNBQVMsSUFBSSxVQUFVLEVBQUU7WUFDM0IsT0FBTyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRyxNQUFNLENBQUMsQ0FBQztTQUN0RDthQUFNO1lBQ0wsT0FBTyxLQUFLLENBQUM7U0FDZDtJQUNILENBQUM7Ozs7OztJQUVELG9DQUFTOzs7OztJQUFULFVBQVUsSUFBWSxFQUFHLE1BQU07UUFDN0IsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNwRCxDQUFDOzs7OztJQUVELDRDQUFpQjs7OztJQUFqQixVQUFrQixNQUFNO1FBQ3RCLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdEIsT0FBTyxNQUFNLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDaEMsQ0FBQzs7Ozs7SUFFRCxrQ0FBTzs7OztJQUFQLFVBQVEsR0FBVztRQUNqQixPQUFPLE1BQU0sRUFBRSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUcsTUFBTSxDQUFDLENBQUM7SUFDdkMsQ0FBQzs7Z0JBMUJGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7OzJCQU5EO0NBK0JDLEFBM0JELElBMkJDO1NBeEJZLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIG1vbWVudF8gZnJvbSAnbW9tZW50JztcbmNvbnN0IG1vbWVudCA9IG1vbWVudF87XG5pbXBvcnQge01vbWVudH0gZnJvbSAnbW9tZW50JztcbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIERhdGVVdGlsc1NlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgIGlzU2FtZShmaXJzdERhdGUgLCBzZWNvbmREYXRlICkge1xuICAgIGlmIChmaXJzdERhdGUgJiYgc2Vjb25kRGF0ZSkge1xuICAgICAgcmV0dXJuIG1vbWVudChmaXJzdERhdGUpLmlzU2FtZShzZWNvbmREYXRlICwgJ2RhdGUnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGdldERheU51bShkYXRlOiBNb21lbnQgLCBsb2NhbGUpIHtcbiAgICByZXR1cm4gZGF0ZS5sb2NhbGUobG9jYWxlKS5mb3JtYXQoJ0QnKS50b1N0cmluZygpO1xuICB9XG5cbiAgZ2V0bG9jYWxlRGF5TmFtZXMobG9jYWxlKTogc3RyaW5nW10ge1xuICAgIG1vbWVudC5sb2NhbGUobG9jYWxlKTtcbiAgICByZXR1cm4gbW9tZW50LndlZWtkYXlzU2hvcnQoKTtcbiAgfVxuXG4gIGlzVG9kYXkoZGF5OiBNb21lbnQpIHtcbiAgICByZXR1cm4gbW9tZW50KCkuaXNTYW1lKGRheSAsICdkYXRlJyk7XG4gIH1cbn1cbiJdfQ==