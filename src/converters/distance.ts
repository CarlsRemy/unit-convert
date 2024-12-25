/**
 * Convert a unit to another unit
 * @author Carlos Ismael .Y .R
 * 
 * @param value - The value to convert
 * @param Options - The options to convert
 * @returns The converted value 
 * @example Meter.toKilometer(1000, {"unitDisplay": "short"}) // 1 km
*/
import { IOptions,  _convert } from './utils.ts'; 

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

const Inch:InchConversion = {
	toMicrometer: (inch: number = 0, options = {}) => {
		if (isNaN(inch)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		const Micrometers = (inch == 0) ? 0 : inch * 25400;
		return _convert(Micrometers, 'micrometer', options);
	},
	toNanometer: (inch: number = 0, options = {}) => {
		if (isNaN(inch)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		const Nanometers = (inch == 0) ? 0 : inch * 25400000;
		return _convert(Nanometers, 'nanometer', options);
	},
	toMillimeter: (inch: number = 0, options = {}) => {
		if (isNaN(inch)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		const Milliliters = (inch == 0) ? 0 : inch * 25.4;
		return _convert(Milliliters, 'millimeter', options);
	},
	toCentimeter: (inch: number = 0, options = {}) => {
		if (isNaN(inch)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		const Centimeters = (inch == 0) ? 0 : inch * 2.54;
		return _convert(Centimeters, 'centimeter', options);
	},
}
const Millimeter:MillimetersConversion = {
	toMicrometer: (millimeter: number = 0, options: IOptions = {}) => {
		if (isNaN(millimeter)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		const Micrometers = (millimeter == 0) ? 0 : millimeter * 1000;
		return _convert(Micrometers, 'micrometer', options);
	},
	toNanometer: (millimeter: number = 0, options: IOptions = {}) => {
		if (isNaN(millimeter)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		const Nanometers = (millimeter == 0) ? 0 : millimeter * 1000000;
		return _convert(Nanometers, 'nanometer', options);
	},
	toInch: (millimeter: number = 0, options: IOptions = {}) => {
		if (isNaN(millimeter)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		const Inch = (millimeter == 0) ? 0 : millimeter * 0.0393701;
		return _convert(Inch, 'inch', options);
	},
	toCentimeter: (millimeter: number = 0, options: IOptions = {}) => {
		if (isNaN(millimeter)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		const Centimeters = (millimeter == 0) ? 0 : millimeter / 10;
		return _convert(Centimeters, 'centimeter', options);
	},
	toMeter: (millimeter: number = 0, options: IOptions = {}) => {
		if (isNaN(millimeter)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		const Meter = (millimeter == 0) ? 0 : millimeter / 1000;
		return _convert(Meter, 'meter', options);
	},
}

const Centimeter:CentimeterConversion = {
	toMicrometer: (centimeter: number = 0, options: IOptions = {}) => {
		if (isNaN(centimeter)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		const Micrometers = (centimeter == 0) ? 0 : centimeter * 10000;
		return _convert(Micrometers, 'micrometer', options);
	},
	toNanometer: (centimeter: number = 0, options:IOptions  = {}) => {
		if (isNaN(centimeter)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		const Nanometers = (centimeter == 0) ? 0 : centimeter * 10000000;
		return _convert(Nanometers, 'nanometer', options);
	},
	toMillimeter: (centimeter: number = 0, options:IOptions = {}) => {
		if (isNaN(centimeter)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		const Milliliters = (centimeter == 0) ? 0 : centimeter * 10;
		return _convert(Milliliters, 'millimeter', options);
	},
	toInch: (centimeter: number = 0, options:IOptions  = {}) => {
		if (isNaN(centimeter)) {
			throw new Error('El valor introducido no es un número válido.');
		}

		const Inch = (centimeter == 0) ? 0 : centimeter * 0.393701;
		return _convert(Inch, 'inch', options);
	},

	toMeter: (centimeter: number = 0, options:IOptions  = {}) => {
		if (isNaN(centimeter)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		const Meter = (centimeter == 0) ? 0 : centimeter / 100;
		return _convert(Meter, 'meter', options);
	},
	toKilometer: (centimeter: number = 0, options:IOptions  = {}) => {
		if (isNaN(centimeter)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		const Kilometer = (centimeter == 0) ? 0 : centimeter / 100000;
		return _convert(Kilometer, 'kilometer', options);
	},
	toMile: (centimeter: number = 0, options:IOptions  = {}) => {
		if (isNaN(centimeter)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		const Mile = (centimeter == 0) ? 0 : centimeter * 0.0000062137;
		return _convert(Mile, 'mile', options);
	},
	toYard: (centimeter: number = 0, options:IOptions = {}) => {
		if (isNaN(centimeter)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		const Yard = (centimeter == 0) ? 0 : centimeter * 0.0109361;
		return _convert(Yard, 'yard', options);
	},
	toFoot: (centimeter: number = 0, options:IOptions  = {}) => {
		if (isNaN(centimeter)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		const Foot = (centimeter == 0) ? 0 : centimeter * 0.0328084;
		return _convert(Foot, 'foot', options);
	}
}

const Meter:MeterConversion = {
	toMicrometer: (meter: number = 0, options:IOptions  = {}) => {
		if (isNaN(meter)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		const Micrometers = (meter == 0) ? 0 : meter * 1000000;
		return _convert(Micrometers, 'micrometer', options);
	},
	toNanometer: (meter: number = 0, options:IOptions  = {}) => {
		if (isNaN(meter)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		const Nanometers = (meter == 0) ? 0 : meter * 1000000000;
		return _convert(Nanometers, 'nanometer', options);
	},
	toMillimeter: (meter: number = 0, options:IOptions  = {}) => {
		if (isNaN(meter)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		const Milliliters = (meter == 0) ? 0 : meter * 1000;
		return _convert(Milliliters, 'millimeter', options);
	},
	toCentimeter: (meter: number = 0, options:IOptions  = {}) => {
		if (isNaN(meter)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		const Centimeters = (meter == 0) ? 0 : meter * 100;
		return _convert(Centimeters, 'centimeter', options);
	},
	toInch: (meter: number = 0, options:IOptions  = {}) => {
		if (isNaN(meter)) {
			throw new Error('El valor introducido no es un número válido.');
		}

		const Inch = (meter == 0) ? 0 : meter * 39.3701;
		return _convert(Inch, 'inch', options);
	},

	toKilometer: (meter: number = 0, options:IOptions  = {}) => {
		if (isNaN(meter)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		const Meter = (meter == 0) ? 0 : meter / 1000;
		return _convert(Meter, 'kilometer', options);
	},
	toMile: (kilometer: number = 0, options:IOptions  = {}) => {
		if (isNaN(kilometer)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		const Mile = (kilometer == 0) ? 0 : kilometer * 0.621371;
		return _convert(Mile, 'mile', options);
	},
	toYard: (meter: number = 0, options:IOptions  = {}) => {
		if (isNaN(meter)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		const Yard = (meter == 0) ? 0 : meter * 1093.;
		return _convert(Yard, 'yard', options);
	},
	toFoot: (meter: number = 0, options:IOptions  = {}) => {
		if (isNaN(meter)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		const Foot = (meter == 0) ? 0 : meter * 3280.84;
		return _convert(Foot, 'foot', options);
	},
};

const Kilometer: KilometerConversion = {
	toMicrometer: (kilometer: number = 0, options = {}) => {
		if (isNaN(kilometer)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		const Micrometers = (kilometer == 0) ? 0 : kilometer * 1000000000;
		return _convert(Micrometers, 'micrometer', options);
	},
	toNanometer: (kilometer: number = 0, options = {}) => {
		if (isNaN(kilometer)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		const Nanometers = (kilometer == 0) ? 0 : kilometer * 1000000000000;
		return _convert(Nanometers, 'nanometer', options);
	},
	toMillimeter: (kilometer: number = 0, options = {}) => {
		if (isNaN(kilometer)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		const Milliliters = (kilometer == 0) ? 0 : kilometer * 1000000;
		return _convert(Milliliters, 'millimeter', options);
	},
	toCentimeter: (kilometer: number = 0, options = {}) => {
		if (isNaN(kilometer)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		const Centimeters = (kilometer == 0) ? 0 : kilometer * 100000;
		return _convert(Centimeters, 'centimeter', options);
	},
	toInch: (kilometer: number = 0, options = {}) => {
		if (isNaN(kilometer)) {
			throw new Error('El valor introducido no es un número válido.');
		}

		const Inch = (kilometer == 0) ? 0 : kilometer * 39370.1;
		return _convert(Inch, 'inch', options);
	},

	toMeter: (kilometer: number = 0, options = {}) => {
		if (isNaN(kilometer)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		const Meter = (kilometer == 0) ? 0 : kilometer * 1000;
		return _convert(Meter, 'meter', options);
	},
	toMile: (kilometer: number = 0, options = {}) => {
		if (isNaN(kilometer)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		const Mile = (kilometer == 0) ? 0 : kilometer * 0.621371;
		return _convert(Mile, 'mile', options);
	},
	toYard: (kilometer: number = 0, options = {}) => {
		if (isNaN(kilometer)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		const Yard = (kilometer == 0) ? 0 : kilometer * 1093.61;
		return _convert(Yard, 'yard', options);
	},
	toFoot: (kilometer: number = 0, options = {}) => {
		if (isNaN(kilometer)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		const Foot = (kilometer == 0) ? 0 : kilometer * 3280.84;
		return _convert(Foot, 'foot', options);
	},
};

const Mile: MileConversion = {
	toNanometer: (mile: number = 0, options:IOptions  = {}) => {
		if (isNaN(mile)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		const Nanometers = (mile == 0) ? 0 : mile * 1609344000000;
		return _convert(Nanometers, 'nanometer', options);
	},
	toMillimeter: (mile: number = 0, options:IOptions  = {}) => {
		if (isNaN(mile)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		const Millimeters = (mile == 0) ? 0 : mile * 1609344;
		return _convert(Millimeters, 'millimeter', options);
	},

	toMicrometer: (mile: number = 0, options:IOptions  = {}) => {
		if (isNaN(mile)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		const Micrometers = (mile == 0) ? 0 : mile * 1609340000;
		return _convert(Micrometers, 'micrometer', options);
	},
	toInch: (mile: number = 0, options:IOptions  = {}) => {
		if (isNaN(mile)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		const Inch = (mile == 0) ? 0 : mile * 63360;
		return _convert(Inch, 'inch', options);
	},
	toCentimeter: (mile: number = 0, options:IOptions  = {}) => {
		if (isNaN(mile)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		const Centimeters = (mile == 0) ? 0 : mile * 160934;
		return _convert(Centimeters, 'centimeter', options);
	},
	toMeter: (mile: number = 0, options:IOptions  = {}) => {
		if (isNaN(mile)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		const Meter = (mile == 0) ? 0 : mile * 1609.34;
		return _convert(Meter, 'meter', options);
	},

	toKilometer: (mile: number = 0, options:IOptions  = {}) => {
		if (isNaN(mile)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		const Kilometer = (mile == 0) ? 0 : mile * 1.60934;
		return _convert(Kilometer, 'kilometer', options);
	},
	toYard: (mile: number = 0, options:IOptions  = {}) => {
		if (isNaN(mile)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		const Yard = (mile == 0) ? 0 : mile * 1760;
		return _convert(Yard, 'yard', options);
	},
	toFoot: (mile: number = 0, options:IOptions  = {}) => {
		if (isNaN(mile)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		const Foot = (mile == 0) ? 0 : mile * 5280;
		return _convert(Foot, 'foot', options);
	}
}

const Yard: YardConversion = {
	toNanometer: (yard: number = 0, options:IOptions  = {}) => {
		if (isNaN(yard)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		const Nanometers = (yard == 0) ? 0 : yard * 914400000;
		return _convert(Nanometers, 'nanometer', options);
	},

	toInch: (yard: number = 0, options:IOptions  = {}) => {
		if (isNaN(yard)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		const Inch = (yard == 0) ? 0 : yard * 36;
		return _convert(Inch, 'inch', options);
	},
	toCentimeter: (yard: number = 0, options:IOptions  = {}) => {
		if (isNaN(yard)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		const Centimeters = (yard == 0) ? 0 : yard * 91.44;
		return _convert(Centimeters, 'centimeter', options);
	},
	toMillimeter: (yard: number = 0, options:IOptions  = {}) => {
		if (isNaN(yard)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		const Millimeters = (yard == 0) ? 0 : yard * 914.4;
		return _convert(Millimeters, 'millimeter', options);
	},
	toMicrometer: (yard: number = 0, options:IOptions  = {}) => {
		if (isNaN(yard)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		const Micrometers = (yard == 0) ? 0 : yard * 914400;
		return _convert(Micrometers, 'micrometer', options);
	},
	toMeter: (yard: number = 0, options:IOptions  = {}) => {
		if (isNaN(yard)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		const Meter = (yard == 0) ? 0 : yard * 0.9144;
		return _convert(Meter, 'meter', options);
	},
	toKilometer: (yard: number = 0, options:IOptions  = {}) => {
		if (isNaN(yard)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		const Kilometer = (yard == 0) ? 0 : yard * 0.0009144;
		return _convert(Kilometer, 'kilometer', options);
	},
	toMile: (yard: number = 0, options:IOptions  = {}) => {
		if (isNaN(yard)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		const Mile = (yard == 0) ? 0 : yard * 0.000568182;
		return _convert(Mile, 'mile', options);
	},

	toFoot: (yard: number = 0, options:IOptions  = {}) => {
		if (isNaN(yard)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		const Foot = (yard == 0) ? 0 : yard * 3;
		return _convert(Foot, 'foot', options);
	}
}

const Foot: FootConversion = {
	toMeter: (foot:number = 0, options: IOptions = {}): number | string => {
		if (isNaN(foot)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		const Meter = (foot == 0) ? 0 : foot * 0.3048;
		return _convert(Meter, 'meter', options);
	},
	toKilometer: (foot: number = 0, options: IOptions = {}): number | string => {
		if (isNaN(foot)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		const Kilometer = (foot == 0) ? 0 : foot * 0.0003048;
		return _convert(Kilometer, 'kilometer', options);
	},
	toMile: (foot:number = 0, options: IOptions= {}): number | string => {
		if (isNaN(foot)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		const Mile = (foot == 0) ? 0 : foot * 0.000189394;
		return _convert(Mile, 'mile', options);
	},
	toYard: (foot: number = 0, options: IOptions = {}): number | string => {
		if (isNaN(foot)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		const Yard = (foot == 0) ? 0 : foot * 0.333333;
		return _convert(Yard, 'yard', options);
	}
}

export { Inch,Millimeter,Centimeter, Meter, Kilometer, Mile, Yard, Foot};