(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('moment'), require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('nw-calendar', ['exports', 'moment', '@angular/core', '@angular/common'], factory) :
    (factory((global['nw-calendar'] = {}),global.moment_,global.ng.core,global.ng.common));
}(this, (function (exports,moment_,i0,common) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
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
    function locale(target, prop) {
        /** @type {?} */
        var validLocales = ['en', 'af', 'ar-dz', 'ar-kw', 'ar-ly', 'ar-ma', 'ar-sa', 'ar-tn', 'ar', 'az', 'be',
            'bg', 'bm', 'bn', 'bo', 'br', 'bs', 'ca', 'cs', 'cv', 'cy', 'da', 'de-at', 'de-ch', 'de', 'dv', 'el',
            'en-au', 'en-ca', 'en-gb', 'en-ie', 'en-nz', 'eo', 'es-do', 'es-us', 'es', 'et', 'eu', 'fa', 'fi',
            'fo', 'fr-ca', 'fr-ch', 'fr', 'fy', 'gd', 'gl', 'gom-latn', 'gu', 'he', 'hi', 'hr', 'hu', 'hy-am',
            'id', 'is', 'it', 'ja', 'jv', 'ka', 'kk', 'km', 'kn', 'ko', 'ky', 'lb', 'lo', 'lt', 'lv', 'me',
            'mi', 'mk', 'ml', 'mr', 'ms-my', 'ms', 'mt', 'my', 'nb', 'ne', 'nl-be', 'nl', 'nn', 'pa-in', 'pl',
            'pt-br', 'pt', 'ro', 'ru', 'sd', 'se', 'si', 'sk', 'sl', 'sq', 'sr-cyrl', 'sr', 'ss', 'sv', 'sw',
            'ta', 'te', 'tet', 'th', 'tl-ph', 'tlh', 'tr', 'tzl', 'tzm-latn', 'tzm', 'uk', 'ur', 'uz-latn', 'uz',
            'vi', 'x-pseudo', 'yo', 'zh-cn', 'zh-hk', 'zh-tw'];
        /** @type {?} */
        var NG_ON_ONIT_NAME = 'ngOnInit';
        /**
         * ngOnInit might not be implemented by this component
         * @type {?}
         */
        var ngOnInitClone = target[NG_ON_ONIT_NAME];
        Object.defineProperty(target, NG_ON_ONIT_NAME, {
            value: ( /**
             * @return {?}
             */function () {
                if (this[prop]) {
                    this[prop] = this[prop];
                    if (validLocales.indexOf(this[prop]) === -1) {
                        console.error(target.constructor.name +
                            (": " + this[prop] + " is not valid locale value\nvalid values:\nen = English\naf = Afrikaans\nar-dz = Arabic (Algeria)\nar-kw = Arabic (Kuwait)\nar-ly = Arabic (Libya)\nar-ma = Arabic (Morocco)\nar-sa = Arabic (Saudi Arabia)\nar-tn = Arabic (Tunisia)\nar = Arabic\naz = Azerbaijani\nbe = Belarusian\nbg = Bulgarian\nbm = Bambara\nbn = Bengali\nbo = Tibetan\nbr = Breton\nbs = Bosnian\nca = Catalan\ncs = Czech\ncv = Chuvash\ncy = Welsh\nda = Danish\nde-at = German (Austria)\nde-ch = German (Switzerland)\nde = German\ndv = Divehi\nel = Greek\nen-au = English (Australia)\nen-ca = English (Canada)\nen-gb = English (United Kingdom)\nen-ie = English (Ireland)\nen-nz = English (New Zealand)\neo = Esperanto\nes-do = Spanish (Dominican Republic)\nes-us = Spanish (United States)\nes = Spanish\net = Estonian\neu = Basque\nfa = Persian\nfi = Finnish\nfo = Faroese\nfr-ca = French (Canada)\nfr-ch = French (Switzerland)\nfr = French\nfy = Western Frisian\ngd = Scottish Gaelic\ngl = Galician\ngom-latn = gom (Latin)\ngu = Gujarati\nhe = Hebrew\nhi = Hindi\nhr = Croatian\nhu = Hungarian\nhy-am = Armenian (Armenia)\nid = Indonesian\nis = Icelandic\nit = Italian\nja = Japanese\njv = Javanese\nka = Georgian\nkk = Kazakh\nkm = Khmer\nkn = Kannada\nko = Korean\nky = Kirghiz\nlb = Luxembourgish\nlo = Lao\nlt = Lithuanian\nlv = Latvian\nme = me\nmi = Maori\nmk = Macedonian\nml = Malayalam\nmr = Marathi\nms-my = Malay (Malaysia)\nms = Malay\nmt = Maltese\nmy = Burmese\nnb = Norwegian Bokm\u00E5l\nne = Nepali\nnl-be = Dutch (Belgium)\nnl = Dutch\nnn = Norwegian Nynorsk\npa-in = Punjabi (India)\npl = Polish\npt-br = Portuguese (Brazil)\npt = Portuguese\nro = Romanian\nru = Russian\nsd = Sindhi\nse = Northern Sami\nsi = Sinhala\nsk = Slovak\nsl = Slovenian\nsq = Albanian\nsr-cyrl = Serbian (Cyrillic)\nsr = Serbian\nss = Swati\nsv = Swedish\nsw = Swahili\nta = Tamil\nte = Telugu\ntet = Tetum\nth = Thai\ntl-ph = Tagalog (Philippines)\ntlh = Klingon\ntr = Turkish\ntzl = tzl\ntzm-latn = tzm (Latin)\ntzm = tzm\nuk = Ukrainian\nur = Urdu\nuz-latn = Uzbek (Latin)\nuz = Uzbek\nvi = Vietnamese\nx-pseudo = x-pseudo\nyo = Yoruba\nzh-cn = Chinese (China)\nzh-hk = Chinese (Hong Kong SAR China)\nzh-tw = Chinese (Taiwan)"));
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
        var NG_ON_ONIT_NAME = 'ngOnInit';
        /**
         * ngOnInit might not be implemented by this component
         * @type {?}
         */
        var ngOnInitClone = target[NG_ON_ONIT_NAME];
        Object.defineProperty(target, NG_ON_ONIT_NAME, {
            value: ( /**
             * @return {?}
             */function () {
                if (this[prop]) {
                    this[prop] = this[prop].toLowerCase();
                    if (['ltr', 'rtl'].indexOf(this[prop]) === -1) {
                        console.error(target.constructor.name +
                            (": " + this[prop] + " is not valid direction value\nvalid values: {'ltr' , 'rtl'}"));
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
        var NG_ON_ONIT_NAME = 'ngOnInit';
        /**
         * ngOnInit might not be implemented by this component
         * @type {?}
         */
        var ngOnInitClone = target[NG_ON_ONIT_NAME];
        Object.defineProperty(target, NG_ON_ONIT_NAME, {
            value: ( /**
             * @return {?}
             */function () {
                if (this[prop]) {
                    this[prop] = this[prop].toLowerCase();
                    if (['week', 'month'].indexOf(this[prop]) === -1) {
                        console.error(target.constructor.name +
                            (": " + this[prop] + " is not valid View type value\nvalid values: {'week' , 'month'}"));
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
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        DateUtilsService.ctorParameters = function () { return []; };
        /** @nocollapse */ DateUtilsService.ngInjectableDef = i0.defineInjectable({ factory: function DateUtilsService_Factory() { return new DateUtilsService(); }, token: DateUtilsService, providedIn: "root" });
        return DateUtilsService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var moment$1 = moment_;
    var NwCalendarComponent = /** @class */ (function () {
        function NwCalendarComponent(dateUtils) {
            this.dateUtils = dateUtils;
            this.selectedDateChange = new i0.EventEmitter();
            this.navigate = new i0.EventEmitter();
            this.days = [];
            this.disabledDate = ( /**
             * @param {?} date
             * @return {?}
             */function (date) {
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
             */ function () {
                return this.currentDate.locale(this.locale).format('MMMM');
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NwCalendarComponent.prototype, "currentYear", {
            get: /**
             * @return {?}
             */ function () {
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
             */ function () {
                return this._selectedDate ? this._selectedDate.toDate() : undefined;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._selectedDate = moment$1(value);
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
                return ((this.range && this.range.start && date.isBefore(moment$1(this.range.start)) && !this.dateUtils.isSame(moment$1(this.range.start), date))
                    || (this.range && this.range.end && date.isAfter(moment$1(this.range.end)) && !this.dateUtils.isSame(moment$1(this.range.end), date))
                    || this.disabledDate(date.toDate())
                    || (!date.isSame(this.currentDate, 'month') && this.viewType === 'month'));
            };
        NwCalendarComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'nw-calendar',
                        template: "<div class=\"nw-calendar\" [ngClass]=\"{'nw-rtl-calendar': dir == 'rtl'}\">\r\n  <div class=\"nw-calendar-header row\">\r\n    <div class=\"col-4\">\r\n      <a\r\n        (click)=\"prev()\"\r\n        [ngStyle]=\"{'float': dir == 'ltr' ? 'right' : 'left'}\" style=\"cursor: pointer\"\r\n        data-toggle=\"tooltip\">\r\n        <i class=\"nw-dir fa\" [class.fa-angle-left]=\"dir == 'ltr'\" [class.fa-angle-right]=\"dir == 'rtl'\"\r\n           aria-hidden=\"true\"></i>\r\n      </a>\r\n      <a\r\n        *ngIf=\"viewType == 'month'\"\r\n        (click)=\"prev(true)\"\r\n        [ngStyle]=\"{'float': dir == 'ltr' ? 'right' : 'left'}\" style=\"cursor: pointer\">\r\n        <i class=\"nw-dir fa\" [class.fa-angle-double-left]=\"dir == 'ltr'\" [class.fa-angle-double-right]=\"dir == 'rtl'\"\r\n           aria-hidden=\"true\"></i>\r\n      </a>\r\n    </div>\r\n    <div class=\"col-4\" style=\"padding: 0.7rem 0\">\r\n      <span class=\"nw-calendar-header-txt\">{{currentMonth.toString() | uppercase}} {{ currentYear.toString()}}</span>\r\n    </div>\r\n    <div class=\"col-4\">\r\n      <a\r\n        (click)=\"next()\"\r\n        [ngStyle]=\"{'float': dir == 'ltr' ? 'left' : 'right'}\" style=\"cursor: pointer\">\r\n        <i class=\"nw-dir fa\" [class.fa-angle-right]=\"dir == 'ltr'\" [class.fa-angle-left]=\"dir == 'rtl'\"\r\n           aria-hidden=\"true\"></i>\r\n      </a>\r\n      <a\r\n        *ngIf=\"viewType == 'month'\"\r\n        (click)=\"next(true)\"\r\n        [ngStyle]=\"{'float': dir == 'ltr' ? 'left' : 'right'}\" style=\"cursor: pointer\">\r\n        <i class=\"nw-dir fa\" [class.fa-angle-double-right]=\"dir == 'ltr'\" [class.fa-angle-double-left]=\"dir == 'rtl'\"\r\n           aria-hidden=\"true\"></i>\r\n      </a>\r\n    </div>\r\n\r\n  </div>\r\n  <div class=\"row nw-calendar-body\">\r\n\r\n    <div *ngFor=\"let day of dateUtils.getlocaleDayNames(locale)\" class=\"nw-day-div\">\r\n      <div class=\"nw-calendar-day\">\r\n        <div class=\"nw-calendar-day-name\">{{day | uppercase }}</div>\r\n      </div>\r\n    </div>\r\n    <div *ngFor=\"let day of days\" class=\"nw-week-div\">\r\n    <div class=\"nw-calendar-week\">\r\n        <a style=\"cursor:pointer;\" class=\"nw-calendar-day-num\"\r\n           [class.nw-today]=\"dateUtils.isToday(day)\"\r\n           [class.nw-active-day]=\"dateUtils.isSame(selectedDate , day)\"\r\n           [class.nw-calendar-disabled-day]=\"isDisabled(day)\"\r\n           (click)=\"selectDay(day)\">\r\n          {{dateUtils.getDayNum(day , locale)}}\r\n        </a>\r\n      </div>\r\n\r\n    </div>\r\n\r\n\r\n  </div>\r\n</div>\r\n",
                        styles: ["", ".nw-calendar{font-family:'Open Sans';border:1px solid #2e83d5;min-width:280px}.nw-calendar-header{min-height:3rem;background-color:#dbe9fa;border-radius:.3rem;text-align:center;margin:.3rem}.nw-calendar-header-txt{font-family:'Open Sans';font-size:1em;font-weight:700;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:normal;text-align:center;color:#000}.nw-day-div{width:14.28571%;padding:0;display:inline-block;height:4rem}.nw-week-div{width:14.28571%;padding:0;display:inline-block;height:2.5rem}.nw-calendar-day{width:100%;height:4rem;-o-object-fit:contain;object-fit:contain;text-align:center}.nw-calendar-week{width:100%;height:3rem;-o-object-fit:contain;object-fit:contain;text-align:center}.nw-active-day{background-color:#6972ff}.nw-calendar-day-name{padding:1.5rem 0 1rem;font-family:'Open Sans';font-size:.9rem;font-weight:700;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:normal;text-align:center;color:#010101}.nw-calendar-day-num{font-family:'Open Sans';font-size:1em;text-align:center;color:#000;border-radius:50%;line-height:2rem;display:inline-block;min-width:2rem}.nw-calendar-disabled-day{pointer-events:none!important;cursor:initial!important;color:#888!important}.nw-today{text-decoration:underline!important}:focus{outline:0!important}.nw-dir{padding:.5rem .15rem;margin:.4rem;font-size:1.5rem;color:#2e83d5;border-radius:50%;cursor:pointer}.nw-calendar-body{margin:.5rem .3rem;background-color:#cdd5fa;border-radius:.5rem}.nw-rtl-calendar,.nw-rtl-calendar .col-*{direction:rtl}"]
                    }] }
        ];
        /** @nocollapse */
        NwCalendarComponent.ctorParameters = function () {
            return [
                { type: DateUtilsService }
            ];
        };
        NwCalendarComponent.propDecorators = {
            viewType: [{ type: i0.Input }],
            locale: [{ type: i0.Input }],
            dir: [{ type: i0.Input }],
            range: [{ type: i0.Input }],
            selectedDateChange: [{ type: i0.Output }],
            navigate: [{ type: i0.Output }],
            disabledDate: [{ type: i0.Input }],
            selectedDate: [{ type: i0.Input }]
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
        return NwCalendarComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NwCalendarModule = /** @class */ (function () {
        function NwCalendarModule() {
        }
        NwCalendarModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [NwCalendarComponent],
                        imports: [
                            common.CommonModule
                        ],
                        exports: [NwCalendarComponent]
                    },] }
        ];
        return NwCalendarModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.NwCalendarComponent = NwCalendarComponent;
    exports.NwCalendarModule = NwCalendarModule;
    exports.ɵa = DateUtilsService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=nw-calendar.umd.js.map