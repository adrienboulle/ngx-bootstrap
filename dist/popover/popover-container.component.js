"use strict";
var core_1 = require('@angular/core');
var popover_config_1 = require('./popover.config');
var ng2_bootstrap_config_1 = require('../utils/ng2-bootstrap-config');
var PopoverContainerComponent = (function () {
    function PopoverContainerComponent(config) {
        Object.assign(this, config);
    }
    Object.defineProperty(PopoverContainerComponent.prototype, "isBs3", {
        get: function () {
            return ng2_bootstrap_config_1.isBs3();
        },
        enumerable: true,
        configurable: true
    });
    PopoverContainerComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'popover-container',
                    changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                    // tslint:disable-next-line
                    host: {
                        '[class]': '"popover in popover-" + placement + " " + placement',
                        '[class.show]': '!isBs3',
                        role: 'tooltip',
                        style: 'display:block;'
                    },
                    template: "\n<div class=\"popover-arrow arrow\"></div>\n<h3 class=\"popover-title\" *ngIf=\"title\">{{title}}</h3><div class=\"popover-content\"><ng-content></ng-content></div>\n    "
                },] },
    ];
    /** @nocollapse */
    PopoverContainerComponent.ctorParameters = function () { return [
        { type: popover_config_1.PopoverConfig, },
    ]; };
    PopoverContainerComponent.propDecorators = {
        'placement': [{ type: core_1.Input },],
        'title': [{ type: core_1.Input },],
    };
    return PopoverContainerComponent;
}());
exports.PopoverContainerComponent = PopoverContainerComponent;
//# sourceMappingURL=popover-container.component.js.map