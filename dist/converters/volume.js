"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cup = exports.Tablespoon = exports.Pint = exports.CubicMeter = exports.Milliliter = exports.Liter = exports.Gallon = exports.FluidOunce = void 0;
/**
 * Convert a unit to another unit
 * Volume units measurements
 * @author Carlos Ismael .Y .R
 * @param value - The value to convert
 * @param Options - The options to convert
 * @returns The converted value
*/
const utils_ts_1 = require("./utils.js");
const VolumeConversion = (value = 0, unit, options = {}) => {
    var _a, _b;
    const locale = (options === null || options === void 0 ? void 0 : options.locale) || "en-US";
    const unitDisplay = (options === null || options === void 0 ? void 0 : options.unitDisplay) || "short";
    let Unit = unit; // Valor predeterminado, puede cambiar según unitDisplay
    const unitsShort = {
        "cubic-meter": "m³",
        pint: "pt",
        tablespoon: "tbsp",
        cup: "cup"
    };
    const unitsLongSingular = {
        "cubic-meter": {
            "en-US": "cubic meter",
            "en-IN": "cubic meter",
            "es-ES": "metro cúbico",
            "fr-FR": "mètre cube",
            "it-IT": "metro cubo",
            "ja-JP": "立方メートル",
            "de-DE": "Kubikmeter",
            "pt-PT": "metro cúbico",
            "ru-RU": "кубический метр",
            "zh-CN": "立方米"
        },
        pint: {
            "en-US": "pint",
            "en-IN": "pint",
            "es-ES": "pinta",
            "fr-FR": "pinte",
            "it-IT": "pinta",
            "ja-JP": "パイント",
            "de-DE": "Pint",
            "pt-PT": "pinta",
            "ru-RU": "пинта",
            "zh-CN": "品脱"
        },
        tablespoon: {
            "en-US": "tablespoon",
            "en-IN": "tablespoon",
            "es-ES": "cucharada",
            "fr-FR": "cuillère à soupe",
            "it-IT": "cucchiaio",
            "ja-JP": "大さじ",
            "de-DE": "Esslöffel",
            "pt-PT": "colher de sopa",
            "ru-RU": "столовая ложка",
            "zh-CN": "汤匙"
        },
        cup: {
            "en-US": "cup",
            "en-IN": "cup",
            "es-ES": "taza",
            "fr-FR": "tasse",
            "it-IT": "tazza",
            "ja-JP": "カップ",
            "de-DE": "Tasse",
            "pt-PT": "copo",
            "ru-RU": "чашка",
            "zh-CN": "杯"
        }
    };
    const unitsLongPlural = {
        "cubic-meter": {
            "en-US": "cubic meters",
            "en-IN": "cubic meters",
            "es-ES": "metros cúbicos",
            "fr-FR": "mètres cubes",
            "it-IT": "metri cubi",
            "ja-JP": "立方メートル",
            "de-DE": "Kubikmeter",
            "pt-PT": "metros cúbicos",
            "ru-RU": "кубические метры",
            "zh-CN": "立方米"
        },
        pint: {
            "en-US": "pints",
            "en-IN": "pints",
            "es-ES": "pintas",
            "fr-FR": "pintes",
            "it-IT": "pinte",
            "ja-JP": "パイント",
            "de-DE": "Pint",
            "pt-PT": "pintas",
            "ru-RU": "пинты",
            "zh-CN": "品脱"
        },
        tablespoon: {
            "en-US": "tablespoons",
            "en-IN": "tablespoons",
            "es-ES": "cucharadas",
            "fr-FR": "cuillères à soupe",
            "it-IT": "cucchiai",
            "ja-JP": "大さじ",
            "de-DE": "Esslöffel",
            "pt-PT": "colheres de sopa",
            "ru-RU": "столовые ложки",
            "zh-CN": "汤匙"
        },
        cup: {
            "en-US": "cups",
            "en-IN": "cups",
            "es-ES": "tazas",
            "fr-FR": "tasses",
            "it-IT": "tazze",
            "ja-JP": "カップ",
            "de-DE": "Tasse",
            "pt-PT": "copos",
            "ru-RU": "чашки",
            "zh-CN": "杯"
        }
    };
    if (unitDisplay === "long") {
        if (value === 1) {
            Unit = ((_a = unitsLongSingular[unit]) === null || _a === void 0 ? void 0 : _a[locale]) || unit;
        }
        else {
            Unit = ((_b = unitsLongPlural[unit]) === null || _b === void 0 ? void 0 : _b[locale]) || unit;
        }
    }
    else {
        Unit = unitsShort[unit] || unit;
    }
    const formattedValue = new Intl.NumberFormat(locale).format(value);
    return `${formattedValue} ${Unit}`;
};
const FluidOunce = {
    toGallon(value = 0, options = {}) {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value == 0) ? 0 : value / 128;
        return (0, utils_ts_1._convert)(value, 'gallon', options);
    },
    toLiter(value = 0, options = {}) {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value == 0) ? 0 : value / 33.814;
        return (0, utils_ts_1._convert)(value, 'liter', options);
    },
    toMilliliter(value = 0, options = {}) {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value == 0) ? 0 : value * 29.574;
        return (0, utils_ts_1._convert)(value, 'milliliter', options);
    },
    toCubicMeter(value = 0, options = {}) {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value == 0) ? 0 : value / 33810;
        if (Object.keys(options).length > 0 && typeof options === 'object') {
            return VolumeConversion(value, "cubic-meter", options);
        }
        return value;
    },
    toPint(value = 0, options = {}) {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value == 0) ? 0 : value / 16;
        if (Object.keys(options).length > 0 && typeof options === 'object') {
            return VolumeConversion(value, 'pint', options);
        }
        return value;
    },
    toTablespoon(value = 0, options = {}) {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value == 0) ? 0 : value * 2;
        if (Object.keys(options).length > 0 && typeof options === 'object') {
            return VolumeConversion(value, 'tablespoon', options);
        }
        return value;
    },
    toCup(value = 0, options = {}) {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value == 0) ? 0 : value / 8.115;
        if (Object.keys(options).length > 0 && typeof options === 'object') {
            return VolumeConversion(value, 'cup', options);
        }
        return value;
    }
};
exports.FluidOunce = FluidOunce;
const Gallon = {
    toFluidOunce(value = 0, options = {}) {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value == 0) ? 0 : value * 128;
        return (0, utils_ts_1._convert)(value, 'fluid-ounce', options);
    },
    toLiter(value = 0, options = {}) {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value == 0) ? 0 : value * 3.785;
        return (0, utils_ts_1._convert)(value, 'liter', options);
    },
    toMilliliter(value = 0, options = {}) {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value == 0) ? 0 : value * 3785;
        return (0, utils_ts_1._convert)(value, 'milliliter', options);
    },
    toCubicMeter(value = 0, options = {}) {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value == 0) ? 0 : value / 264.2;
        if (Object.keys(options).length > 0 && typeof options === 'object') {
            return VolumeConversion(value, "cubic-meter", options);
        }
        return value;
    },
    toPint(value = 0, options = {}) {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value == 0) ? 0 : value * 8;
        if (Object.keys(options).length > 0 && typeof options === 'object') {
            return VolumeConversion(value, 'pint', options);
        }
        return value;
    },
    toTablespoon(value = 0, options = {}) {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value == 0) ? 0 : value * 256;
        if (Object.keys(options).length > 0 && typeof options === 'object') {
            return VolumeConversion(value, 'tablespoon', options);
        }
        return value;
    },
    toCup(value = 0, options = {}) {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value == 0) ? 0 : value * 15.773;
        if (Object.keys(options).length > 0 && typeof options === 'object') {
            return VolumeConversion(value, 'cup', options);
        }
        return value;
    }
};
exports.Gallon = Gallon;
const Liter = {
    toFluidOunce(value = 0, options = {}) {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value == 0) ? 0 : value * 33.814;
        return (0, utils_ts_1._convert)(value, 'fluid-ounce', options);
    },
    toGallon(value = 0, options = {}) {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value == 0) ? 0 : value * 3.785;
        return (0, utils_ts_1._convert)(value, 'gallon', options);
    },
    toMilliliter(value = 0, options = {}) {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value == 0) ? 0 : value * 1000;
        return (0, utils_ts_1._convert)(value, 'milliliter', options);
    },
    toCubicMeter(value = 0, options = {}) {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value == 0) ? 0 : value * 1000;
        if (Object.keys(options).length > 0 && typeof options === 'object') {
            return VolumeConversion(value, "cubic-meter", options);
        }
        return value;
    },
    toPint(value = 0, options = {}) {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value == 0) ? 0 : value * 2.113;
        if (Object.keys(options).length > 0 && typeof options === 'object') {
            return VolumeConversion(value, 'pint', options);
        }
        return value;
    },
    toTablespoon(value = 0, options = {}) {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value == 0) ? 0 : value * 67.628;
        if (Object.keys(options).length > 0 && typeof options === 'object') {
            return VolumeConversion(value, 'tablespoon', options);
        }
        return value;
    },
    toCup(value = 0, options = {}) {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value == 0) ? 0 : value * 4.167;
        if (Object.keys(options).length > 0 && typeof options === 'object') {
            return VolumeConversion(value, 'cup', options);
        }
        return value;
    }
};
exports.Liter = Liter;
const Milliliter = {
    toFluidOunce(value = 0, options = {}) {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value == 0) ? 0 : value * 29.574;
        return (0, utils_ts_1._convert)(value, 'fluid-ounce', options);
    },
    toGallon(value = 0, options = {}) {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value == 0) ? 0 : value * 3785;
        return (0, utils_ts_1._convert)(value, 'gallon', options);
    },
    toLiter(value = 0, options = {}) {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value == 0) ? 0 : value / 1000;
        return (0, utils_ts_1._convert)(value, 'liter', options);
    },
    toCubicMeter(value = 0, options = {}) {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value == 0) ? 0 : value / 1000000;
        if (Object.keys(options).length > 0 && typeof options === 'object') {
            return VolumeConversion(value, "cubic-meter", options);
        }
        return value;
    },
    toPint(value = 0, options = {}) {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value == 0) ? 0 : value / 473.2;
        if (Object.keys(options).length > 0 && typeof options === 'object') {
            return VolumeConversion(value, 'pint', options);
        }
        return value;
    },
    toTablespoon(value = 0, options = {}) {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value == 0) ? 0 : value * 14.787;
        if (Object.keys(options).length > 0 && typeof options === 'object') {
            return VolumeConversion(value, 'tablespoon', options);
        }
        return value;
    },
    toCup(value = 0, options = {}) {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value == 0) ? 0 : value / 240;
        if (Object.keys(options).length > 0 && typeof options === 'object') {
            return VolumeConversion(value, 'cup', options);
        }
        return value;
    }
};
exports.Milliliter = Milliliter;
const CubicMeter = {
    toFluidOunce(value = 0, options = {}) {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value == 0) ? 0 : value * 33810;
        return (0, utils_ts_1._convert)(value, "fluid-ounce", options);
    },
    toGallon(value = 0, options = {}) {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value == 0) ? 0 : value * 264.2;
        return (0, utils_ts_1._convert)(value, "gallon", options);
    },
    toLiter(value = 0, options = {}) {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value == 0) ? 0 : value * 1000;
        return (0, utils_ts_1._convert)(value, "liter", options);
    },
    toMilliliter(value = 0, options = {}) {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value == 0) ? 0 : value * 1000000;
        return (0, utils_ts_1._convert)(value, "milliliter", options);
    },
    toPint(value = 0, options = {}) {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value == 0) ? 0 : value * 2113;
        if (Object.keys(options).length > 0 && typeof options === 'object') {
            return VolumeConversion(value, "pint", options);
        }
        return value;
    },
    toTablespoon(value = 0, options = {}) {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value == 0) ? 0 : value * 67630;
        if (Object.keys(options).length > 0 && typeof options === 'object') {
            return VolumeConversion(value, "tablespoon", options);
        }
        return value;
    },
    toCup(value = 0, options = {}) {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value == 0) ? 0 : value * 4167;
        if (Object.keys(options).length > 0 && typeof options === 'object') {
            return VolumeConversion(value, "cup", options);
        }
        return value;
    }
};
exports.CubicMeter = CubicMeter;
const Pint = {
    toFluidOunce(value = 0, options = {}) {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value == 0) ? 0 : value * 16;
        return (0, utils_ts_1._convert)(value, 'fluid-ounce', options);
    },
    toGallon(value = 0, options = {}) {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value == 0) ? 0 : value / 8;
        return (0, utils_ts_1._convert)(value, 'gallon', options);
    },
    toLiter(value = 0, options = {}) {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value == 0) ? 0 : value / 2.113;
        return (0, utils_ts_1._convert)(value, 'liter', options);
    },
    toMilliliter(value = 0, options = {}) {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value == 0) ? 0 : value * 473.2;
        return (0, utils_ts_1._convert)(value, 'milliliter', options);
    },
    toCubicMeter(value = 0, options = {}) {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value == 0) ? 0 : value / 2113;
        if (Object.keys(options).length > 0 && typeof options === 'object') {
            return VolumeConversion(value, "cubic-meter", options);
        }
        return value;
    },
    toTablespoon(value = 0, options = {}) {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value == 0) ? 0 : value * 32;
        if (Object.keys(options).length > 0 && typeof options === 'object') {
            return VolumeConversion(value, 'tablespoon', options);
        }
        return value;
    },
    toCup(value = 0, options = {}) {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value == 0) ? 0 : value / 1.972;
        if (Object.keys(options).length > 0 && typeof options === 'object') {
            return VolumeConversion(value, 'cup', options);
        }
        return value;
    }
};
exports.Pint = Pint;
const Tablespoon = {
    toFluidOunce(value = 0, options = {}) {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value == 0) ? 0 : value / 2;
        return (0, utils_ts_1._convert)(value, 'fluid-ounce', options);
    },
    toGallon(value = 0, options = {}) {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value == 0) ? 0 : value / 256;
        return (0, utils_ts_1._convert)(value, 'gallon', options);
    },
    toLiter(value = 0, options = {}) {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value == 0) ? 0 : value / 67.628;
        return (0, utils_ts_1._convert)(value, 'liter', options);
    },
    toMilliliter(value = 0, options = {}) {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value == 0) ? 0 : value * 14.787;
        return (0, utils_ts_1._convert)(value, 'milliliter', options);
    },
    toCubicMeter(value = 0, options = {}) {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value == 0) ? 0 : value / 67630;
        if (Object.keys(options).length > 0 && typeof options === 'object') {
            return VolumeConversion(value, "cubic-meter", options);
        }
        return value;
    },
    toPint(value = 0, options = {}) {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value == 0) ? 0 : value / 32;
        if (Object.keys(options).length > 0 && typeof options === 'object') {
            return VolumeConversion(value, 'pint', options);
        }
        return value;
    },
    toCup(value = 0, options = {}) {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value == 0) ? 0 : value / 16.231;
        if (Object.keys(options).length > 0 && typeof options === 'object') {
            return VolumeConversion(value, 'cup', options);
        }
        return value;
    }
};
exports.Tablespoon = Tablespoon;
const Cup = {
    toFluidOunce(value = 0, options = {}) {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value == 0) ? 0 : value * 8.115;
        return (0, utils_ts_1._convert)(value, 'fluid-ounce', options);
    },
    toGallon(value = 0, options = {}) {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value == 0) ? 0 : value / 15.773;
        return (0, utils_ts_1._convert)(value, 'gallon', options);
    },
    toLiter(value = 0, options = {}) {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value == 0) ? 0 : value / 4.167;
        return (0, utils_ts_1._convert)(value, 'liter', options);
    },
    toMilliliter(value = 0, options = {}) {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value == 0) ? 0 : value * 240;
        return (0, utils_ts_1._convert)(value, 'milliliter', options);
    },
    toCubicMeter(value = 0, options = {}) {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value == 0) ? 0 : value / 4167;
        if (Object.keys(options).length > 0 && typeof options === 'object') {
            return VolumeConversion(value, "cubic-meter", options);
        }
        return value;
    },
    toPint(value = 0, options = {}) {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value == 0) ? 0 : value * 1.972;
        if (Object.keys(options).length > 0 && typeof options === 'object') {
            return VolumeConversion(value, 'pint', options);
        }
        return value;
    },
    toTablespoon(value = 0, options = {}) {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value == 0) ? 0 : value * 16.231;
        if (Object.keys(options).length > 0 && typeof options === 'object') {
            return VolumeConversion(value, 'tablespoon', options);
        }
        return value;
    }
};
exports.Cup = Cup;
//# sourceMappingURL=volume.js.map