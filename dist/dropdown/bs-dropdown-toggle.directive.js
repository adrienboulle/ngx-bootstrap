"use strict";
var core_1 = require('@angular/core');
var bs_dropdown_state_1 = require('./bs-dropdown.state');
var BsDropdownToggleDirective = (function () {
    function BsDropdownToggleDirective(_state, _element) {
        var _this = this;
        this._state = _state;
        this._element = _element;
        this.isDisabled = null;
        this._subscriptions = [];
        // sync is open value with state
        this._subscriptions.push(this._state
            .isOpenChange.subscribe(function (value) { return _this.isOpen = value; }));
        // populate disabled state
        this._subscriptions.push(this._state
            .isDisabledChange
            .subscribe(function (value) { return _this.isDisabled = value || null; }));
    }
    BsDropdownToggleDirective.prototype.onClick = function () {
        if (this.isDisabled) {
            return;
        }
        this._state.toggleClick.emit();
    };
    BsDropdownToggleDirective.prototype.onDocumentClick = function (event) {
        if (this._state.autoClose && event.button !== 2 &&
            !this._element.nativeElement.contains(event.target)) {
            this._state.toggleClick.emit(false);
        }
    };
    BsDropdownToggleDirective.prototype.onEsc = function () {
        if (this._state.autoClose) {
            this._state.toggleClick.emit(false);
        }
    };
    BsDropdownToggleDirective.prototype.ngOnDestroy = function () {
        for (var _i = 0, _a = this._subscriptions; _i < _a.length; _i++) {
            var sub = _a[_i];
            sub.unsubscribe();
        }
    };
    BsDropdownToggleDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[bsDropdownToggle],[dropdownToggle]',
                    exportAs: 'bs-dropdown-toggle',
                    host: {
                        '[attr.aria-haspopup]': 'true'
                    }
                },] },
    ];
    /** @nocollapse */
    BsDropdownToggleDirective.ctorParameters = function () { return [
        { type: bs_dropdown_state_1.BsDropdownState, },
        { type: core_1.ElementRef, },
    ]; };
    BsDropdownToggleDirective.propDecorators = {
        'isDisabled': [{ type: core_1.HostBinding, args: ['attr.disabled',] },],
        'isOpen': [{ type: core_1.HostBinding, args: ['attr.aria-expanded',] },],
        'onClick': [{ type: core_1.HostListener, args: ['click',] },],
        'onDocumentClick': [{ type: core_1.HostListener, args: ['document:click', ['$event'],] },],
        'onEsc': [{ type: core_1.HostListener, args: ['keyup.esc',] },],
    };
    return BsDropdownToggleDirective;
}());
exports.BsDropdownToggleDirective = BsDropdownToggleDirective;
//# sourceMappingURL=bs-dropdown-toggle.directive.js.map