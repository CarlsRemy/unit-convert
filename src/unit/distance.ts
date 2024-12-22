import { IOptions } from '../utils';

interface InchConversion {
  toMicrometer: (inch: number, options?: IOptions) => number | string;
  toNanometer: (inch: number, options?: IOptions) => number | string;
  toMillimeter: (inch: number, options?: IOptions) => number | string;
  toCentimeter: (inch: number, options?: IOptions) => number | string;
}
interface MillimetersConversion {
	toMicrometer: (millimeter: number, options?: IOptions) => number | string;
	toNanometer: (millimeter: number, options?: IOptions) => number | string;
	toInch: (millimeter: number, options?: IOptions) => number | string;
	toCentimeter: (millimeter: number, options?: IOptions) => number | string;
	toMeter: (millimeter: number, options?: IOptions) => number | string;
}

interface CentimeterConversion {
  toInch: (centimeter: number, options?: IOptions) => number | string,
	toNanometer: (centimeter: number, options?: IOptions) => number | string,
	toMicrometer: (centimeter: number, options?: IOptions) => number | string,
	toMillimeter: (centimeter: number, options?: IOptions) => number | string,
  toMeter: (centimeter: number,  options?: IOptions) => number | string,
  toKilometer: (centimeter: number,  options?: IOptions) => number | string,
  toMile: (centimeter: number, options?: IOptions) => number | string,
  toYard: (centimeter: number, options?: IOptions) => number | string,
  toFoot: (centimeter: number, options?: IOptions) => number | string,
};

interface MeterConversion {
  toMicrometer: (meter: number, options?: IOptions) => number | string;
  toNanometer: (meter: number, options?: IOptions) => number | string;
  toMillimeter: (meter: number, options?: IOptions) => number | string;
  toCentimeter: (meter: number, options?: IOptions) => number | string;
  toInch: (meter: number, options?: IOptions) => number | string;
  toKilometer: (meter: number, options?: IOptions) => number | string;
  toMile: (meter: number, options?: IOptions) => number | string;
  toYard: (meter: number, options?: IOptions) => number | string;
	toFoot: (meter: number, options?: IOptions) => number | string;
}

interface MileConversion {
	toMeter: (mile: number, options?: IOptions) => number | string;
	toKilometer: (mile: number, options?: IOptions) => number | string;
	toYard: (mile: number, options?: IOptions) => number | string;
	toFoot: (mile: number, options?: IOptions) => number | string;
	toInch: (mile: number, options?: IOptions) => number | string;
	toCentimeter: (mile: number, options?: IOptions) => number | string;
	toMillimeter: (mile: number, options?: IOptions) => number | string;
	toMicrometer: (mile: number, options?: IOptions) => number | string;
	toNanometer: (mile: number, options?: IOptions) => number | string;
}

interface KilometerConversion {
	toInch: (kilometer: number, options?: IOptions) => number | string;
	toCentimeter: (kilometer: number, options?: IOptions) => number | string;
	toMillimeter: (kilometer: number, options?: IOptions) => number | string;
	toMicrometer: (kilometer: number, options?: IOptions) => number | string;
	toNanometer: (kilometer: number, options?: IOptions) => number | string;
	toMeter: (kilometer: number, options?: IOptions) => number | string;
	toMile: (kilometer: number, options?: IOptions) => number | string;
	toYard: (kilometer: number, options?: IOptions) => number | string;
	toFoot: (kilometer: number, options?: IOptions) => number | string;
}

interface YardConversion {
	toInch: (yard: number, options?: IOptions) => number | string;
	toCentimeter: (yard: number, options?: IOptions) => number | string;
	toMillimeter: (yard: number, options?: IOptions) => number | string;
	toMicrometer: (yard: number, options?: IOptions) => number | string;
	toNanometer: (yard: number, options?: IOptions) => number | string;
	toMeter: (yard: number, options?: IOptions) => number | string;
	toKilometer: (yard: number, options?: IOptions) => number | string;
	toMile: (yard: number, options?: IOptions) => number | string;
	toFoot: (yard: number, options?: IOptions) => number | string;
}

interface FootConversion {
  toMeter: (foot: number, options?: IOptions) => number | string;
  toKilometer: (foot: number, options?: IOptions) => number | string;
  toMile: (foot: number, options?: IOptions) => number | string;
  toYard: (foot: number, options?: IOptions) => number | string;
}

export {InchConversion, MillimetersConversion, CentimeterConversion,  MeterConversion, KilometerConversion , MileConversion,YardConversion, FootConversion };