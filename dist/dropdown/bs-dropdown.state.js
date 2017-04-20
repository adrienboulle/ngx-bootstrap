"use strict";
var core_1 = require('@angular/core');
var BsDropdownState = (function () {
    function BsDropdownState() {
        var _this = this;
        this.direction = 'down';
        this.isOpenChange = new core_1.EventEmitter();
        this.isDisabledChange = new core_1.EventEmitter();
        this.toggleClick = new core_1.EventEmitter();
        this.dropdownMenu = new Promise(function (resolve) {
            _this.resolveDropdownMenu = resolve;
        });
    }
    BsDropdownState.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    BsDropdownState.ctorParameters = function () { return []; };
    return BsDropdownState;
}());
exports.BsDropdownState = BsDropdownState;
//# sourceMappingURL=bs-dropdown.state.js.map