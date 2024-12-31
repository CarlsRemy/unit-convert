"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Petabyte = exports.Terabyte = exports.Gigabyte = exports.Megabyte = exports.Kilobyte = exports.Byte = exports.Bit = exports.Celsius = exports.Fahrenheit = exports.kelvin = exports.MeterPerSecond = exports.MeterPerMinute = exports.MeterPerHour = exports.MeterPerDay = exports.KilometerPerSecond = exports.KilometerPerMinute = exports.KilometerPerHour = exports.KilometerPerDay = exports.Cup = exports.Tablespoon = exports.Pint = exports.CubicMeter = exports.Milliliter = exports.Liter = exports.Gallon = exports.FluidOunce = exports.Ounce = exports.Stone = exports.Pound = exports.Microgram = exports.Milligram = exports.Ton = exports.Gram = exports.Kilogram = exports.Foot = exports.Yard = exports.Mile = exports.Kilometer = exports.Meter = exports.Centimeter = exports.Inch = void 0;
const distance_ts_1 = require("./converters/distance.js");
Object.defineProperty(exports, "Inch", { enumerable: true, get: function () { return distance_ts_1.Inch; } });
Object.defineProperty(exports, "Centimeter", { enumerable: true, get: function () { return distance_ts_1.Centimeter; } });
Object.defineProperty(exports, "Meter", { enumerable: true, get: function () { return distance_ts_1.Meter; } });
Object.defineProperty(exports, "Kilometer", { enumerable: true, get: function () { return distance_ts_1.Kilometer; } });
Object.defineProperty(exports, "Mile", { enumerable: true, get: function () { return distance_ts_1.Mile; } });
Object.defineProperty(exports, "Yard", { enumerable: true, get: function () { return distance_ts_1.Yard; } });
Object.defineProperty(exports, "Foot", { enumerable: true, get: function () { return distance_ts_1.Foot; } });
const mass_ts_1 = require("./converters/mass.js");
Object.defineProperty(exports, "Kilogram", { enumerable: true, get: function () { return mass_ts_1.Kilogram; } });
Object.defineProperty(exports, "Gram", { enumerable: true, get: function () { return mass_ts_1.Gram; } });
Object.defineProperty(exports, "Ton", { enumerable: true, get: function () { return mass_ts_1.Ton; } });
Object.defineProperty(exports, "Milligram", { enumerable: true, get: function () { return mass_ts_1.Milligram; } });
Object.defineProperty(exports, "Microgram", { enumerable: true, get: function () { return mass_ts_1.Microgram; } });
Object.defineProperty(exports, "Pound", { enumerable: true, get: function () { return mass_ts_1.Pound; } });
Object.defineProperty(exports, "Stone", { enumerable: true, get: function () { return mass_ts_1.Stone; } });
Object.defineProperty(exports, "Ounce", { enumerable: true, get: function () { return mass_ts_1.Ounce; } });
const volume_ts_1 = require("./converters/volume.js");
Object.defineProperty(exports, "FluidOunce", { enumerable: true, get: function () { return volume_ts_1.FluidOunce; } });
Object.defineProperty(exports, "Gallon", { enumerable: true, get: function () { return volume_ts_1.Gallon; } });
Object.defineProperty(exports, "Liter", { enumerable: true, get: function () { return volume_ts_1.Liter; } });
Object.defineProperty(exports, "Milliliter", { enumerable: true, get: function () { return volume_ts_1.Milliliter; } });
Object.defineProperty(exports, "CubicMeter", { enumerable: true, get: function () { return volume_ts_1.CubicMeter; } });
Object.defineProperty(exports, "Pint", { enumerable: true, get: function () { return volume_ts_1.Pint; } });
Object.defineProperty(exports, "Tablespoon", { enumerable: true, get: function () { return volume_ts_1.Tablespoon; } });
Object.defineProperty(exports, "Cup", { enumerable: true, get: function () { return volume_ts_1.Cup; } });
const temperature_ts_1 = require("./converters/temperature.js");
Object.defineProperty(exports, "kelvin", { enumerable: true, get: function () { return temperature_ts_1.kelvin; } });
Object.defineProperty(exports, "Fahrenheit", { enumerable: true, get: function () { return temperature_ts_1.Fahrenheit; } });
Object.defineProperty(exports, "Celsius", { enumerable: true, get: function () { return temperature_ts_1.Celsius; } });
const speed_ts_1 = require("./converters/speed.js");
Object.defineProperty(exports, "KilometerPerDay", { enumerable: true, get: function () { return speed_ts_1.KilometerPerDay; } });
Object.defineProperty(exports, "KilometerPerHour", { enumerable: true, get: function () { return speed_ts_1.KilometerPerHour; } });
Object.defineProperty(exports, "KilometerPerMinute", { enumerable: true, get: function () { return speed_ts_1.KilometerPerMinute; } });
Object.defineProperty(exports, "KilometerPerSecond", { enumerable: true, get: function () { return speed_ts_1.KilometerPerSecond; } });
Object.defineProperty(exports, "MeterPerDay", { enumerable: true, get: function () { return speed_ts_1.MeterPerDay; } });
Object.defineProperty(exports, "MeterPerHour", { enumerable: true, get: function () { return speed_ts_1.MeterPerHour; } });
Object.defineProperty(exports, "MeterPerMinute", { enumerable: true, get: function () { return speed_ts_1.MeterPerMinute; } });
Object.defineProperty(exports, "MeterPerSecond", { enumerable: true, get: function () { return speed_ts_1.MeterPerSecond; } });
const storage_ts_1 = require("./converters/storage.js");
Object.defineProperty(exports, "Bit", { enumerable: true, get: function () { return storage_ts_1.Bit; } });
Object.defineProperty(exports, "Byte", { enumerable: true, get: function () { return storage_ts_1.Byte; } });
Object.defineProperty(exports, "Kilobyte", { enumerable: true, get: function () { return storage_ts_1.Kilobyte; } });
Object.defineProperty(exports, "Megabyte", { enumerable: true, get: function () { return storage_ts_1.Megabyte; } });
Object.defineProperty(exports, "Gigabyte", { enumerable: true, get: function () { return storage_ts_1.Gigabyte; } });
Object.defineProperty(exports, "Terabyte", { enumerable: true, get: function () { return storage_ts_1.Terabyte; } });
Object.defineProperty(exports, "Petabyte", { enumerable: true, get: function () { return storage_ts_1.Petabyte; } });
const unitConvert = {
    Inch: distance_ts_1.Inch, Centimeter: distance_ts_1.Centimeter, Meter: distance_ts_1.Meter, Kilometer: distance_ts_1.Kilometer, Mile: distance_ts_1.Mile, Yard: distance_ts_1.Yard, Foot: distance_ts_1.Foot,
    Kilogram: mass_ts_1.Kilogram, Gram: mass_ts_1.Gram, Ton: mass_ts_1.Ton, Milligram: mass_ts_1.Milligram, Microgram: mass_ts_1.Microgram, Pound: mass_ts_1.Pound, Stone: mass_ts_1.Stone, Ounce: mass_ts_1.Ounce,
    FluidOunce: volume_ts_1.FluidOunce, Gallon: volume_ts_1.Gallon, Liter: volume_ts_1.Liter, Milliliter: volume_ts_1.Milliliter, CubicMeter: volume_ts_1.CubicMeter, Pint: volume_ts_1.Pint, Tablespoon: volume_ts_1.Tablespoon, Cup: volume_ts_1.Cup,
    KilometerPerDay: speed_ts_1.KilometerPerDay, KilometerPerHour: speed_ts_1.KilometerPerHour, KilometerPerMinute: speed_ts_1.KilometerPerMinute, KilometerPerSecond: speed_ts_1.KilometerPerSecond,
    MeterPerDay: speed_ts_1.MeterPerDay, MeterPerHour: speed_ts_1.MeterPerHour, MeterPerMinute: speed_ts_1.MeterPerMinute, MeterPerSecond: speed_ts_1.MeterPerSecond,
    kelvin: temperature_ts_1.kelvin, Fahrenheit: temperature_ts_1.Fahrenheit, Celsius: temperature_ts_1.Celsius,
    Bit: storage_ts_1.Bit, Byte: storage_ts_1.Byte, Kilobyte: storage_ts_1.Kilobyte, Megabyte: storage_ts_1.Megabyte, Gigabyte: storage_ts_1.Gigabyte, Terabyte: storage_ts_1.Terabyte, Petabyte: storage_ts_1.Petabyte
};
exports.default = unitConvert;
//# sourceMappingURL=convert.js.map