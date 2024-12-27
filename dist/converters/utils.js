"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports._convert = exports.unitDisplay = void 0;
var unitDisplay;
(function (unitDisplay) {
    unitDisplay["short"] = "short";
    unitDisplay["long"] = "long";
    unitDisplay["narrow"] = "narrow";
})(unitDisplay || (exports.unitDisplay = unitDisplay = {}));
const fortnight = (locale = "en", style = "short") => {
    locale = locale.split('-')[0]; // Get the language code
    let unit = '';
    switch (locale) {
        case 'es':
            unit = style === 'long' ? 'quincenas' : 'quinc';
            break;
        case 'en':
            unit = style === 'long' ? 'fortnights' : 'fort';
            break;
        case 'fr':
            unit = style === 'long' ? 'quinzaines' : 'quinz';
            break;
        default:
            unit = style === 'long' ? 'fortnights' : 'fort'; // Default to English if locale not recognized
            break;
    }
    return unit;
};
const _format = (value = 0, Unit = "", options = {}) => {
    const locale = (options === null || options === void 0 ? void 0 : options.locale) || 'en-US';
    const unitDisplay = (options === null || options === void 0 ? void 0 : options.unitDisplay) || 'short';
    if (Unit === 'fortnight') {
        Unit = fortnight(locale, unitDisplay);
        return `${value} ${(unitDisplay == "long" && value == 1) ? Unit.substring(0, Unit.length - 1) : Unit}`;
    }
    const _options = {};
    if (Unit !== "") {
        _options.style = 'unit';
        _options.unitDisplay = unitDisplay;
        if (Object(options).hasOwnProperty('maximumFractionDigits')) {
            _options.maximumFractionDigits = options.maximumFractionDigits;
        }
        _options.unit = Unit;
    }
    if (Object(options).hasOwnProperty('minimumFractionDigits')) {
        _options.minimumFractionDigits = options.minimumFractionDigits;
    }
    if (Object(options).hasOwnProperty('useGrouping')) {
        _options.useGrouping = options.useGrouping;
    }
    const formatter = new Intl.NumberFormat(locale, _options);
    return formatter.format(value);
};
/**
 *
 * @param value
 * @param unit
 * @param options
 * @returns {string | number}
 * @module _convert
 */
const _convert = (value = 0, unit = "", options = {}) => {
    if (Object.keys(options).length > 0 && typeof options === 'object') {
        return _format(value, unit, options);
    }
    return value;
};
exports._convert = _convert;
//# sourceMappingURL=utils.js.map