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
    var NG_ON_ONIT_NAME = 'ngOnInit';
    /**
     * ngOnInit might not be implemented by this component
     * @type {?}
     */
    var ngOnInitClone = target[NG_ON_ONIT_NAME];
    Object.defineProperty(target, NG_ON_ONIT_NAME, {
        value: (/**
         * @return {?}
         */
        function () {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlyLWRlY29yYXRvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL253LWNhbGVuZGFyLyIsInNvdXJjZXMiOlsibGliL2RlY29yYXRvcnMvZGlyLWRlY29yYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxNQUFNLENBQUMsT0FBTyxVQUFVLFNBQVMsQ0FBQyxNQUFXLEVBQUUsSUFBWTs7UUFFbkQsZUFBZSxHQUFHLFVBQVU7Ozs7O1FBRzVCLGFBQWEsR0FBa0IsTUFBTSxDQUFDLGVBQWUsQ0FBQztJQUU1RCxNQUFNLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxlQUFlLEVBQUU7UUFDN0MsS0FBSzs7O1FBQUU7WUFDTCxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDZCxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO2dCQUN0QyxJQUFLLENBQUMsS0FBSyxFQUFHLEtBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRztvQkFDaEQsT0FBTyxDQUFDLEtBQUssQ0FDWCxNQUFNLENBQUMsV0FBVyxDQUFDLElBQUk7eUJBQ3ZCLE9BQUssSUFBSSxDQUFDLElBQUksQ0FBQyxpRUFBOEQsQ0FBQSxDQUM5RSxDQUFDO29CQUNGLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxLQUFLLENBQUM7aUJBQ3BCO2FBQ0Y7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEtBQUssQ0FBQzthQUNwQjtZQUNELDBEQUEwRDtZQUMxRCxJQUFJLGFBQWEsRUFBRztnQkFDbEIsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUMxQjtRQUNILENBQUMsQ0FBQTtLQUNGLENBQUMsQ0FBQztBQUNMLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkaXJlY3Rpb24odGFyZ2V0OiBhbnksIHByb3A6IHN0cmluZykge1xyXG5cclxuICBjb25zdCBOR19PTl9PTklUX05BTUUgPSAnbmdPbkluaXQnO1xyXG5cclxuICAvKiogbmdPbkluaXQgbWlnaHQgbm90IGJlIGltcGxlbWVudGVkIGJ5IHRoaXMgY29tcG9uZW50ICovXHJcbiAgY29uc3QgbmdPbkluaXRDbG9uZTogRnVuY3Rpb258bnVsbCA9IHRhcmdldFtOR19PTl9PTklUX05BTUVdO1xyXG5cclxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBOR19PTl9PTklUX05BTUUsIHtcclxuICAgIHZhbHVlOiBmdW5jdGlvbigpIHtcclxuICAgICAgaWYgKHRoaXNbcHJvcF0pIHtcclxuICAgICAgICB0aGlzW3Byb3BdID0gdGhpc1twcm9wXS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgIGlmICggWydsdHInICwgJ3J0bCddLmluZGV4T2YodGhpc1twcm9wXSkgPT09IC0xICkge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcihcclxuICAgICAgICAgICAgdGFyZ2V0LmNvbnN0cnVjdG9yLm5hbWUgK1xyXG4gICAgICAgICAgICBgOiAke3RoaXNbcHJvcF19IGlzIG5vdCB2YWxpZCBkaXJlY3Rpb24gdmFsdWVcXG52YWxpZCB2YWx1ZXM6IHsnbHRyJyAsICdydGwnfWBcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICB0aGlzW3Byb3BdID0gJ2x0cic7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXNbcHJvcF0gPSAnbHRyJztcclxuICAgICAgfVxyXG4gICAgICAvLyBDYWxsaW5nIHRoZSBvcmlnaW5hbCBuZ09uSW5pdCB3aXRoIGl0cyBvcmlnaW5hbCBjb250ZXh0XHJcbiAgICAgIGlmKCBuZ09uSW5pdENsb25lICkge1xyXG4gICAgICAgIG5nT25Jbml0Q2xvbmUuY2FsbCh0aGlzKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcbiJdfQ==