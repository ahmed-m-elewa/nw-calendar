/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} target
 * @param {?} prop
 * @return {?}
 */
export default function direction(target, prop) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlyLWRlY29yYXRvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL253LWNhbGVuZGFyLyIsInNvdXJjZXMiOlsibGliL2RlY29yYXRvcnMvZGlyLWRlY29yYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxNQUFNLENBQUMsT0FBTyxVQUFVLFNBQVMsQ0FBQyxNQUFXLEVBQUUsSUFBWTs7VUFFbkQsZUFBZSxHQUFHLFVBQVU7Ozs7O1VBRzVCLGFBQWEsR0FBa0IsTUFBTSxDQUFDLGVBQWUsQ0FBQztJQUU1RCxNQUFNLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxlQUFlLEVBQUU7UUFDN0MsS0FBSzs7O1FBQUU7WUFDTCxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDZCxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO2dCQUN0QyxJQUFLLENBQUMsS0FBSyxFQUFHLEtBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRztvQkFDaEQsT0FBTyxDQUFDLEtBQUssQ0FDWCxNQUFNLENBQUMsV0FBVyxDQUFDLElBQUk7d0JBQ3ZCLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyw4REFBOEQsQ0FDOUUsQ0FBQztvQkFDRixJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBSyxDQUFDO2lCQUNwQjthQUNGO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxLQUFLLENBQUM7YUFDcEI7WUFDRCwwREFBMEQ7WUFDMUQsSUFBSSxhQUFhLEVBQUc7Z0JBQ2xCLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDMUI7UUFDSCxDQUFDLENBQUE7S0FDRixDQUFDLENBQUM7QUFDTCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGlyZWN0aW9uKHRhcmdldDogYW55LCBwcm9wOiBzdHJpbmcpIHtcclxuXHJcbiAgY29uc3QgTkdfT05fT05JVF9OQU1FID0gJ25nT25Jbml0JztcclxuXHJcbiAgLyoqIG5nT25Jbml0IG1pZ2h0IG5vdCBiZSBpbXBsZW1lbnRlZCBieSB0aGlzIGNvbXBvbmVudCAqL1xyXG4gIGNvbnN0IG5nT25Jbml0Q2xvbmU6IEZ1bmN0aW9ufG51bGwgPSB0YXJnZXRbTkdfT05fT05JVF9OQU1FXTtcclxuXHJcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgTkdfT05fT05JVF9OQU1FLCB7XHJcbiAgICB2YWx1ZTogZnVuY3Rpb24oKSB7XHJcbiAgICAgIGlmICh0aGlzW3Byb3BdKSB7XHJcbiAgICAgICAgdGhpc1twcm9wXSA9IHRoaXNbcHJvcF0udG9Mb3dlckNhc2UoKTtcclxuICAgICAgICBpZiAoIFsnbHRyJyAsICdydGwnXS5pbmRleE9mKHRoaXNbcHJvcF0pID09PSAtMSApIHtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXHJcbiAgICAgICAgICAgIHRhcmdldC5jb25zdHJ1Y3Rvci5uYW1lICtcclxuICAgICAgICAgICAgYDogJHt0aGlzW3Byb3BdfSBpcyBub3QgdmFsaWQgZGlyZWN0aW9uIHZhbHVlXFxudmFsaWQgdmFsdWVzOiB7J2x0cicgLCAncnRsJ31gXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgdGhpc1twcm9wXSA9ICdsdHInO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzW3Byb3BdID0gJ2x0cic7XHJcbiAgICAgIH1cclxuICAgICAgLy8gQ2FsbGluZyB0aGUgb3JpZ2luYWwgbmdPbkluaXQgd2l0aCBpdHMgb3JpZ2luYWwgY29udGV4dFxyXG4gICAgICBpZiggbmdPbkluaXRDbG9uZSApIHtcclxuICAgICAgICBuZ09uSW5pdENsb25lLmNhbGwodGhpcyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KTtcclxufVxyXG4iXX0=