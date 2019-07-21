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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy10eXBlLWRlY29yYXRvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL253LWNhbGVuZGFyLyIsInNvdXJjZXMiOlsibGliL2RlY29yYXRvcnMvdmlldy10eXBlLWRlY29yYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxNQUFNLENBQUMsT0FBTyxVQUFVLFFBQVEsQ0FBQyxNQUFXLEVBQUUsSUFBWTs7UUFFbEQsZUFBZSxHQUFHLFVBQVU7Ozs7O1FBRzVCLGFBQWEsR0FBa0IsTUFBTSxDQUFDLGVBQWUsQ0FBQztJQUU1RCxNQUFNLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxlQUFlLEVBQUU7UUFDN0MsS0FBSzs7O1FBQUU7WUFDTCxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDZCxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO2dCQUN0QyxJQUFLLENBQUMsTUFBTSxFQUFHLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRztvQkFDbkQsT0FBTyxDQUFDLEtBQUssQ0FDWCxNQUFNLENBQUMsV0FBVyxDQUFDLElBQUk7eUJBQ3ZCLE9BQUssSUFBSSxDQUFDLElBQUksQ0FBQyxvRUFBaUUsQ0FBQSxDQUNqRixDQUFDO29CQUNGLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxPQUFPLENBQUM7aUJBQ3RCO2FBQ0Y7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLE9BQU8sQ0FBQzthQUN0QjtZQUNELDBEQUEwRDtZQUMxRCxJQUFJLGFBQWEsRUFBRztnQkFDbEIsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUMxQjtRQUNILENBQUMsQ0FBQTtLQUNGLENBQUMsQ0FBQztBQUNMLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2aWV3VHlwZSh0YXJnZXQ6IGFueSwgcHJvcDogc3RyaW5nKSB7XHJcblxyXG4gIGNvbnN0IE5HX09OX09OSVRfTkFNRSA9ICduZ09uSW5pdCc7XHJcblxyXG4gIC8qKiBuZ09uSW5pdCBtaWdodCBub3QgYmUgaW1wbGVtZW50ZWQgYnkgdGhpcyBjb21wb25lbnQgKi9cclxuICBjb25zdCBuZ09uSW5pdENsb25lOiBGdW5jdGlvbnxudWxsID0gdGFyZ2V0W05HX09OX09OSVRfTkFNRV07XHJcblxyXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIE5HX09OX09OSVRfTkFNRSwge1xyXG4gICAgdmFsdWU6IGZ1bmN0aW9uKCkge1xyXG4gICAgICBpZiAodGhpc1twcm9wXSkge1xyXG4gICAgICAgIHRoaXNbcHJvcF0gPSB0aGlzW3Byb3BdLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgaWYgKCBbJ3dlZWsnICwgJ21vbnRoJ10uaW5kZXhPZih0aGlzW3Byb3BdKSA9PT0gLTEgKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKFxyXG4gICAgICAgICAgICB0YXJnZXQuY29uc3RydWN0b3IubmFtZSArXHJcbiAgICAgICAgICAgIGA6ICR7dGhpc1twcm9wXX0gaXMgbm90IHZhbGlkIFZpZXcgdHlwZSB2YWx1ZVxcbnZhbGlkIHZhbHVlczogeyd3ZWVrJyAsICdtb250aCd9YFxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIHRoaXNbcHJvcF0gPSAnbW9udGgnO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzW3Byb3BdID0gJ21vbnRoJztcclxuICAgICAgfVxyXG4gICAgICAvLyBDYWxsaW5nIHRoZSBvcmlnaW5hbCBuZ09uSW5pdCB3aXRoIGl0cyBvcmlnaW5hbCBjb250ZXh0XHJcbiAgICAgIGlmKCBuZ09uSW5pdENsb25lICkge1xyXG4gICAgICAgIG5nT25Jbml0Q2xvbmUuY2FsbCh0aGlzKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcbiJdfQ==