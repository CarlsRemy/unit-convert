"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Petabyte = exports.Terabyte = exports.Gigabyte = exports.Megabyte = exports.Kilobyte = exports.Byte = exports.Bit = void 0;
/**
 * Convert a unit to another unit
 * Storage units measurements
 * @author Carlos Ismael .Y .R
 *
 * @param value - The value to convert
 * @param options - The options to convert
 * @returns The converted value
*/
const utils_ts_1 = require("./utils.js");
const Bit = {
    toByte: (value = 0, options = {}) => {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value <= 0) ? 0 : value / 8;
        return (0, utils_ts_1._convert)(value, "byte", options);
    },
    toKilobyte: (value = 0, options = {}) => {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value <= 8) ? 0 : value / 8000;
        return (0, utils_ts_1._convert)(value, "kilobyte", options);
    },
    toMegabyte: (value = 0, options = {}) => {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value <= 8000) ? 0 : value / 8000000;
        return (0, utils_ts_1._convert)(value, "megabyte", options);
    },
    toGigabyte: (value = 0, options = {}) => {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value <= 8000000) ? 0 : value / 8000000000;
        return (0, utils_ts_1._convert)(value, "gigabyte", options);
    },
    toTerabyte: (value = 0, options = {}) => {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value <= 8000000000) ? 0 : value / 8000000000000;
        return (0, utils_ts_1._convert)(value, "terabyte", options);
    },
    toPetabyte: (value = 0, options = {}) => {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value <= 8000000000000) ? 0 : value / 8000000000000000;
        return (0, utils_ts_1._convert)(value, "petabyte", options);
    },
};
exports.Bit = Bit;
const Byte = {
    toBit: (value = 0, options = {}) => {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value <= 0) ? 0 : value * 8;
        return (0, utils_ts_1._convert)(value, "bit", options);
    },
    toKilobyte: (value = 0, options = {}) => {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value <= 0) ? 0 : value / 1000;
        return (0, utils_ts_1._convert)(value, "kilobyte", options);
    },
    toMegabyte: (value = 0, options = {}) => {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value <= 1000) ? 0 : value / 1000000;
        return (0, utils_ts_1._convert)(value, "megabyte", options);
    },
    toGigabyte: (value = 0, options = {}) => {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value <= 1000000) ? 0 : value / 1000000000;
        return (0, utils_ts_1._convert)(value, "gigabyte", options);
    },
    toTerabyte: (value = 0, options = {}) => {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value <= 1000000000) ? 0 : value / 1000000000000;
        return (0, utils_ts_1._convert)(value, "terabyte", options);
    },
    toPetabyte: (value = 0, options = {}) => {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value <= 1000000000000) ? 0 : value / 1000000000000000;
        return (0, utils_ts_1._convert)(value, "petabyte", options);
    },
};
exports.Byte = Byte;
const Kilobyte = {
    toBit: (value = 0, options = {}) => {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value <= 0) ? 0 : value * 8000;
        return (0, utils_ts_1._convert)(value, "bit", options);
    },
    toByte: (value = 0, options = {}) => {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value <= 0) ? 0 : value * 1000;
        return (0, utils_ts_1._convert)(value, "byte", options);
    },
    toMegabyte: (value = 0, options = {}) => {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value <= 0) ? 0 : value / 1000;
        return (0, utils_ts_1._convert)(value, "megabyte", options);
    },
    toGigabyte: (value = 0, options = {}) => {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value <= 1000) ? 0 : value / 1000000;
        return (0, utils_ts_1._convert)(value, "gigabyte", options);
    },
    toTerabyte: (value = 0, options = {}) => {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value <= 1000000) ? 0 : value / 1000000000;
        return (0, utils_ts_1._convert)(value, "terabyte", options);
    },
    toPetabyte: (value = 0, options = {}) => {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value <= 1000000000) ? 0 : value / 1000000000000;
        return (0, utils_ts_1._convert)(value, "petabyte", options);
    }
};
exports.Kilobyte = Kilobyte;
const Megabyte = {
    toBit: (value = 0, options = {}) => {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value <= 0) ? 0 : value * 8000000;
        return (0, utils_ts_1._convert)(value, "bit", options);
    },
    toByte: (value = 0, options = {}) => {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value <= 0) ? 0 : value * 1000000;
        return (0, utils_ts_1._convert)(value, "byte", options);
    },
    toKilobyte: (value = 0, options = {}) => {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value <= 0) ? 0 : value * 1000;
        return (0, utils_ts_1._convert)(value, "kilobyte", options);
    },
    toGigabyte: (value = 0, options = {}) => {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value <= 1000) ? 0 : value / 1000;
        return (0, utils_ts_1._convert)(value, "gigabyte", options);
    },
    toTerabyte: (value = 0, options = {}) => {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value <= 1000000) ? 0 : value / 1000000;
        return (0, utils_ts_1._convert)(value, "terabyte", options);
    },
    toPetabyte: (value = 0, options = {}) => {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value <= 1000000000) ? 0 : value / 1000000000;
        return (0, utils_ts_1._convert)(value, "petabyte", options);
    }
};
exports.Megabyte = Megabyte;
const Gigabyte = {
    toBit: (value = 0, options = {}) => {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value <= 0) ? 0 : value * 8000000000;
        return (0, utils_ts_1._convert)(value, "bit", options);
    },
    toByte: (value = 0, options = {}) => {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value <= 0) ? 0 : value * 1000000000;
        return (0, utils_ts_1._convert)(value, "byte", options);
    },
    toKilobyte: (value = 0, options = {}) => {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value <= 0) ? 0 : value * 1000000;
        return (0, utils_ts_1._convert)(value, "kilobyte", options);
    },
    toMegabyte: (value = 0, options = {}) => {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value <= 0) ? 0 : value * 1000;
        return (0, utils_ts_1._convert)(value, "megabyte", options);
    },
    toTerabyte: (value = 0, options = {}) => {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value <= 0) ? 0 : value / 1000;
        return (0, utils_ts_1._convert)(value, "terabyte", options);
    },
    toPetabyte: (value = 0, options = {}) => {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value <= 1000) ? 0 : value / 1000000;
        return (0, utils_ts_1._convert)(value, "petabyte", options);
    }
};
exports.Gigabyte = Gigabyte;
const Terabyte = {
    toBit: (value = 0, options = {}) => {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value <= 0) ? 0 : value * 8000000000000;
        return (0, utils_ts_1._convert)(value, "bit", options);
    },
    toByte: (value = 0, options = {}) => {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value <= 0) ? 0 : value * 1000000000000;
        return (0, utils_ts_1._convert)(value, "byte", options);
    },
    toKilobyte: (value = 0, options = {}) => {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value <= 0) ? 0 : value * 1000000000;
        return (0, utils_ts_1._convert)(value, "kilobyte", options);
    },
    toMegabyte: (value = 0, options = {}) => {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value <= 0) ? 0 : value * 1000000;
        return (0, utils_ts_1._convert)(value, "megabyte", options);
    },
    toGigabyte: (value = 0, options = {}) => {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value <= 0) ? 0 : value * 1000;
        return (0, utils_ts_1._convert)(value, "gigabyte", options);
    },
    toPetabyte: (value = 0, options = {}) => {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value <= 1) ? 0 : value / 1000;
        return (0, utils_ts_1._convert)(value, "petabyte", options);
    }
};
exports.Terabyte = Terabyte;
const Petabyte = {
    toBit: (value = 0, options = {}) => {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value <= 0) ? 0 : value * 8000000000000000;
        return (0, utils_ts_1._convert)(value, "bit", options);
    },
    toByte: (value = 0, options = {}) => {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value <= 0) ? 0 : value * 1000000000000000;
        return (0, utils_ts_1._convert)(value, "byte", options);
    },
    toKilobyte: (value = 0, options = {}) => {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value <= 0) ? 0 : value * 1000000000000;
        return (0, utils_ts_1._convert)(value, "kilobyte", options);
    },
    toMegabyte: (value = 0, options = {}) => {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value <= 0) ? 0 : value * 1000000000;
        return (0, utils_ts_1._convert)(value, "megabyte", options);
    },
    toGigabyte: (value = 0, options = {}) => {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value <= 0) ? 0 : value * 1000000;
        return (0, utils_ts_1._convert)(value, "gigabyte", options);
    },
    toTerabyte: (value = 0, options = {}) => {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value <= 0) ? 0 : value * 1000;
        return (0, utils_ts_1._convert)(value, "terabyte", options);
    }
};
exports.Petabyte = Petabyte;
//# sourceMappingURL=storage.js.map