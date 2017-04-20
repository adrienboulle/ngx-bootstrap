"use strict";
var moment_1 = require('moment');
var DateFormatter = (function () {
    function DateFormatter() {
    }
    DateFormatter.prototype.format = function (date, format) {
        return moment_1.default(date.getTime()).format(format);
    };
    return DateFormatter;
}());
exports.DateFormatter = DateFormatter;
//# sourceMappingURL=date-formatter.js.map