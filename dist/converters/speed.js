"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MeterPerSecond = exports.MeterPerMinute = exports.MeterPerHour = exports.MeterPerDay = exports.KilometerPerSecond = exports.KilometerPerMinute = exports.KilometerPerHour = exports.KilometerPerDay = void 0;
/**
 * Convert a unit to another unit
 * Speed units measurements
 * @author Carlos Ismael .Y .R
 *
 * @param value - The value to convert
 * @param Options - The options to convert
 * @returns The converted value
*/
const utils_ts_1 = require("./utils.js");
const KilometerPerDay = {
    toMeterPerDay(value = 0, options = {}) {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value == 0) ? 0 : value * 1000;
        return (0, utils_ts_1._convert)(value, 'meter-per-day', options);
    },
    toMeterPerHour(value = 0, options = {}) {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value == 0) ? 0 : value * 41.6667;
        return (0, utils_ts_1._convert)(value, 'meter-per-hour', options);
    },
    toMeterPerMinute(value = 0, options = {}) {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value == 0) ? 0 : (value * 1000) / (24 * 60);
        return (0, utils_ts_1._convert)(value, 'meter-per-minute', options);
    },
    toMeterPerSecond(value = 0, options = {}) {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value == 0) ? 0 : (value * 1000) / (24 * 60 * 60);
        return (0, utils_ts_1._convert)(value, 'meter-per-second', options);
    },
    toKilometerPerHour(value = 0, options = {}) {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value == 0) ? 0 : value * 24;
        return (0, utils_ts_1._convert)(value, 'kilometer-per-hour', options);
    },
    toKilometerPerMinute(value = 0, options = {}) {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value == 0) ? 0 : value * (24 * 60);
        return (0, utils_ts_1._convert)(value, 'kilometer-per-minute', options);
    },
    toKilometerPerSecond(value = 0, options = {}) {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value == 0) ? 0 : value * (24 * 60 * 60);
        return (0, utils_ts_1._convert)(value, 'kilometer-per-second', options);
    },
};
exports.KilometerPerDay = KilometerPerDay;
const KilometerPerHour = {
    toMeterPerDay(value = 0, options = {}) {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value == 0) ? 0 : (value * 1000) / 24;
        return (0, utils_ts_1._convert)(value, 'meter-per-day', options);
    },
    toMeterPerHour(value = 0, options = {}) {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value == 0) ? 0 : value * 1000;
        return (0, utils_ts_1._convert)(value, 'meter-per-hour', options);
    },
    toMeterPerMinute(value = 0, options = {}) {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value == 0) ? 0 : (value * 1000) / 60;
        return (0, utils_ts_1._convert)(value, 'meter-per-minute', options);
    },
    toMeterPerSecond(value = 0, options = {}) {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value == 0) ? 0 : (value * 1000) / 3600;
        return (0, utils_ts_1._convert)(value, 'meter-per-second', options);
    },
    toKilometerPerDay(value = 0, options = {}) {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value == 0) ? 0 : value / 24;
        return (0, utils_ts_1._convert)(value, 'kilometer-per-day', options);
    },
    toKilometerPerMinute(value = 0, options = {}) {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value == 0) ? 0 : value * 60;
        return (0, utils_ts_1._convert)(value, 'kilometer-per-minute', options);
    },
    toKilometerPerSecond(value = 0, options = {}) {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value == 0) ? 0 : value * 3600;
        return (0, utils_ts_1._convert)(value, 'kilometer-per-second', options);
    }
};
exports.KilometerPerHour = KilometerPerHour;
const KilometerPerMinute = {
    toKilometerPerDay(value = 0, options = {}) {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value == 0) ? 0 : value / (24 * 60);
        return (0, utils_ts_1._convert)(value, 'kilometer-per-day', options);
    },
    toKilometerPerHour(value = 0, options = {}) {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value == 0) ? 0 : value / 60;
        return (0, utils_ts_1._convert)(value, 'kilometer-per-hour', options);
    },
    toKilometerPerSecond(value = 0, options = {}) {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value == 0) ? 0 : value * 60;
        return (0, utils_ts_1._convert)(value, 'kilometer-per-second', options);
    },
    toMeterPerDay(value = 0, options = {}) {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value == 0) ? 0 : (value * 1000) / (24 * 60);
        return KilometerPerDay.toMeterPerDay(value, options);
    },
    toMeterPerHour(value = 0, options = {}) {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value == 0) ? 0 : (value * 1000) / 60;
        return KilometerPerDay.toMeterPerHour(value, options);
    },
    toMeterPerMinute(value = 0, options = {}) {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value == 0) ? 0 : value * 1000;
        return KilometerPerDay.toMeterPerMinute(value, options);
    },
    toMeterPerSecond(value = 0, options = {}) {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value == 0) ? 0 : (value * 1000) * 60;
        return KilometerPerDay.toMeterPerSecond(value, options);
    }
};
exports.KilometerPerMinute = KilometerPerMinute;
const KilometerPerSecond = {
    toKilometerPerDay(value = 0, options = {}) {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value == 0) ? 0 : value / (24 * 60 * 60);
        return (0, utils_ts_1._convert)(value, 'kilometer-per-day', options);
    },
    toKilometerPerHour(value = 0, options = {}) {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value == 0) ? 0 : value / 3600;
        return (0, utils_ts_1._convert)(value, 'kilometer-per-hour', options);
    },
    toKilometerPerMinute(value = 0, options = {}) {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value == 0) ? 0 : value / 60;
        return (0, utils_ts_1._convert)(value, 'kilometer-per-minute', options);
    },
    toMeterPerDay(value = 0, options = {}) {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value == 0) ? 0 : (value * 1000) / (24 * 60 * 60);
        return KilometerPerDay.toMeterPerDay(value, options);
    },
    toMeterPerHour(value = 0, options = {}) {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value == 0) ? 0 : (value * 1000) / 3600;
        return KilometerPerDay.toMeterPerHour(value, options);
    },
    toMeterPerMinute(value = 0, options = {}) {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value == 0) ? 0 : (value * 1000) / 60;
        return KilometerPerDay.toMeterPerMinute(value, options);
    },
    toMeterPerSecond(value = 0, options = {}) {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value == 0) ? 0 : value * 1000;
        return KilometerPerDay.toMeterPerSecond(value, options);
    }
};
exports.KilometerPerSecond = KilometerPerSecond;
const MeterPerDay = {
    toMeterPerHour(value = 0, options = {}) {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value == 0) ? 0 : value / 24;
        return (0, utils_ts_1._convert)(value, 'meter-per-hour', options);
    },
    toMeterPerMinute(value = 0, options = {}) {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value == 0) ? 0 : value / (24 * 60);
        return (0, utils_ts_1._convert)(value, 'meter-per-minute', options);
    },
    toMeterPerSecond(value = 0, options = {}) {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value == 0) ? 0 : value / (24 * 60 * 60);
        return (0, utils_ts_1._convert)(value, 'meter-per-second', options);
    },
    toKilometerPerDay(value = 0, options = {}) {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value == 0) ? 0 : value / 1000;
        return (0, utils_ts_1._convert)(value, 'kilometer-per-day', options);
    },
    toKilometerPerHour(value = 0, options = {}) {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value == 0) ? 0 : (value / 1000) * 24;
        return (0, utils_ts_1._convert)(value, 'kilometer-per-hour', options);
    },
    toKilometerPerMinute(value = 0, options = {}) {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value == 0) ? 0 : (value / 1000) * (24 * 60);
        return (0, utils_ts_1._convert)(value, 'kilometer-per-minute', options);
    },
    toKilometerPerSecond(value = 0, options = {}) {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value == 0) ? 0 : (value / 1000) * (24 * 60 * 60);
        return (0, utils_ts_1._convert)(value, 'kilometer-per-second', options);
    }
};
exports.MeterPerDay = MeterPerDay;
const MeterPerHour = {
    toMeterPerDay(value = 0, options = {}) {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value == 0) ? 0 : value * 24;
        return (0, utils_ts_1._convert)(value, 'meter-per-day', options);
    },
    toMeterPerMinute(value = 0, options = {}) {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value == 0) ? 0 : value / 60;
        return (0, utils_ts_1._convert)(value, 'meter-per-minute', options);
    },
    toMeterPerSecond(value = 0, options = {}) {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value == 0) ? 0 : value / 3600;
        return (0, utils_ts_1._convert)(value, 'meter-per-second', options);
    },
    toKilometerPerDay(value = 0, options = {}) {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value == 0) ? 0 : (value / 1000) * 24;
        return (0, utils_ts_1._convert)(value, 'kilometer-per-day', options);
    },
    toKilometerPerHour(value = 0, options = {}) {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value == 0) ? 0 : value / 1000;
        return (0, utils_ts_1._convert)(value, 'kilometer-per-hour', options);
    },
    toKilometerPerMinute(value = 0, options = {}) {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value == 0) ? 0 : (value / 1000) * 60;
        return (0, utils_ts_1._convert)(value, 'kilometer-per-minute', options);
    },
    toKilometerPerSecond(value = 0, options = {}) {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value == 0) ? 0 : (value / 1000) * 3600;
        return (0, utils_ts_1._convert)(value, 'kilometer-per-second', options);
    }
};
exports.MeterPerHour = MeterPerHour;
const MeterPerMinute = {
    toMeterPerDay(value = 0, options = {}) {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value == 0) ? 0 : value / (24 * 60);
        return (0, utils_ts_1._convert)(value, 'meter-per-day', options);
    },
    toMeterPerHour(value = 0, options = {}) {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value == 0) ? 0 : value / 60;
        return (0, utils_ts_1._convert)(value, 'meter-per-hour', options);
    },
    toMeterPerSecond(value = 0, options = {}) {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value == 0) ? 0 : value * 60;
        return (0, utils_ts_1._convert)(value, 'meter-per-second', options);
    },
    toKilometerPerDay(value = 0, options = {}) {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value == 0) ? 0 : (value / 1000) / (24 * 60);
        return (0, utils_ts_1._convert)(value, 'kilometer-per-day', options);
    },
    toKilometerPerHour(value = 0, options = {}) {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value == 0) ? 0 : (value / 1000) / 60;
        return (0, utils_ts_1._convert)(value, 'kilometer-per-hour', options);
    },
    toKilometerPerMinute(value = 0, options = {}) {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value == 0) ? 0 : value / 1000;
        return (0, utils_ts_1._convert)(value, 'kilometer-per-minute', options);
    },
    toKilometerPerSecond(value = 0, options = {}) {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value == 0) ? 0 : (value / 1000) * 60;
        return (0, utils_ts_1._convert)(value, 'kilometer-per-second', options);
    }
};
exports.MeterPerMinute = MeterPerMinute;
const MeterPerSecond = {
    toMeterPerDay(value = 0, options = {}) {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value == 0) ? 0 : value / (24 * 60 * 60);
        return (0, utils_ts_1._convert)(value, 'meter-per-day', options);
    },
    toMeterPerHour(value = 0, options = {}) {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value == 0) ? 0 : value / 3600;
        return (0, utils_ts_1._convert)(value, 'meter-per-hour', options);
    },
    toMeterPerMinute(value = 0, options = {}) {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value == 0) ? 0 : value / 60;
        return (0, utils_ts_1._convert)(value, 'meter-per-minute', options);
    },
    toKilometerPerDay(value = 0, options = {}) {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value == 0) ? 0 : (value / 1000) / (24 * 60 * 60);
        return (0, utils_ts_1._convert)(value, 'kilometer-per-day', options);
    },
    toKilometerPerHour(value = 0, options = {}) {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value == 0) ? 0 : (value / 1000) / 3600;
        return (0, utils_ts_1._convert)(value, 'kilometer-per-hour', options);
    },
    toKilometerPerMinute(value = 0, options = {}) {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value == 0) ? 0 : (value / 1000) / 60;
        return (0, utils_ts_1._convert)(value, 'kilometer-per-minute', options);
    },
    toKilometerPerSecond(value = 0, options = {}) {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value == 0) ? 0 : value / 1000;
        return (0, utils_ts_1._convert)(value, 'kilometer-per-second', options);
    }
};
exports.MeterPerSecond = MeterPerSecond;
//# sourceMappingURL=speed.js.map