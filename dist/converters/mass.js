"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ounce = exports.Stone = exports.Pound = exports.Microgram = exports.Milligram = exports.Ton = exports.Gram = exports.Kilogram = void 0;
/**
 * Convert a unit to another unit
 * Mass units measurements
 * @author Carlos Ismael .Y .R
 *
 * @param value - The value to convert
 * @param Options - The options to convert
 * @returns The converted value
 * @example Kilogram.toGram(1, {"unitDisplay": "short"}) // 1000 Gr
*/
const utils_ts_1 = require("./utils.js");
const MicrogramConversion = (microgram, options = {}) => {
    const locale = (options === null || options === void 0 ? void 0 : options.locale) || 'en-US';
    const unitDisplay = (options === null || options === void 0 ? void 0 : options.unitDisplay) || 'short';
    let Unit = "µg";
    const unitsLongs = { "es-Es": "microgramo", "en-IN": "microgram", "en-US": "Microgram", "fr-FR": "microgramme", "de-DE": "mikrogramm",
        "it-IT": "microgrammo", "pt-PT": "micrograma", "ru-RU": "mикрограмм", "zh-CN": "微克", "ja-JP": "マイクログラム" };
    const unitsLongsPlurals = { "es-Es": "microgramos", "en-IN": "micrograms", "en-US": "micrograms", "fr-FR": "microgrammes", "de-DE": "mikrogramm",
        "it-IT": "microgrammi", "pt-PT": "microgramas", "ru-RU": "mикрограммы", "zh-CN": "微克", "ja-JP": "マイクログラム" };
    if (unitDisplay === "long") {
        Unit = "Microgram";
        if (microgram == 1) {
            if (Object.keys(unitsLongs).includes(locale)) {
                Unit = unitsLongs[locale];
            }
        }
        else {
            Unit = "Micrograms";
            if (Object.keys(unitsLongsPlurals).includes(locale)) {
                Unit = unitsLongsPlurals[locale];
            }
        }
    }
    const fortmat = (0, utils_ts_1._convert)(microgram, "", options);
    return `${fortmat} ${Unit}`;
};
const MilligramConversion = (microgram, options = {}) => {
    const locale = (options === null || options === void 0 ? void 0 : options.locale) || 'en-US';
    const unitDisplay = (options === null || options === void 0 ? void 0 : options.unitDisplay) || 'short';
    let Unit = "mg";
    const unitsLongs = { "es-Es": "miligramo", "en-IN": "milligram", "en-US": "Milligram", "fr-FR": "milligramme", "de-DE": "milligramm",
        "it-IT": "milligrammo", "pt-PT": "miligrama", "ru-RU": "миллиграмм", "zh-CN": "毫克", "ja-JP": "ミリグラム" };
    const unitsLongsPlurals = { "es-Es": "miligramos", "en-IN": "milligrams", "en-US": "milligrams", "fr-FR": "milligrammes", "de-DE": "milligramm",
        "it-IT": "milligrammi", "pt-PT": "miligramas", "ru-RU": "миллиграммы", "zh-CN": "毫克", "ja-JP": "ミリグラム"
    };
    if (unitDisplay === "long") {
        Unit = "milligram";
        if (microgram == 1) {
            if (Object.keys(unitsLongs).includes(locale)) {
                Unit = unitsLongs[locale];
            }
        }
        else {
            Unit = "milligrams";
            if (Object.keys(unitsLongsPlurals).includes(locale)) {
                Unit = unitsLongsPlurals[locale];
            }
        }
    }
    const fortmat = (0, utils_ts_1._convert)(microgram, "", options);
    return `${fortmat} ${Unit}`;
};
const Kilogram = {
    toGram: (kilogram = 0, options = {}) => {
        if (isNaN(kilogram)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        const Gram = (kilogram == 0) ? 0 : kilogram * 1000;
        return (0, utils_ts_1._convert)(Gram, "gram", options);
    },
    toTon: (kilogram = 0, options = {}) => {
        if (isNaN(kilogram)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        const Ton = (kilogram == 0) ? 0 : kilogram / 1000;
        return (0, utils_ts_1._convert)(Ton, "ton", options);
    },
    toMilligram: (kilogram = 0, options = {}) => {
        if (isNaN(kilogram)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        const Milligram = (kilogram == 0) ? 0 : kilogram * 1000000;
        if (Object.keys(options).length > 0 && typeof options === 'object') {
            return MilligramConversion(Milligram, options);
        }
        return Milligram;
    },
    toMicrogram: (kilogram = 0, options = {}) => {
        if (isNaN(kilogram)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        const Microgram = (kilogram == 0) ? 0 : kilogram * 1000000000;
        if (Object.keys(options).length > 0 && typeof options === 'object') {
            return MicrogramConversion(Microgram, options);
        }
        return Microgram;
    },
    toOnce: (kilogram = 0, options = {}) => {
        if (isNaN(kilogram)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        const Once = (kilogram == 0) ? 0 : kilogram * 35.274;
        return (0, utils_ts_1._convert)(Once, "ounce", options);
    },
    toPound: (kilogram = 0, options = {}) => {
        if (isNaN(kilogram)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        const Pound = (kilogram == 0) ? 0 : kilogram * 2.20462;
        return (0, utils_ts_1._convert)(Pound, "pound", options);
    },
    toStone: (kilogram = 0, options = {}) => {
        if (isNaN(kilogram)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        const Stone = (kilogram == 0) ? 0 : kilogram * 0.157473;
        return (0, utils_ts_1._convert)(Stone, "stone", options);
    }
};
exports.Kilogram = Kilogram;
const Gram = {
    toKilogram: (gram = 0, options = {}) => {
        if (isNaN(gram)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        const Kilogram = (gram == 0) ? 0 : gram / 1000;
        return (0, utils_ts_1._convert)(Kilogram, "kilogram", options);
    },
    toTon: (gram = 0, options = {}) => {
        if (isNaN(gram)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        const Ton = (gram == 0) ? 0 : gram / 1000000;
        return (0, utils_ts_1._convert)(Ton, "ton", options);
    },
    toMilligram: (gram = 0, options = {}) => {
        if (isNaN(gram)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        const Milligram = (gram == 0) ? 0 : gram * 1000;
        if (Object.keys(options).length > 0 && typeof options === 'object') {
            return MilligramConversion(Milligram, options);
        }
        return Milligram;
    },
    toMicrogram: (gram = 0, options = {}) => {
        if (isNaN(gram)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        const Microgram = (gram == 0) ? 0 : gram * 1000000;
        if (Object.keys(options).length > 0 && typeof options === 'object') {
            return MicrogramConversion(Microgram, options);
        }
        return Microgram;
    },
    toOnce: (gram = 0, options = {}) => {
        if (isNaN(gram)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        const Once = (gram == 0) ? 0 : gram * 0.035274;
        return (0, utils_ts_1._convert)(Once, "ounce", options);
    },
    toPound: (gram = 0, options = {}) => {
        if (isNaN(gram)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        const Pound = (gram == 0) ? 0 : gram * 0.00220462;
        return (0, utils_ts_1._convert)(Pound, "pound", options);
    },
    toStone: (gram = 0, options = {}) => {
        if (isNaN(gram)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        const Stone = (gram == 0) ? 0 : gram * 0.000157473;
        return (0, utils_ts_1._convert)(Stone, "stone", options);
    }
};
exports.Gram = Gram;
const Ton = {
    toKilogram: (ton = 0, options = {}) => {
        if (isNaN(ton)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        const Kilogram = (ton == 0) ? 0 : ton * 1000;
        return (0, utils_ts_1._convert)(Kilogram, "kilogram", options);
    },
    toGram: (ton = 0, options = {}) => {
        if (isNaN(ton)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        const Gram = (ton == 0) ? 0 : ton * 1000000;
        return (0, utils_ts_1._convert)(Gram, "gram", options);
    },
    toMilligram: (ton = 0, options = {}) => {
        if (isNaN(ton)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        const Milligram = (ton == 0) ? 0 : ton * 1000000000;
        if (Object.keys(options).length > 0 && typeof options === 'object') {
            return MilligramConversion(Milligram, options);
        }
        return Milligram;
    },
    toMicrogram: (ton = 0, options = {}) => {
        if (isNaN(ton)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        const Microgram = (ton == 0) ? 0 : ton * 1000000000000;
        if (Object.keys(options).length > 0 && typeof options === 'object') {
            return MicrogramConversion(Microgram, options);
        }
        return Microgram;
    },
    toOnce: (ton = 0, options = {}) => {
        if (isNaN(ton)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        const Once = (ton == 0) ? 0 : ton * 35274;
        return (0, utils_ts_1._convert)(Once, "ounce", options);
    },
    toPound: (ton = 0, options = {}) => {
        if (isNaN(ton)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        const Pound = (ton == 0) ? 0 : ton * 2204.62;
        return (0, utils_ts_1._convert)(Pound, "pound", options);
    },
    toStone: (ton = 0, options = {}) => {
        if (isNaN(ton)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        const Stone = (ton == 0) ? 0 : ton * 157.473;
        return (0, utils_ts_1._convert)(Stone, "stone", options);
    }
};
exports.Ton = Ton;
const Milligram = {
    toKilogram: (milligram = 0, options = {}) => {
        if (isNaN(milligram)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        const Kilogram = (milligram == 0) ? 0 : milligram / 1000000;
        return (0, utils_ts_1._convert)(Kilogram, "kilogram", options);
    },
    toTon: (milligram = 0, options = {}) => {
        if (isNaN(milligram)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        const Ton = (milligram == 0) ? 0 : milligram / 1000000000;
        return (0, utils_ts_1._convert)(Ton, "ton", options);
    },
    toGram: (milligram = 0, options = {}) => {
        if (isNaN(milligram)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        const Gram = (milligram == 0) ? 0 : milligram / 1000;
        return (0, utils_ts_1._convert)(Gram, "gram", options);
    },
    toMicrogram: (milligram = 0, options = {}) => {
        if (isNaN(milligram)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        const Microgram = (milligram == 0) ? 0 : milligram * 1000;
        if (Object.keys(options).length > 0 && typeof options === 'object') {
            return MicrogramConversion(Microgram, options);
        }
        return Microgram;
    },
    toOnce: (milligram = 0, options = {}) => {
        if (isNaN(milligram)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        const Once = (milligram == 0) ? 0 : milligram * 3.5274e-5;
        return (0, utils_ts_1._convert)(Once, "ounce", options);
    },
    toPound: (milligram = 0, options = {}) => {
        if (isNaN(milligram)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        const Pound = (milligram == 0) ? 0 : milligram * 2.20462e-6;
        return (0, utils_ts_1._convert)(Pound, "pound", options);
    },
    toStone: (milligram = 0, options = {}) => {
        if (isNaN(milligram)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        const Stone = (milligram == 0) ? 0 : milligram * 1.5747e-7;
        return (0, utils_ts_1._convert)(Stone, "stone", options);
    }
};
exports.Milligram = Milligram;
const Microgram = {
    toKilogram: (microgram = 0, options = {}) => {
        if (isNaN(microgram)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        const Kilogram = (microgram == 0) ? 0 : microgram / 1000000000;
        return (0, utils_ts_1._convert)(Kilogram, "kilogram", options);
    },
    toTon: (microgram = 0, options = {}) => {
        if (isNaN(microgram)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        const Ton = (microgram == 0) ? 0 : microgram / 1000000000000;
        return (0, utils_ts_1._convert)(Ton, "ton", options);
    },
    toGram: (microgram = 0, options = {}) => {
        if (isNaN(microgram)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        const Gram = (microgram == 0) ? 0 : microgram / 1000000;
        return (0, utils_ts_1._convert)(Gram, "gram", options);
    },
    toMilligram: (microgram = 0, options = {}) => {
        if (isNaN(microgram)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        const Milligram = (microgram == 0) ? 0 : microgram / 1000;
        if (Object.keys(options).length > 0 && typeof options === 'object') {
            return MilligramConversion(Milligram, options);
        }
        return Milligram;
    },
    toOnce: (microgram = 0, options = {}) => {
        if (isNaN(microgram)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        const Once = (microgram == 0) ? 0 : microgram * 3.5274e-8;
        return (0, utils_ts_1._convert)(Once, "ounce", options);
    },
    toPound: (microgram = 0, options = {}) => {
        if (isNaN(microgram)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        const Pound = (microgram == 0) ? 0 : microgram * 2.20462e-9;
        return (0, utils_ts_1._convert)(Pound, "pound", options);
    },
    toStone: (microgram = 0, options = {}) => {
        if (isNaN(microgram)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        const Stone = (microgram == 0) ? 0 : microgram * 1.5747e-10;
        return (0, utils_ts_1._convert)(Stone, "stone", options);
    }
};
exports.Microgram = Microgram;
const Pound = {
    toTon(value = 0, options = {}) {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        const Ton = (value == 0) ? 0 : value / 2204.62;
        return (0, utils_ts_1._convert)(Ton, "ton", options);
    },
    toKilogram(value = 0, options = {}) {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        const Kilogram = (value == 0) ? 0 : value / 2.20462;
        return (0, utils_ts_1._convert)(Kilogram, "kilogram", options);
    },
    toGram(value = 0, options = {}) {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        const Gram = (value == 0) ? 0 : value / 0.00220462;
        return (0, utils_ts_1._convert)(Gram, "gram", options);
    },
    toMilligram(value = 0, options = {}) {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        const Milligram = (value == 0) ? 0 : value / 2.20462e-6;
        if (Object.keys(options).length > 0 && typeof options === 'object') {
            return MilligramConversion(Milligram, options);
        }
        return Milligram;
    },
    toMicrogram(value = 0, options = {}) {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        const Microgram = (value == 0) ? 0 : value / 2.20462e-9;
        if (Object.keys(options).length > 0 && typeof options === 'object') {
            return MicrogramConversion(Microgram, options);
        }
        return Microgram;
    },
    toOnce(value = 0, options = {}) {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        const Once = (value == 0) ? 0 : value * 16;
        return (0, utils_ts_1._convert)(Once, "ounce", options);
    },
    toStone(value = 0, options = {}) {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        const Stone = (value == 0) ? 0 : value / 14;
        return (0, utils_ts_1._convert)(Stone, "stone", options);
    }
};
exports.Pound = Pound;
const Ounce = {
    toTon(value = 0, options = {}) {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        const Ton = (value == 0) ? 0 : value / 35.274;
        return (0, utils_ts_1._convert)(Ton, "ton", options);
    },
    toKilogram(value = 0, options = {}) {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        const Kilogram = (value == 0) ? 0 : value / 35.274;
        return (0, utils_ts_1._convert)(Kilogram, "kilogram", options);
    },
    toGram(value = 0, options = {}) {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        const Gram = (value == 0) ? 0 : value / 0.035274;
        return (0, utils_ts_1._convert)(Gram, "gram", options);
    },
    toMilligram(value = 0, options = {}) {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        const Milligram = (value == 0) ? 0 : value / 3.5274e-5;
        if (Object.keys(options).length > 0 && typeof options === 'object') {
            return MilligramConversion(Milligram, options);
        }
        return Milligram;
    },
    toMicrogram(value = 0, options = {}) {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        const Microgram = (value == 0) ? 0 : value / 3.5274e-8;
        if (Object.keys(options).length > 0 && typeof options === 'object') {
            return MicrogramConversion(Microgram, options);
        }
        return Microgram;
    },
    toPound(value = 0, options = {}) {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        const Pound = (value == 0) ? 0 : value / 16;
        return (0, utils_ts_1._convert)(Pound, "pound", options);
    },
    toStone(value = 0, options = {}) {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        const Stone = (value == 0) ? 0 : value / 224;
        return (0, utils_ts_1._convert)(Stone, "stone", options);
    }
};
exports.Ounce = Ounce;
const Stone = {
    toTon(value = 0, options = {}) {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        const Ton = (value == 0) ? 0 : value / 157.473;
        return (0, utils_ts_1._convert)(Ton, "ton", options);
    },
    toKilogram(value = 0, options = {}) {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        const Kilogram = (value == 0) ? 0 : value / 0.157473;
        return (0, utils_ts_1._convert)(Kilogram, "kilogram", options);
    },
    toGram(value = 0, options = {}) {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        const Gram = (value == 0) ? 0 : value / 0.000157473;
        return (0, utils_ts_1._convert)(Gram, "gram", options);
    },
    toMilligram(value = 0, options = {}) {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        const Milligram = (value == 0) ? 0 : value / 1.5747e-7;
        if (Object.keys(options).length > 0 && typeof options === 'object') {
            return MilligramConversion(Milligram, options);
        }
        return Milligram;
    },
    toMicrogram(value = 0, options = {}) {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        const Microgram = (value == 0) ? 0 : value / 1.5747e-10;
        if (Object.keys(options).length > 0 && typeof options === 'object') {
            return MicrogramConversion(Microgram, options);
        }
        return Microgram;
    },
    toOnce(value = 0, options = {}) {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        const Once = (value == 0) ? 0 : value * 224;
        return (0, utils_ts_1._convert)(Once, "ounce", options);
    },
    toPound(value = 0, options = {}) {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        const Pound = (value == 0) ? 0 : value * 14;
        return (0, utils_ts_1._convert)(Pound, "pound", options);
    }
};
exports.Stone = Stone;
//# sourceMappingURL=mass.js.map