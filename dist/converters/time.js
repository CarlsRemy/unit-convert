"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Years = exports.Months = exports.Weeks = exports.Days = exports.Hours = exports.Minutes = exports.Seconds = exports.Milliseconds = void 0;
/**
 * Convert a unit to another unit
 * Time units measurements
 * @author Carlos Ismael .Y .R
 *
 * @param value - The value to convert
 * @param Options - The options to convert
 * @returns The converted value
*/
const utils_ts_1 = require("./utils.js");
const Milliseconds = {
    toSeconds(value = 0, options = {}) {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value == 0) ? 0 : value / 1000;
        return (0, utils_ts_1._convert)(value, "seconds", options);
    },
    toMinutes(value = 0, options = {}) {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value == 0) ? 0 : value / 60000;
        return (0, utils_ts_1._convert)(value, "minutes", options);
    },
    toHours(value = 0, options = {}) {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value == 0) ? 0 : value / 3600000;
        return (0, utils_ts_1._convert)(value, "hours", options);
    },
    toDays(value = 0, options = {}) {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value == 0) ? 0 : value / 86400000;
        return (0, utils_ts_1._convert)(value, "days", options);
    },
    toWeeks(value = 0, options = {}) {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value == 0) ? 0 : value / 604800000;
        return (0, utils_ts_1._convert)(value, "weeks", options);
    },
    toMonths(value = 0, options = {}) {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value == 0) ? 0 : value / 2628000000;
        return (0, utils_ts_1._convert)(value, "months", options);
    },
    toYears(value = 0, options = {}) {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value == 0) ? 0 : value / 31540000000;
        return (0, utils_ts_1._convert)(value, "years", options);
    }
};
exports.Milliseconds = Milliseconds;
const Seconds = {
    toMilliseconds(value = 0, options = {}) {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value == 0) ? 0 : value * 1000;
        return (0, utils_ts_1._convert)(value, "milliseconds", options);
    },
    toMinutes(value = 0, options = {}) {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value == 0) ? 0 : value / 60;
        return (0, utils_ts_1._convert)(value, "minutes", options);
    },
    toHours(value = 0, options = {}) {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value == 0) ? 0 : value / 3600;
        return (0, utils_ts_1._convert)(value, "hours", options);
    },
    toDays(value = 0, options = {}) {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value == 0) ? 0 : value / 86400;
        return (0, utils_ts_1._convert)(value, "days", options);
    },
    toWeeks(value = 0, options = {}) {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value == 0) ? 0 : value / 604800;
        return (0, utils_ts_1._convert)(value, "weeks", options);
    },
    toMonths(value = 0, options = {}) {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value == 0) ? 0 : value / 2628000;
        return (0, utils_ts_1._convert)(value, "months", options);
    },
    toYears(value = 0, options = {}) {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value == 0) ? 0 : value / 31540000;
        return (0, utils_ts_1._convert)(value, "years", options);
    }
};
exports.Seconds = Seconds;
const Minutes = {
    toMilliseconds(value = 0, options = {}) {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value == 0) ? 0 : value * 60000;
        return (0, utils_ts_1._convert)(value, "milliseconds", options);
    },
    toSeconds(value = 0, options = {}) {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value == 0) ? 0 : value * 60;
        return (0, utils_ts_1._convert)(value, "seconds", options);
    },
    toHours(value = 0, options = {}) {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value == 0) ? 0 : value / 60;
        return (0, utils_ts_1._convert)(value, "hours", options);
    },
    toDays(value = 0, options = {}) {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value == 0) ? 0 : value / 1440;
        return (0, utils_ts_1._convert)(value, "days", options);
    },
    toWeeks(value = 0, options = {}) {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value == 0) ? 0 : value / 10080;
        return (0, utils_ts_1._convert)(value, "weeks", options);
    },
    toMonths(value = 0, options = {}) {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value == 0) ? 0 : value / 43200;
        return (0, utils_ts_1._convert)(value, "months", options);
    },
    toYears(value = 0, options = {}) {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value == 0) ? 0 : value / 525600;
        return (0, utils_ts_1._convert)(value, "years", options);
    }
};
exports.Minutes = Minutes;
const Hours = {
    toMilliseconds(value = 0, options = {}) {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value == 0) ? 0 : value * 3600000;
        return (0, utils_ts_1._convert)(value, "milliseconds", options);
    },
    toSeconds(value = 0, options = {}) {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value == 0) ? 0 : value * 3600;
        return (0, utils_ts_1._convert)(value, "seconds", options);
    },
    toMinutes(value = 0, options = {}) {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value == 0) ? 0 : value * 60;
        return (0, utils_ts_1._convert)(value, "minutes", options);
    },
    toDays(value = 0, options = {}) {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value == 0) ? 0 : value / 24;
        return (0, utils_ts_1._convert)(value, "days", options);
    },
    toWeeks(value = 0, options = {}) {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value == 0) ? 0 : value / 168;
        return (0, utils_ts_1._convert)(value, "weeks", options);
    },
    toMonths(value = 0, options = {}) {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value == 0) ? 0 : value / 720;
        return (0, utils_ts_1._convert)(value, "months", options);
    },
    toYears(value = 0, options = {}) {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value == 0) ? 0 : value / 8760;
        return (0, utils_ts_1._convert)(value, "years", options);
    }
};
exports.Hours = Hours;
const Days = {
    toMilliseconds(value = 0, options = {}) {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value == 0) ? 0 : value * 86400000;
        return (0, utils_ts_1._convert)(value, "milliseconds", options);
    },
    toSeconds(value = 0, options = {}) {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value == 0) ? 0 : value * 86400;
        return (0, utils_ts_1._convert)(value, "seconds", options);
    },
    toMinutes(value = 0, options = {}) {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value == 0) ? 0 : value * 1440;
        return (0, utils_ts_1._convert)(value, "minutes", options);
    },
    toHours(value = 0, options = {}) {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value == 0) ? 0 : value * 24;
        return (0, utils_ts_1._convert)(value, "hours", options);
    },
    toWeeks(value = 0, options = {}) {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value == 0) ? 0 : value / 7;
        return (0, utils_ts_1._convert)(value, "weeks", options);
    },
    toMonths(value = 0, options = {}) {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value == 0) ? 0 : value / 30;
        return (0, utils_ts_1._convert)(value, "months", options);
    },
    toYears(value = 0, options = {}) {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value == 0) ? 0 : value / 365;
        return (0, utils_ts_1._convert)(value, "years", options);
    }
};
exports.Days = Days;
const Weeks = {
    toMilliseconds(value = 0, options = {}) {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value == 0) ? 0 : value * 604800000;
        return (0, utils_ts_1._convert)(value, "millisecond", options);
    },
    toSeconds(value = 0, options = {}) {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value == 0) ? 0 : value * 604800;
        return (0, utils_ts_1._convert)(value, "second", options);
    },
    toMinutes(value = 0, options = {}) {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value == 0) ? 0 : value * 10080;
        return (0, utils_ts_1._convert)(value, "minute", options);
    },
    toHours(value = 0, options = {}) {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value == 0) ? 0 : value * 168;
        return (0, utils_ts_1._convert)(value, "hour", options);
    },
    toDays(value = 0, options = {}) {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value == 0) ? 0 : value * 7;
        return (0, utils_ts_1._convert)(value, "day", options);
    },
    toMonths(value = 0, options = {}) {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value == 0) ? 0 : value / 4.34524;
        return (0, utils_ts_1._convert)(value, "month", options);
    },
    toYears(value = 0, options = {}) {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value == 0) ? 0 : value / 52.1429;
        return (0, utils_ts_1._convert)(value, "year", options);
    }
};
exports.Weeks = Weeks;
const Months = {
    toMilliseconds(value = 0, options = {}) {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value == 0) ? 0 : value * 2628000000;
        return (0, utils_ts_1._convert)(value, "millisecond", options);
    },
    toSeconds(value = 0, options = {}) {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value == 0) ? 0 : value * 2628000;
        return (0, utils_ts_1._convert)(value, "second", options);
    },
    toMinutes(value = 0, options = {}) {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value == 0) ? 0 : value * 43800;
        return (0, utils_ts_1._convert)(value, "minute", options);
    },
    toHours(value = 0, options = {}) {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value == 0) ? 0 : value * 730.001;
        return (0, utils_ts_1._convert)(value, "hour", options);
    },
    toDays(value = 0, options = {}) {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value == 0) ? 0 : value * 30.4167;
        return (0, utils_ts_1._convert)(value, "day", options);
    },
    toWeeks(value = 0, options = {}) {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value == 0) ? 0 : value * 4.34524;
        return (0, utils_ts_1._convert)(value, "week", options);
    },
    toYears(value = 0, options = {}) {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value == 0) ? 0 : value / 12;
        return (0, utils_ts_1._convert)(value, "year", options);
    }
};
exports.Months = Months;
const Years = {
    toMilliseconds(value = 0, options = {}) {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value == 0) ? 0 : value * 31540000000;
        return (0, utils_ts_1._convert)(value, "millisecond", options);
    },
    toSeconds(value = 0, options = {}) {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value == 0) ? 0 : value * 31540000;
        return (0, utils_ts_1._convert)(value, "second", options);
    },
    toMinutes(value = 0, options = {}) {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value == 0) ? 0 : value * 525600;
        return (0, utils_ts_1._convert)(value, "minute", options);
    },
    toHours(value = 0, options = {}) {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value == 0) ? 0 : value * 8760;
        return (0, utils_ts_1._convert)(value, "hour", options);
    },
    toDays(value = 0, options = {}) {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value == 0) ? 0 : value * 365;
        return (0, utils_ts_1._convert)(value, "day", options);
    },
    toWeeks(value = 0, options = {}) {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value == 0) ? 0 : value * 52.1429;
        return (0, utils_ts_1._convert)(value, "week", options);
    },
    toMonths(value = 0, options = {}) {
        if (isNaN(value)) {
            throw new Error('El valor introducido no es un número válido.');
        }
        value = (value == 0) ? 0 : value * 12;
        return (0, utils_ts_1._convert)(value, "month", options);
    }
};
exports.Years = Years;
//# sourceMappingURL=time.js.map