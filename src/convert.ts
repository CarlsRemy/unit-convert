import {Inch,Centimeter, Meter, Kilometer, Mile, Yard, Foot} from './converters/distance.ts';
import {Kilogram, Gram, Ton, Milligram, Microgram,Pound, Stone, Ounce} from './converters/mass.ts';
import {FluidOunce, Gallon, Liter, Milliliter, CubicMeter, Pint, Tablespoon, Cup} from './converters/volume.ts';
import {kelvin, Fahrenheit, Celsius} from './converters/temperature.ts';
import {KilometerPerDay, KilometerPerHour, KilometerPerMinute, KilometerPerSecond, MeterPerDay, MeterPerHour, MeterPerMinute, MeterPerSecond} from './converters/speed.ts';
import {Bit, Byte, Kilobyte, Megabyte, Gigabyte, Terabyte, Petabyte} from './converters/storage.ts';
import {Milliseconds, Seconds, Minutes, Hours, Days, Weeks, Months, Years} from './converters/time.ts';

// distance Units
export { Inch, Centimeter, Meter, Kilometer, Mile, Yard, Foot,
	Kilogram, Gram, Ton, Milligram, Microgram, Pound, Stone, Ounce,
	FluidOunce, Gallon, Liter, Milliliter, CubicMeter, Pint, Tablespoon, Cup ,
	KilometerPerDay, KilometerPerHour, KilometerPerMinute, KilometerPerSecond,
	MeterPerDay, MeterPerHour, MeterPerMinute, MeterPerSecond,
	kelvin, Fahrenheit, Celsius ,
  Bit, Byte, Kilobyte, Megabyte, Gigabyte, Terabyte, Petabyte,
	Milliseconds, Seconds, Minutes, Hours, Days, Weeks, Months, Years };

const unitConvert = {
	Inch, Centimeter, Meter, Kilometer, Mile, Yard, Foot,
	Kilogram, Gram, Ton, Milligram, Microgram, Pound, Stone, Ounce,
	FluidOunce, Gallon, Liter, Milliliter, CubicMeter, Pint, Tablespoon, Cup,
	KilometerPerDay, KilometerPerHour, KilometerPerMinute, KilometerPerSecond,
	MeterPerDay, MeterPerHour, MeterPerMinute, MeterPerSecond,
	kelvin, Fahrenheit, Celsius,
	Bit, Byte, Kilobyte, Megabyte, Gigabyte, Terabyte, Petabyte,
	Milliseconds, Seconds, Minutes, Hours, Days, Weeks, Months, Years 
};

export default unitConvert;