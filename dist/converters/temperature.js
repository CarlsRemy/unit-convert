"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Celsius = exports.Fahrenheit = exports.kelvin = void 0;
/**
 * Convert a unit to another unit
 * Temperature units measurements
 * @author Carlos Ismael .Y .R
 *
 * @param value - The value to convert
 * @param Options - The options to convert
 * @returns The converted value
*/
const utils_ts_1 = require("./utils.js");
const KelvinConversion = (value, options) => {
    const locale = (options === null || options === void 0 ? void 0 : options.locale) || 'en-US';
    const unitDisplay = (options === null || options === void 0 ? void 0 : options.unitDisplay) || 'short';
    let Unit = "°K";
    if (unitDisplay === "long") {
        const unitsLongSingular = {
            "es-ES": "grado kelvin", "en-US": "degree kelvin", "en-IN": "degree kelvin",
            "fr-FR": "degré kelvin", "de-DE": "kelvin", "it-IT": "kelvin", "pt-PT": "kelvin",
            "pt-BR": "kelvin", "ja-JP": "ケルビン", "ko-KR": "켈빈", "zh-CN": "开尔文",
            "ru-RU": "градус кельвина", "ar-SA": "درجة كلفن", "hi-IN": "केल्विन डिग्री",
        };
        const unitsLongPlural = {
            "es-ES": "grados kelvin", "en-US": "degrees kelvin", "en-IN": "degrees kelvin",
            "fr-FR": "degrés kelvin", "de-DE": "kelvin", "it-IT": "kelvin", "pt-PT": "kelvin",
            "pt-BR": "kelvin", "ja-JP": "ケルビン", "ko-KR": "켈빈", "zh-CN": "开尔文",
            "ru-RU": "градусов кельвина", "ar-SA": "درجة كلفن", "hi-IN": "केल्विन डिग्री",
        };
        if (value === 1) {
            Unit = unitsLongSingular[locale] || Unit;
        }
        else {
            Unit = unitsLongPlural[locale] || Unit;
        }
    }
    let Kelvin = (0, utils_ts_1._convert)(value, "", options);
    return `${Kelvin}${Unit}`;
};
const Celsius = {
    toFahrenheit(value = 0, options = {}) {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value * (9 / 5)) + 32;
        return (0, utils_ts_1._convert)(value, "fahrenheit", options);
    },
    toKelvin(value = 0, options = {}) {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = value + 273.15;
        if (Object.keys(options).length > 0 && typeof options === 'object') {
            return KelvinConversion(value, options);
        }
        return value;
    }
};
exports.Celsius = Celsius;
const Fahrenheit = {
    toCelsius(value = 0, options = {}) {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value - 32) * 5 / 9;
        return (0, utils_ts_1._convert)(value, "celsius", options);
    },
    toKelvin(value = 0, options = {}) {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value - 32) * (5 / 9) + 273.15;
        if (Object.keys(options).length > 0 && typeof options === 'object') {
            return KelvinConversion(value, options);
        }
        return value;
    }
};
exports.Fahrenheit = Fahrenheit;
const kelvin = {
    toCelsius(value = 0, options = {}) {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = value - 273.15;
        return (0, utils_ts_1._convert)(value, "celsius", options);
    },
    toFahrenheit(value = 0, options = {}) {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value - 273.15) * 9 / 5 + 32;
        return (0, utils_ts_1._convert)(value, "fahrenheit", options);
    }
};
exports.kelvin = kelvin;
//# sourceMappingURL=temperature.js.map