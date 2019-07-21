/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} target
 * @param {?} prop
 * @return {?}
 */
export default function viewType(target, prop) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy10eXBlLWRlY29yYXRvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL253LWNhbGVuZGFyLyIsInNvdXJjZXMiOlsibGliL2RlY29yYXRvcnMvdmlldy10eXBlLWRlY29yYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxNQUFNLENBQUMsT0FBTyxVQUFVLFFBQVEsQ0FBQyxNQUFXLEVBQUUsSUFBWTs7VUFFbEQsZUFBZSxHQUFHLFVBQVU7Ozs7O1VBRzVCLGFBQWEsR0FBa0IsTUFBTSxDQUFDLGVBQWUsQ0FBQztJQUU1RCxNQUFNLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxlQUFlLEVBQUU7UUFDN0MsS0FBSzs7O1FBQUU7WUFDTCxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDZCxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO2dCQUN0QyxJQUFLLENBQUMsTUFBTSxFQUFHLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRztvQkFDbkQsT0FBTyxDQUFDLEtBQUssQ0FDWCxNQUFNLENBQUMsV0FBVyxDQUFDLElBQUk7d0JBQ3ZCLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxpRUFBaUUsQ0FDakYsQ0FBQztvQkFDRixJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsT0FBTyxDQUFDO2lCQUN0QjthQUNGO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxPQUFPLENBQUM7YUFDdEI7WUFDRCwwREFBMEQ7WUFDMUQsSUFBSSxhQUFhLEVBQUc7Z0JBQ2xCLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDMUI7UUFDSCxDQUFDLENBQUE7S0FDRixDQUFDLENBQUM7QUFDTCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmlld1R5cGUodGFyZ2V0OiBhbnksIHByb3A6IHN0cmluZykge1xyXG5cclxuICBjb25zdCBOR19PTl9PTklUX05BTUUgPSAnbmdPbkluaXQnO1xyXG5cclxuICAvKiogbmdPbkluaXQgbWlnaHQgbm90IGJlIGltcGxlbWVudGVkIGJ5IHRoaXMgY29tcG9uZW50ICovXHJcbiAgY29uc3QgbmdPbkluaXRDbG9uZTogRnVuY3Rpb258bnVsbCA9IHRhcmdldFtOR19PTl9PTklUX05BTUVdO1xyXG5cclxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBOR19PTl9PTklUX05BTUUsIHtcclxuICAgIHZhbHVlOiBmdW5jdGlvbigpIHtcclxuICAgICAgaWYgKHRoaXNbcHJvcF0pIHtcclxuICAgICAgICB0aGlzW3Byb3BdID0gdGhpc1twcm9wXS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgIGlmICggWyd3ZWVrJyAsICdtb250aCddLmluZGV4T2YodGhpc1twcm9wXSkgPT09IC0xICkge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcihcclxuICAgICAgICAgICAgdGFyZ2V0LmNvbnN0cnVjdG9yLm5hbWUgK1xyXG4gICAgICAgICAgICBgOiAke3RoaXNbcHJvcF19IGlzIG5vdCB2YWxpZCBWaWV3IHR5cGUgdmFsdWVcXG52YWxpZCB2YWx1ZXM6IHsnd2VlaycgLCAnbW9udGgnfWBcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICB0aGlzW3Byb3BdID0gJ21vbnRoJztcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpc1twcm9wXSA9ICdtb250aCc7XHJcbiAgICAgIH1cclxuICAgICAgLy8gQ2FsbGluZyB0aGUgb3JpZ2luYWwgbmdPbkluaXQgd2l0aCBpdHMgb3JpZ2luYWwgY29udGV4dFxyXG4gICAgICBpZiggbmdPbkluaXRDbG9uZSApIHtcclxuICAgICAgICBuZ09uSW5pdENsb25lLmNhbGwodGhpcyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KTtcclxufVxyXG4iXX0=