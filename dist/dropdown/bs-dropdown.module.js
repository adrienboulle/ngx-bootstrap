"use strict";
var core_1 = require('@angular/core');
var component_loader_1 = require('../component-loader');
var positioning_1 = require('../positioning');
var bs_dropdown_container_component_1 = require('./bs-dropdown-container.component');
var bs_dropdown_menu_directive_1 = require('./bs-dropdown-menu.directive');
var bs_dropdown_toggle_directive_1 = require('./bs-dropdown-toggle.directive');
var bs_dropdown_config_1 = require('./bs-dropdown.config');
var bs_dropdown_directive_1 = require('./bs-dropdown.directive');
var bs_dropdown_state_1 = require('./bs-dropdown.state');
var BsDropdownModule = (function () {
    function BsDropdownModule() {
    }
    BsDropdownModule.forRoot = function (config) {
        return {
            ngModule: BsDropdownModule, providers: [
                component_loader_1.ComponentLoaderFactory,
                positioning_1.PositioningService,
                bs_dropdown_state_1.BsDropdownState,
                { provide: bs_dropdown_config_1.BsDropdownConfig, useValue: config ? config : { autoClose: true } }
            ]
        };
    };
    ;
    BsDropdownModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [
                        bs_dropdown_menu_directive_1.BsDropdownMenuDirective,
                        bs_dropdown_toggle_directive_1.BsDropdownToggleDirective,
                        bs_dropdown_container_component_1.BsDropdownContainerComponent,
                        bs_dropdown_directive_1.BsDropdownDirective
                    ],
                    exports: [
                        bs_dropdown_menu_directive_1.BsDropdownMenuDirective,
                        bs_dropdown_toggle_directive_1.BsDropdownToggleDirective,
                        bs_dropdown_directive_1.BsDropdownDirective
                    ],
                    entryComponents: [bs_dropdown_container_component_1.BsDropdownContainerComponent]
                },] },
    ];
    /** @nocollapse */
    BsDropdownModule.ctorParameters = function () { return []; };
    return BsDropdownModule;
}());
exports.BsDropdownModule = BsDropdownModule;
//# sourceMappingURL=bs-dropdown.module.js.map