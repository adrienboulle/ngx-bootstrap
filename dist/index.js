"use strict";
/* tslint:disable: max-classes-per-file */
var core_1 = require('@angular/core');
var accordion_module_1 = require('./accordion/accordion.module');
var alert_module_1 = require('./alert/alert.module');
var buttons_module_1 = require('./buttons/buttons.module');
var carousel_module_1 = require('./carousel/carousel.module');
var collapse_module_1 = require('./collapse/collapse.module');
var datepicker_module_1 = require('./datepicker/datepicker.module');
var bs_dropdown_module_1 = require('./dropdown/bs-dropdown.module');
var modal_module_1 = require('./modal/modal.module');
var pagination_module_1 = require('./pagination/pagination.module');
var progressbar_module_1 = require('./progressbar/progressbar.module');
var rating_module_1 = require('./rating/rating.module');
var sortable_1 = require('./sortable');
var tabs_module_1 = require('./tabs/tabs.module');
var timepicker_module_1 = require('./timepicker/timepicker.module');
var tooltip_module_1 = require('./tooltip/tooltip.module');
var typeahead_module_1 = require('./typeahead/typeahead.module');
var popover_module_1 = require('./popover/popover.module');
var accordion_1 = require('./accordion');
exports.AccordionComponent = accordion_1.AccordionComponent;
exports.AccordionConfig = accordion_1.AccordionConfig;
exports.AccordionModule = accordion_1.AccordionModule;
exports.AccordionPanelComponent = accordion_1.AccordionPanelComponent;
var alert_1 = require('./alert');
exports.AlertComponent = alert_1.AlertComponent;
exports.AlertConfig = alert_1.AlertConfig;
exports.AlertModule = alert_1.AlertModule;
var buttons_1 = require('./buttons');
exports.ButtonCheckboxDirective = buttons_1.ButtonCheckboxDirective;
exports.ButtonRadioDirective = buttons_1.ButtonRadioDirective;
exports.ButtonsModule = buttons_1.ButtonsModule;
var carousel_1 = require('./carousel');
exports.CarouselComponent = carousel_1.CarouselComponent;
exports.CarouselConfig = carousel_1.CarouselConfig;
exports.CarouselModule = carousel_1.CarouselModule;
exports.SlideComponent = carousel_1.SlideComponent;
var collapse_1 = require('./collapse');
exports.CollapseDirective = collapse_1.CollapseDirective;
exports.CollapseModule = collapse_1.CollapseModule;
var datepicker_1 = require('./datepicker');
exports.DateFormatter = datepicker_1.DateFormatter;
exports.DatePickerComponent = datepicker_1.DatePickerComponent;
exports.DatepickerConfig = datepicker_1.DatepickerConfig;
exports.DatepickerModule = datepicker_1.DatepickerModule;
exports.DayPickerComponent = datepicker_1.DayPickerComponent;
exports.MonthPickerComponent = datepicker_1.MonthPickerComponent;
exports.YearPickerComponent = datepicker_1.YearPickerComponent;
var modal_1 = require('./modal');
exports.ModalDirective = modal_1.ModalDirective;
exports.ModalBackdropOptions = modal_1.ModalBackdropOptions;
exports.ModalBackdropComponent = modal_1.ModalBackdropComponent;
exports.ModalModule = modal_1.ModalModule;
var dropdown_1 = require('./dropdown');
exports.BsDropdownModule = dropdown_1.BsDropdownModule;
exports.BsDropdownConfig = dropdown_1.BsDropdownConfig;
exports.BsDropdownState = dropdown_1.BsDropdownState;
exports.BsDropdownContainerComponent = dropdown_1.BsDropdownContainerComponent;
exports.BsDropdownDirective = dropdown_1.BsDropdownDirective;
exports.BsDropdownMenuDirective = dropdown_1.BsDropdownMenuDirective;
exports.BsDropdownToggleDirective = dropdown_1.BsDropdownToggleDirective;
var pagination_1 = require('./pagination');
exports.PagerComponent = pagination_1.PagerComponent;
exports.PaginationComponent = pagination_1.PaginationComponent;
exports.PaginationConfig = pagination_1.PaginationConfig;
exports.PaginationModule = pagination_1.PaginationModule;
var progressbar_1 = require('./progressbar');
exports.BarComponent = progressbar_1.BarComponent;
exports.ProgressbarComponent = progressbar_1.ProgressbarComponent;
exports.ProgressbarConfig = progressbar_1.ProgressbarConfig;
exports.ProgressbarModule = progressbar_1.ProgressbarModule;
exports.ProgressDirective = progressbar_1.ProgressDirective;
var rating_1 = require('./rating');
exports.RatingComponent = rating_1.RatingComponent;
exports.RatingModule = rating_1.RatingModule;
var sortable_2 = require('./sortable');
exports.DraggableItemService = sortable_2.DraggableItemService;
exports.SortableComponent = sortable_2.SortableComponent;
exports.SortableModule = sortable_2.SortableModule;
var tabs_1 = require('./tabs');
exports.NgTranscludeDirective = tabs_1.NgTranscludeDirective;
exports.TabDirective = tabs_1.TabDirective;
exports.TabHeadingDirective = tabs_1.TabHeadingDirective;
exports.TabsetComponent = tabs_1.TabsetComponent;
exports.TabsetConfig = tabs_1.TabsetConfig;
exports.TabsModule = tabs_1.TabsModule;
var timepicker_1 = require('./timepicker');
exports.TimepickerComponent = timepicker_1.TimepickerComponent;
exports.TimepickerConfig = timepicker_1.TimepickerConfig;
exports.TimepickerModule = timepicker_1.TimepickerModule;
var tooltip_1 = require('./tooltip');
exports.TooltipConfig = tooltip_1.TooltipConfig;
exports.TooltipContainerComponent = tooltip_1.TooltipContainerComponent;
exports.TooltipDirective = tooltip_1.TooltipDirective;
exports.TooltipModule = tooltip_1.TooltipModule;
var typeahead_1 = require('./typeahead');
exports.TypeaheadOptions = typeahead_1.TypeaheadOptions;
exports.TypeaheadContainerComponent = typeahead_1.TypeaheadContainerComponent;
exports.TypeaheadDirective = typeahead_1.TypeaheadDirective;
exports.TypeaheadMatch = typeahead_1.TypeaheadMatch;
exports.TypeaheadModule = typeahead_1.TypeaheadModule;
var popover_1 = require('./popover');
exports.PopoverConfig = popover_1.PopoverConfig;
exports.PopoverContainerComponent = popover_1.PopoverContainerComponent;
exports.PopoverDirective = popover_1.PopoverDirective;
exports.PopoverModule = popover_1.PopoverModule;
var utils_1 = require('./utils');
exports.OnChange = utils_1.OnChange;
exports.LinkedList = utils_1.LinkedList;
exports.isBs3 = utils_1.isBs3;
exports.Trigger = utils_1.Trigger;
exports.Utils = utils_1.Utils;
var component_loader_1 = require('./component-loader');
exports.ComponentLoader = component_loader_1.ComponentLoader;
exports.ComponentLoaderFactory = component_loader_1.ComponentLoaderFactory;
exports.ContentRef = component_loader_1.ContentRef;
var positioning_1 = require('./positioning');
exports.Positioning = positioning_1.Positioning;
exports.PositioningService = positioning_1.PositioningService;
exports.positionElements = positioning_1.positionElements;
var MODULES = [
    accordion_module_1.AccordionModule, alert_module_1.AlertModule, buttons_module_1.ButtonsModule,
    carousel_module_1.CarouselModule, collapse_module_1.CollapseModule, datepicker_module_1.DatepickerModule,
    bs_dropdown_module_1.BsDropdownModule, modal_module_1.ModalModule, pagination_module_1.PaginationModule,
    progressbar_module_1.ProgressbarModule, popover_module_1.PopoverModule, rating_module_1.RatingModule,
    tabs_module_1.TabsModule, timepicker_module_1.TimepickerModule, tooltip_module_1.TooltipModule,
    typeahead_module_1.TypeaheadModule
];
var BsRootModule = (function () {
    function BsRootModule() {
    }
    BsRootModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [
                        accordion_module_1.AccordionModule.forRoot(), alert_module_1.AlertModule.forRoot(), buttons_module_1.ButtonsModule.forRoot(),
                        carousel_module_1.CarouselModule.forRoot(), collapse_module_1.CollapseModule.forRoot(),
                        datepicker_module_1.DatepickerModule.forRoot(),
                        bs_dropdown_module_1.BsDropdownModule.forRoot(), modal_module_1.ModalModule.forRoot(), pagination_module_1.PaginationModule.forRoot(),
                        progressbar_module_1.ProgressbarModule.forRoot(), popover_module_1.PopoverModule.forRoot(),
                        rating_module_1.RatingModule.forRoot(),
                        tabs_module_1.TabsModule.forRoot(), timepicker_module_1.TimepickerModule.forRoot(), tooltip_module_1.TooltipModule.forRoot(),
                        typeahead_module_1.TypeaheadModule.forRoot(), sortable_1.SortableModule.forRoot()
                    ],
                    exports: MODULES
                },] },
    ];
    /** @nocollapse */
    BsRootModule.ctorParameters = function () { return []; };
    return BsRootModule;
}());
exports.BsRootModule = BsRootModule;
var Ng2BootstrapModule = (function () {
    function Ng2BootstrapModule() {
    }
    Ng2BootstrapModule.forRoot = function () {
        return { ngModule: BsRootModule };
    };
    Ng2BootstrapModule.decorators = [
        { type: core_1.NgModule, args: [{ exports: MODULES },] },
    ];
    /** @nocollapse */
    Ng2BootstrapModule.ctorParameters = function () { return []; };
    return Ng2BootstrapModule;
}());
exports.Ng2BootstrapModule = Ng2BootstrapModule;
//# sourceMappingURL=index.js.map