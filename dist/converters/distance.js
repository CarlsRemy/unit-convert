"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Foot = exports.Yard = exports.Mile = exports.Kilometer = exports.Meter = exports.Centimeter = exports.Millimeter = exports.Inch = void 0;
/**
 * Convert a unit to another unit
 * @author Carlos Ismael .Y .R
 *
 * @param value - The value to convert
 * @param Options - The options to convert
 * @returns The converted value
 * @example Meter.toKilometer(1000, {"unitDisplay": "short"}) // 1 km
*/
const utils_ts_1 = require("./utils.js");
;
const Inch = {
    toMicrometer: (inch = 0, options = {}) => {
        if (isNaN(inch)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        const Micrometers = (inch == 0) ? 0 : inch * 25400;
        return (0, utils_ts_1._convert)(Micrometers, 'micrometer', options);
    },
    toNanometer: (inch = 0, options = {}) => {
        if (isNaN(inch)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        const Nanometers = (inch == 0) ? 0 : inch * 25400000;
        return (0, utils_ts_1._convert)(Nanometers, 'nanometer', options);
    },
    toMillimeter: (inch = 0, options = {}) => {
        if (isNaN(inch)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        const Milliliters = (inch == 0) ? 0 : inch * 25.4;
        return (0, utils_ts_1._convert)(Milliliters, 'millimeter', options);
    },
    toCentimeter: (inch = 0, options = {}) => {
        if (isNaN(inch)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        const Centimeters = (inch == 0) ? 0 : inch * 2.54;
        return (0, utils_ts_1._convert)(Centimeters, 'centimeter', options);
    },
};
exports.Inch = Inch;
const Millimeter = {
    toMicrometer: (millimeter = 0, options = {}) => {
        if (isNaN(millimeter)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        const Micrometers = (millimeter == 0) ? 0 : millimeter * 1000;
        return (0, utils_ts_1._convert)(Micrometers, 'micrometer', options);
    },
    toNanometer: (millimeter = 0, options = {}) => {
        if (isNaN(millimeter)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        const Nanometers = (millimeter == 0) ? 0 : millimeter * 1000000;
        return (0, utils_ts_1._convert)(Nanometers, 'nanometer', options);
    },
    toInch: (millimeter = 0, options = {}) => {
        if (isNaN(millimeter)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        const Inch = (millimeter == 0) ? 0 : millimeter * 0.0393701;
        return (0, utils_ts_1._convert)(Inch, 'inch', options);
    },
    toCentimeter: (millimeter = 0, options = {}) => {
        if (isNaN(millimeter)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        const Centimeters = (millimeter == 0) ? 0 : millimeter / 10;
        return (0, utils_ts_1._convert)(Centimeters, 'centimeter', options);
    },
    toMeter: (millimeter = 0, options = {}) => {
        if (isNaN(millimeter)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        const Meter = (millimeter == 0) ? 0 : millimeter / 1000;
        return (0, utils_ts_1._convert)(Meter, 'meter', options);
    },
};
exports.Millimeter = Millimeter;
const Centimeter = {
    toMicrometer: (centimeter = 0, options = {}) => {
        if (isNaN(centimeter)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        const Micrometers = (centimeter == 0) ? 0 : centimeter * 10000;
        return (0, utils_ts_1._convert)(Micrometers, 'micrometer', options);
    },
    toNanometer: (centimeter = 0, options = {}) => {
        if (isNaN(centimeter)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        const Nanometers = (centimeter == 0) ? 0 : centimeter * 10000000;
        return (0, utils_ts_1._convert)(Nanometers, 'nanometer', options);
    },
    toMillimeter: (centimeter = 0, options = {}) => {
        if (isNaN(centimeter)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        const Milliliters = (centimeter == 0) ? 0 : centimeter * 10;
        return (0, utils_ts_1._convert)(Milliliters, 'millimeter', options);
    },
    toInch: (centimeter = 0, options = {}) => {
        if (isNaN(centimeter)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        const Inch = (centimeter == 0) ? 0 : centimeter * 0.393701;
        return (0, utils_ts_1._convert)(Inch, 'inch', options);
    },
    toMeter: (centimeter = 0, options = {}) => {
        if (isNaN(centimeter)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        const Meter = (centimeter == 0) ? 0 : centimeter / 100;
        return (0, utils_ts_1._convert)(Meter, 'meter', options);
    },
    toKilometer: (centimeter = 0, options = {}) => {
        if (isNaN(centimeter)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        const Kilometer = (centimeter == 0) ? 0 : centimeter / 100000;
        return (0, utils_ts_1._convert)(Kilometer, 'kilometer', options);
    },
    toMile: (centimeter = 0, options = {}) => {
        if (isNaN(centimeter)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        const Mile = (centimeter == 0) ? 0 : centimeter * 0.0000062137;
        return (0, utils_ts_1._convert)(Mile, 'mile', options);
    },
    toYard: (centimeter = 0, options = {}) => {
        if (isNaN(centimeter)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        const Yard = (centimeter == 0) ? 0 : centimeter * 0.0109361;
        return (0, utils_ts_1._convert)(Yard, 'yard', options);
    },
    toFoot: (centimeter = 0, options = {}) => {
        if (isNaN(centimeter)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        const Foot = (centimeter == 0) ? 0 : centimeter * 0.0328084;
        return (0, utils_ts_1._convert)(Foot, 'foot', options);
    }
};
exports.Centimeter = Centimeter;
const Meter = {
    toMicrometer: (meter = 0, options = {}) => {
        if (isNaN(meter)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        const Micrometers = (meter == 0) ? 0 : meter * 1000000;
        return (0, utils_ts_1._convert)(Micrometers, 'micrometer', options);
    },
    toNanometer: (meter = 0, options = {}) => {
        if (isNaN(meter)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        const Nanometers = (meter == 0) ? 0 : meter * 1000000000;
        return (0, utils_ts_1._convert)(Nanometers, 'nanometer', options);
    },
    toMillimeter: (meter = 0, options = {}) => {
        if (isNaN(meter)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        const Milliliters = (meter == 0) ? 0 : meter * 1000;
        return (0, utils_ts_1._convert)(Milliliters, 'millimeter', options);
    },
    toCentimeter: (meter = 0, options = {}) => {
        if (isNaN(meter)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        const Centimeters = (meter == 0) ? 0 : meter * 100;
        return (0, utils_ts_1._convert)(Centimeters, 'centimeter', options);
    },
    toInch: (meter = 0, options = {}) => {
        if (isNaN(meter)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        const Inch = (meter == 0) ? 0 : meter * 39.3701;
        return (0, utils_ts_1._convert)(Inch, 'inch', options);
    },
    toKilometer: (meter = 0, options = {}) => {
        if (isNaN(meter)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        const Meter = (meter == 0) ? 0 : meter / 1000;
        return (0, utils_ts_1._convert)(Meter, 'kilometer', options);
    },
    toMile: (kilometer = 0, options = {}) => {
        if (isNaN(kilometer)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        const Mile = (kilometer == 0) ? 0 : kilometer * 0.621371;
        return (0, utils_ts_1._convert)(Mile, 'mile', options);
    },
    toYard: (meter = 0, options = {}) => {
        if (isNaN(meter)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        const Yard = (meter == 0) ? 0 : meter * 1093.;
        return (0, utils_ts_1._convert)(Yard, 'yard', options);
    },
    toFoot: (meter = 0, options = {}) => {
        if (isNaN(meter)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        const Foot = (meter == 0) ? 0 : meter * 3280.84;
        return (0, utils_ts_1._convert)(Foot, 'foot', options);
    },
};
exports.Meter = Meter;
const Kilometer = {
    toMicrometer: (kilometer = 0, options = {}) => {
        if (isNaN(kilometer)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        const Micrometers = (kilometer == 0) ? 0 : kilometer * 1000000000;
        return (0, utils_ts_1._convert)(Micrometers, 'micrometer', options);
    },
    toNanometer: (kilometer = 0, options = {}) => {
        if (isNaN(kilometer)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        const Nanometers = (kilometer == 0) ? 0 : kilometer * 1000000000000;
        return (0, utils_ts_1._convert)(Nanometers, 'nanometer', options);
    },
    toMillimeter: (kilometer = 0, options = {}) => {
        if (isNaN(kilometer)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        const Milliliters = (kilometer == 0) ? 0 : kilometer * 1000000;
        return (0, utils_ts_1._convert)(Milliliters, 'millimeter', options);
    },
    toCentimeter: (kilometer = 0, options = {}) => {
        if (isNaN(kilometer)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        const Centimeters = (kilometer == 0) ? 0 : kilometer * 100000;
        return (0, utils_ts_1._convert)(Centimeters, 'centimeter', options);
    },
    toInch: (kilometer = 0, options = {}) => {
        if (isNaN(kilometer)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        const Inch = (kilometer == 0) ? 0 : kilometer * 39370.1;
        return (0, utils_ts_1._convert)(Inch, 'inch', options);
    },
    toMeter: (kilometer = 0, options = {}) => {
        if (isNaN(kilometer)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        const Meter = (kilometer == 0) ? 0 : kilometer * 1000;
        return (0, utils_ts_1._convert)(Meter, 'meter', options);
    },
    toMile: (kilometer = 0, options = {}) => {
        if (isNaN(kilometer)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        const Mile = (kilometer == 0) ? 0 : kilometer * 0.621371;
        return (0, utils_ts_1._convert)(Mile, 'mile', options);
    },
    toYard: (kilometer = 0, options = {}) => {
        if (isNaN(kilometer)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        const Yard = (kilometer == 0) ? 0 : kilometer * 1093.61;
        return (0, utils_ts_1._convert)(Yard, 'yard', options);
    },
    toFoot: (kilometer = 0, options = {}) => {
        if (isNaN(kilometer)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        const Foot = (kilometer == 0) ? 0 : kilometer * 3280.84;
        return (0, utils_ts_1._convert)(Foot, 'foot', options);
    },
};
exports.Kilometer = Kilometer;
const Mile = {
    toNanometer: (mile = 0, options = {}) => {
        if (isNaN(mile)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        const Nanometers = (mile == 0) ? 0 : mile * 1609344000000;
        return (0, utils_ts_1._convert)(Nanometers, 'nanometer', options);
    },
    toMillimeter: (mile = 0, options = {}) => {
        if (isNaN(mile)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        const Millimeters = (mile == 0) ? 0 : mile * 1609344;
        return (0, utils_ts_1._convert)(Millimeters, 'millimeter', options);
    },
    toMicrometer: (mile = 0, options = {}) => {
        if (isNaN(mile)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        const Micrometers = (mile == 0) ? 0 : mile * 1609340000;
        return (0, utils_ts_1._convert)(Micrometers, 'micrometer', options);
    },
    toInch: (mile = 0, options = {}) => {
        if (isNaN(mile)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        const Inch = (mile == 0) ? 0 : mile * 63360;
        return (0, utils_ts_1._convert)(Inch, 'inch', options);
    },
    toCentimeter: (mile = 0, options = {}) => {
        if (isNaN(mile)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        const Centimeters = (mile == 0) ? 0 : mile * 160934;
        return (0, utils_ts_1._convert)(Centimeters, 'centimeter', options);
    },
    toMeter: (mile = 0, options = {}) => {
        if (isNaN(mile)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        const Meter = (mile == 0) ? 0 : mile * 1609.34;
        return (0, utils_ts_1._convert)(Meter, 'meter', options);
    },
    toKilometer: (mile = 0, options = {}) => {
        if (isNaN(mile)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        const Kilometer = (mile == 0) ? 0 : mile * 1.60934;
        return (0, utils_ts_1._convert)(Kilometer, 'kilometer', options);
    },
    toYard: (mile = 0, options = {}) => {
        if (isNaN(mile)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        const Yard = (mile == 0) ? 0 : mile * 1760;
        return (0, utils_ts_1._convert)(Yard, 'yard', options);
    },
    toFoot: (mile = 0, options = {}) => {
        if (isNaN(mile)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        const Foot = (mile == 0) ? 0 : mile * 5280;
        return (0, utils_ts_1._convert)(Foot, 'foot', options);
    }
};
exports.Mile = Mile;
const Yard = {
    toNanometer: (yard = 0, options = {}) => {
        if (isNaN(yard)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        const Nanometers = (yard == 0) ? 0 : yard * 914400000;
        return (0, utils_ts_1._convert)(Nanometers, 'nanometer', options);
    },
    toInch: (yard = 0, options = {}) => {
        if (isNaN(yard)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        const Inch = (yard == 0) ? 0 : yard * 36;
        return (0, utils_ts_1._convert)(Inch, 'inch', options);
    },
    toCentimeter: (yard = 0, options = {}) => {
        if (isNaN(yard)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        const Centimeters = (yard == 0) ? 0 : yard * 91.44;
        return (0, utils_ts_1._convert)(Centimeters, 'centimeter', options);
    },
    toMillimeter: (yard = 0, options = {}) => {
        if (isNaN(yard)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        const Millimeters = (yard == 0) ? 0 : yard * 914.4;
        return (0, utils_ts_1._convert)(Millimeters, 'millimeter', options);
    },
    toMicrometer: (yard = 0, options = {}) => {
        if (isNaN(yard)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        const Micrometers = (yard == 0) ? 0 : yard * 914400;
        return (0, utils_ts_1._convert)(Micrometers, 'micrometer', options);
    },
    toMeter: (yard = 0, options = {}) => {
        if (isNaN(yard)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        const Meter = (yard == 0) ? 0 : yard * 0.9144;
        return (0, utils_ts_1._convert)(Meter, 'meter', options);
    },
    toKilometer: (yard = 0, options = {}) => {
        if (isNaN(yard)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        const Kilometer = (yard == 0) ? 0 : yard * 0.0009144;
        return (0, utils_ts_1._convert)(Kilometer, 'kilometer', options);
    },
    toMile: (yard = 0, options = {}) => {
        if (isNaN(yard)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        const Mile = (yard == 0) ? 0 : yard * 0.000568182;
        return (0, utils_ts_1._convert)(Mile, 'mile', options);
    },
    toFoot: (yard = 0, options = {}) => {
        if (isNaN(yard)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        const Foot = (yard == 0) ? 0 : yard * 3;
        return (0, utils_ts_1._convert)(Foot, 'foot', options);
    }
};
exports.Yard = Yard;
const Foot = {
    toMeter: (foot = 0, options = {}) => {
        if (isNaN(foot)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        const Meter = (foot == 0) ? 0 : foot * 0.3048;
        return (0, utils_ts_1._convert)(Meter, 'meter', options);
    },
    toKilometer: (foot = 0, options = {}) => {
        if (isNaN(foot)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        const Kilometer = (foot == 0) ? 0 : foot * 0.0003048;
        return (0, utils_ts_1._convert)(Kilometer, 'kilometer', options);
    },
    toMile: (foot = 0, options = {}) => {
        if (isNaN(foot)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        const Mile = (foot == 0) ? 0 : foot * 0.000189394;
        return (0, utils_ts_1._convert)(Mile, 'mile', options);
    },
    toYard: (foot = 0, options = {}) => {
        if (isNaN(foot)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        const Yard = (foot == 0) ? 0 : foot * 0.333333;
        return (0, utils_ts_1._convert)(Yard, 'yard', options);
    }
};
exports.Foot = Foot;
//# sourceMappingURL=distance.js.map