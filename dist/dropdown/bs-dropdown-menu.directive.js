"use strict";
var core_1 = require('@angular/core');
var bs_dropdown_state_1 = require('./bs-dropdown.state');
var BsDropdownMenuDirective = (function () {
    function BsDropdownMenuDirective(_state, _viewContainer, _templateRef) {
        _state.resolveDropdownMenu({
            templateRef: _templateRef,
            viewContainer: _viewContainer
        });
    }
    BsDropdownMenuDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[bsDropdownMenu],[dropdownMenu]',
                    exportAs: 'bs-dropdown-menu'
                },] },
    ];
    /** @nocollapse */
    BsDropdownMenuDirective.ctorParameters = function () { return [
        { type: bs_dropdown_state_1.BsDropdownState, },
        { type: core_1.ViewContainerRef, },
        { type: core_1.TemplateRef, },
    ]; };
    return BsDropdownMenuDirective;
}());
exports.BsDropdownMenuDirective = BsDropdownMenuDirective;
//# sourceMappingURL=bs-dropdown-menu.directive.js.map