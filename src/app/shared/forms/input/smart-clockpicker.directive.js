"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var SmartClockpickerDirective = (function () {
    function SmartClockpickerDirective(el) {
        this.el = el;
        this.change = new core_1.EventEmitter();
    }
    SmartClockpickerDirective.prototype.ngOnInit = function () {
        var _this = this;
        System.import('script!clockpicker/dist/bootstrap-clockpicker.min.js').then(function () {
            _this.render();
        });
    };
    SmartClockpickerDirective.prototype.render = function () {
        var _this = this;
        $(this.el.nativeElement).clockpicker(this.smartClockpicker || {
            placement: 'top',
            donetext: 'Done',
            afterDone: function () {
                _this.change.emit(_this.el.nativeElement.value);
            }
        });
        /*$(this.el.nativeElement).clockpicker({
              afterDone: () => {
              console.log("alfter done");
                let m = this.el.nativeElement.value;
                this.change.emit(m);
              }
            });
    */
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], SmartClockpickerDirective.prototype, "smartClockpicker", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], SmartClockpickerDirective.prototype, "change", void 0);
    SmartClockpickerDirective = __decorate([
        core_1.Directive({
            selector: '[smartClockpicker]'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], SmartClockpickerDirective);
    return SmartClockpickerDirective;
}());
exports.SmartClockpickerDirective = SmartClockpickerDirective;
//# sourceMappingURL=smart-clockpicker.directive.js.map