import { __decorate, __metadata } from 'tslib';
import * as moment_ from 'moment';
import { Injectable, NgModule, defineInjectable, EventEmitter, Component, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} target
 * @param {?} prop
 * @return {?}
 */
function locale(target, prop) {
    /** @type {?} */
    const validLocales = ['en', 'af', 'ar-dz', 'ar-kw', 'ar-ly', 'ar-ma', 'ar-sa', 'ar-tn', 'ar', 'az', 'be',
        'bg', 'bm', 'bn', 'bo', 'br', 'bs', 'ca', 'cs', 'cv', 'cy', 'da', 'de-at', 'de-ch', 'de', 'dv', 'el',
        'en-au', 'en-ca', 'en-gb', 'en-ie', 'en-nz', 'eo', 'es-do', 'es-us', 'es', 'et', 'eu', 'fa', 'fi',
        'fo', 'fr-ca', 'fr-ch', 'fr', 'fy', 'gd', 'gl', 'gom-latn', 'gu', 'he', 'hi', 'hr', 'hu', 'hy-am',
        'id', 'is', 'it', 'ja', 'jv', 'ka', 'kk', 'km', 'kn', 'ko', 'ky', 'lb', 'lo', 'lt', 'lv', 'me',
        'mi', 'mk', 'ml', 'mr', 'ms-my', 'ms', 'mt', 'my', 'nb', 'ne', 'nl-be', 'nl', 'nn', 'pa-in', 'pl',
        'pt-br', 'pt', 'ro', 'ru', 'sd', 'se', 'si', 'sk', 'sl', 'sq', 'sr-cyrl', 'sr', 'ss', 'sv', 'sw',
        'ta', 'te', 'tet', 'th', 'tl-ph', 'tlh', 'tr', 'tzl', 'tzm-latn', 'tzm', 'uk', 'ur', 'uz-latn', 'uz',
        'vi', 'x-pseudo', 'yo', 'zh-cn', 'zh-hk', 'zh-tw'];
    /** @type {?} */
    const NG_ON_ONIT_NAME = 'ngOnInit';
    /**
     * ngOnInit might not be implemented by this component
     * @type {?}
     */
    const ngOnInitClone = target[NG_ON_ONIT_NAME];
    Object.defineProperty(target, NG_ON_ONIT_NAME, {
        value: (/**
         * @return {?}
         */
        function () {
            if (this[prop]) {
                this[prop] = this[prop];
                if (validLocales.indexOf(this[prop]) === -1) {
                    console.error(target.constructor.name +
                        `: ${this[prop]} is not valid locale value\nvalid values:
en = English
af = Afrikaans
ar-dz = Arabic (Algeria)
ar-kw = Arabic (Kuwait)
ar-ly = Arabic (Libya)
ar-ma = Arabic (Morocco)
ar-sa = Arabic (Saudi Arabia)
ar-tn = Arabic (Tunisia)
ar = Arabic
az = Azerbaijani
be = Belarusian
bg = Bulgarian
bm = Bambara
bn = Bengali
bo = Tibetan
br = Breton
bs = Bosnian
ca = Catalan
cs = Czech
cv = Chuvash
cy = Welsh
da = Danish
de-at = German (Austria)
de-ch = German (Switzerland)
de = German
dv = Divehi
el = Greek
en-au = English (Australia)
en-ca = English (Canada)
en-gb = English (United Kingdom)
en-ie = English (Ireland)
en-nz = English (New Zealand)
eo = Esperanto
es-do = Spanish (Dominican Republic)
es-us = Spanish (United States)
es = Spanish
et = Estonian
eu = Basque
fa = Persian
fi = Finnish
fo = Faroese
fr-ca = French (Canada)
fr-ch = French (Switzerland)
fr = French
fy = Western Frisian
gd = Scottish Gaelic
gl = Galician
gom-latn = gom (Latin)
gu = Gujarati
he = Hebrew
hi = Hindi
hr = Croatian
hu = Hungarian
hy-am = Armenian (Armenia)
id = Indonesian
is = Icelandic
it = Italian
ja = Japanese
jv = Javanese
ka = Georgian
kk = Kazakh
km = Khmer
kn = Kannada
ko = Korean
ky = Kirghiz
lb = Luxembourgish
lo = Lao
lt = Lithuanian
lv = Latvian
me = me
mi = Maori
mk = Macedonian
ml = Malayalam
mr = Marathi
ms-my = Malay (Malaysia)
ms = Malay
mt = Maltese
my = Burmese
nb = Norwegian Bokmål
ne = Nepali
nl-be = Dutch (Belgium)
nl = Dutch
nn = Norwegian Nynorsk
pa-in = Punjabi (India)
pl = Polish
pt-br = Portuguese (Brazil)
pt = Portuguese
ro = Romanian
ru = Russian
sd = Sindhi
se = Northern Sami
si = Sinhala
sk = Slovak
sl = Slovenian
sq = Albanian
sr-cyrl = Serbian (Cyrillic)
sr = Serbian
ss = Swati
sv = Swedish
sw = Swahili
ta = Tamil
te = Telugu
tet = Tetum
th = Thai
tl-ph = Tagalog (Philippines)
tlh = Klingon
tr = Turkish
tzl = tzl
tzm-latn = tzm (Latin)
tzm = tzm
uk = Ukrainian
ur = Urdu
uz-latn = Uzbek (Latin)
uz = Uzbek
vi = Vietnamese
x-pseudo = x-pseudo
yo = Yoruba
zh-cn = Chinese (China)
zh-hk = Chinese (Hong Kong SAR China)
zh-tw = Chinese (Taiwan)`);
                    this[prop] = 'en-us';
                }
            }
            else {
                this[prop] = 'en-us';
            }
            // Calling the original ngOnInit with its original context
            if (ngOnInitClone) {
                ngOnInitClone.call(this);
            }
        })
    });
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} target
 * @param {?} prop
 * @return {?}
 */
function direction(target, prop) {
    /** @type {?} */
    const NG_ON_ONIT_NAME = 'ngOnInit';
    /**
     * ngOnInit might not be implemented by this component
     * @type {?}
     */
    const ngOnInitClone = target[NG_ON_ONIT_NAME];
    Object.defineProperty(target, NG_ON_ONIT_NAME, {
        value: (/**
         * @return {?}
         */
        function () {
            if (this[prop]) {
                this[prop] = this[prop].toLowerCase();
                if (['ltr', 'rtl'].indexOf(this[prop]) === -1) {
                    console.error(target.constructor.name +
                        `: ${this[prop]} is not valid direction value\nvalid values: {'ltr' , 'rtl'}`);
                    this[prop] = 'ltr';
                }
            }
            else {
                this[prop] = 'ltr';
            }
            // Calling the original ngOnInit with its original context
            if (ngOnInitClone) {
                ngOnInitClone.call(this);
            }
        })
    });
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} target
 * @param {?} prop
 * @return {?}
 */
function viewType(target, prop) {
    /** @type {?} */
    const NG_ON_ONIT_NAME = 'ngOnInit';
    /**
     * ngOnInit might not be implemented by this component
     * @type {?}
     */
    const ngOnInitClone = target[NG_ON_ONIT_NAME];
    Object.defineProperty(target, NG_ON_ONIT_NAME, {
        value: (/**
         * @return {?}
         */
        function () {
            if (this[prop]) {
                this[prop] = this[prop].toLowerCase();
                if (['week', 'month'].indexOf(this[prop]) === -1) {
                    console.error(target.constructor.name +
                        `: ${this[prop]} is not valid View type value\nvalid values: {'week' , 'month'}`);
                    this[prop] = 'month';
                }
            }
            else {
                this[prop] = 'month';
            }
            // Calling the original ngOnInit with its original context
            if (ngOnInitClone) {
                ngOnInitClone.call(this);
            }
        })
    });
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const moment = moment_;
class DateUtilsService {
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
/** @nocollapse */ DateUtilsService.ngInjectableDef = defineInjectable({ factory: function DateUtilsService_Factory() { return new DateUtilsService(); }, token: DateUtilsService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const moment$1 = moment_;
class NwCalendarComponent {
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
        moment$1.locale(this.locale);
        if (this.viewType === 'week') {
            this.from_date = moment$1().startOf('week');
            this.to_date = moment$1().endOf('week');
        }
        else {
            this.from_date = (moment$1().startOf('month')).startOf('week');
            this.to_date = (moment$1().endOf('month')).endOf('week').add(1, 'week');
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
        this._selectedDate = moment$1(value);
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
        return ((this.range && this.range.start && date.isBefore(moment$1(this.range.start)) && !this.dateUtils.isSame(moment$1(this.range.start), date))
            || (this.range && this.range.end && date.isAfter(moment$1(this.range.end)) && !this.dateUtils.isSame(moment$1(this.range.end), date))
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
__decorate([
    viewType,
    __metadata("design:type", String)
], NwCalendarComponent.prototype, "viewType", void 0);
__decorate([
    locale,
    __metadata("design:type", String)
], NwCalendarComponent.prototype, "locale", void 0);
__decorate([
    direction,
    __metadata("design:type", String)
], NwCalendarComponent.prototype, "dir", void 0);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NwCalendarModule {
}
NwCalendarModule.decorators = [
    { type: NgModule, args: [{
                declarations: [NwCalendarComponent],
                imports: [
                    CommonModule
                ],
                exports: [NwCalendarComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { NwCalendarComponent, NwCalendarModule, DateUtilsService as ɵa };

//# sourceMappingURL=nw-calendar.js.map