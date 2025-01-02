/**
 * Convert a unit to another unit
 * Time units measurements
 * @author Carlos Ismael .Y .R
 * 
 * @param value - The value to convert
 * @param Options - The options to convert
 * @returns The converted value
*/
import { IOptions,  _convert } from './utils.ts';

interface IMilliseconds {
	toSeconds(value: number, options: IOptions): String | number;
	toMinutes(value: number, options: IOptions): String | number;
	toHours(value: number, options: IOptions): String | number;
	toDays(value: number, options: IOptions): String | number;
	toWeeks(value: number, options: IOptions): String | number;
	toMonths(value: number, options: IOptions): String | number;
	toYears(value: number, options: IOptions): String | number;
}

interface ISeconds {
	toMilliseconds(value: number, options: IOptions): String | number;
	toMinutes(value: number, options: IOptions): String | number;
	toHours(value: number, options: IOptions): String | number;
	toDays(value: number, options: IOptions): String | number;
	toWeeks(value: number, options: IOptions): String | number;
	toMonths(value: number, options: IOptions): String | number;
	toYears(value: number, options: IOptions): String | number;
}

interface IMinutes {
	toMilliseconds(value: number, options: IOptions): String | number;
	toSeconds(value: number, options: IOptions): String | number;
	toHours(value: number, options: IOptions): String | number;
	toDays(value: number, options: IOptions): String | number;
	toWeeks(value: number, options: IOptions): String | number;
	toMonths(value: number, options: IOptions): String | number;
	toYears(value: number, options: IOptions): String | number;
}

interface IHours {
	toMilliseconds(value: number, options: IOptions): String | number;
	toSeconds(value: number, options: IOptions): String | number;
	toMinutes(value: number, options: IOptions): String | number;
	toDays(value: number, options: IOptions): String | number;
	toWeeks(value: number, options: IOptions): String | number;
	toMonths(value: number, options: IOptions): String | number;
	toYears(value: number, options: IOptions): String | number;
}

interface IDays {
	toMilliseconds(value: number, options: IOptions): String | number;
	toSeconds(value: number, options: IOptions): String | number;
	toMinutes(value: number, options: IOptions): String | number;
	toHours(value: number, options: IOptions): String | number;
	toWeeks(value: number, options: IOptions): String | number;
	toMonths(value: number, options: IOptions): String | number;
	toYears(value: number, options: IOptions): String | number;
}

interface IWeeks {
	toMilliseconds(value: number, options: IOptions): String | number;
	toSeconds(value: number, options: IOptions): String | number;
	toMinutes(value: number, options: IOptions): String | number;
	toHours(value: number, options: IOptions): String | number;
	toDays(value: number, options: IOptions): String | number;
	toMonths(value: number, options: IOptions): String | number;
	toYears(value: number, options: IOptions): String | number;
}

interface IMonths {
	toMilliseconds(value: number, options: IOptions): String | number;
	toSeconds(value: number, options: IOptions): String | number;
	toMinutes(value: number, options: IOptions): String | number;
	toHours(value: number, options: IOptions): String | number;
	toDays(value: number, options: IOptions): String | number;
	toWeeks(value: number, options: IOptions): String | number;
	toYears(value: number, options: IOptions): String | number;
}

interface IYears {
	toMilliseconds(value: number, options: IOptions): String | number;
	toSeconds(value: number, options: IOptions): String | number;
	toMinutes(value: number, options: IOptions): String | number;
	toHours(value: number, options: IOptions): String | number;
	toDays(value: number, options: IOptions): String | number;
	toWeeks(value: number, options: IOptions): String | number;
	toMonths(value: number, options: IOptions): String | number;
}

const Milliseconds: IMilliseconds = {
	toSeconds(value: number=0, options: IOptions={}): String | number {
		if(isNaN(value)){
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value == 0) ? 0 :value / 1_000;
		return _convert(value, "seconds", options);
	},
	toMinutes(value: number=0, options: IOptions={}): String | number {
		if(isNaN(value)){
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value == 0) ? 0 :value / 60_000;
		return _convert(value, "minutes", options);
	},
	toHours(value: number=0, options: IOptions={}): String | number {
		if(isNaN(value)){
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value == 0) ? 0 :value / 3_600_000;
		return _convert(value, "hours", options);
	},
	toDays(value: number=0, options: IOptions={}): String | number {
		if(isNaN(value)){
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value == 0) ? 0 : value / 86_400_000;
		return _convert(value, "days", options);
	},
	toWeeks(value: number=0, options: IOptions={}): String | number {
		if(isNaN(value)){
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value == 0) ? 0 :value / 604_800_000;
		return _convert(value, "weeks", options);
	},
	toMonths(value: number=0, options: IOptions={}): String | number {
		if(isNaN(value)){
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value == 0) ? 0 :value / 2_628_000_000;
		return _convert(value, "months", options);
	},
	toYears(value: number=0, options: IOptions={}): String | number {
		if(isNaN(value)){
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value == 0) ? 0 : value / 31_540_000_000;
		return _convert(value, "years", options);
	}
}

const Seconds: ISeconds = {
	toMilliseconds(value: number=0, options: IOptions={}): String | number {
		if(isNaN(value)){
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value == 0) ? 0 : value * 1_000;
		return _convert(value, "milliseconds", options);
	},
	toMinutes(value: number=0, options: IOptions={}): String | number {
		if(isNaN(value)){
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value == 0) ? 0 : value / 60;
		return _convert(value, "minutes", options);
	},
	toHours(value: number=0, options: IOptions={}): String | number {
		if(isNaN(value)){
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value == 0) ? 0 : value / 3_600;
		return _convert(value, "hours", options);
	},
	toDays(value: number=0, options: IOptions={}): String | number {
		if(isNaN(value)){
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value == 0) ? 0 : value / 86_400;
		return _convert(value, "days", options);
	},
	toWeeks(value: number=0, options: IOptions={}): String | number {
		if(isNaN(value)){
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value == 0) ? 0 : value / 604_800;
		return _convert(value, "weeks", options);
	},
	toMonths(value: number=0, options: IOptions={}): String | number {
		if(isNaN(value)){
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value == 0) ? 0 : value / 2_628_000;
		return _convert(value, "months", options);
	},
	toYears(value: number=0, options: IOptions={}): String | number {
		if(isNaN(value)){
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value == 0) ? 0 : value / 31_540_000;
		return _convert(value, "years", options);
	}
}

const Minutes: IMinutes = {
	toMilliseconds(value: number=0, options: IOptions={}): String | number {
		if(isNaN(value)){
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value == 0) ? 0 : value * 60_000;
		return _convert(value, "milliseconds", options);
	},
	toSeconds(value: number=0, options: IOptions={}): String | number {
		if(isNaN(value)){
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value == 0) ? 0 : value * 60;
		return _convert(value, "seconds", options);
	},
	toHours(value: number=0, options: IOptions={}): String | number {
		if(isNaN(value)){
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value == 0) ? 0 : value / 60;
		return _convert(value, "hours", options);
	},
	toDays(value: number=0, options: IOptions={}): String | number {
		if(isNaN(value)){
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value == 0) ? 0 : value / 1_440;
		return _convert(value, "days", options);
	},
	toWeeks(value: number=0, options: IOptions={}): String | number {
		if(isNaN(value)){
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value == 0) ? 0 : value / 10_080;
		return _convert(value, "weeks", options);
	},
	toMonths(value: number=0, options: IOptions={}): String | number {
		if(isNaN(value)){
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value == 0) ? 0 : value / 43_200;
		return _convert(value, "months", options);
	},
	toYears(value: number=0, options: IOptions={}): String | number {
		if(isNaN(value)){
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value == 0) ? 0 : value / 525_600;
		return _convert(value, "years", options);
	}
}

const Hours: IHours = {
	toMilliseconds(value: number=0, options: IOptions={}): String | number {
		if(isNaN(value)){
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value == 0) ? 0 : value * 3_600_000;
		return _convert(value, "milliseconds", options);
	},
	toSeconds(value: number=0, options: IOptions={}): String | number {
		if(isNaN(value)){
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value == 0) ? 0 : value * 3_600;
		return _convert(value, "seconds", options);
	},
	toMinutes(value: number=0, options: IOptions={}): String | number {
		if(isNaN(value)){
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value == 0) ? 0 : value * 60;
		return _convert(value, "minutes", options);
	},
	toDays(value: number=0, options: IOptions={}): String | number {
		if(isNaN(value)){
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value == 0) ? 0 : value / 24;
		return _convert(value, "days", options);
	},
	toWeeks(value: number=0, options: IOptions={}): String | number {
		if(isNaN(value)){
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value == 0) ? 0 : value / 168;
		return _convert(value, "weeks", options);
	},
	toMonths(value: number=0, options: IOptions={}): String | number {
		if(isNaN(value)){
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value == 0) ? 0 : value / 720;
		return _convert(value, "months", options);
	},
	toYears(value: number=0, options: IOptions={}): String | number {
		if(isNaN(value)){
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value == 0) ? 0 : value / 8_760;
		return _convert(value, "years", options);
	}
}

const Days: IDays = {
	toMilliseconds(value: number=0, options: IOptions={}): String | number {
		if(isNaN(value)){
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value == 0) ? 0 : value * 86_400_000;
		return _convert(value, "milliseconds", options);
	},
	toSeconds(value: number=0, options: IOptions={}): String | number {
		if(isNaN(value)){
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value == 0) ? 0 : value * 86_400;
		return _convert(value, "seconds", options);
	},
	toMinutes(value: number=0, options: IOptions={}): String | number {
		if(isNaN(value)){
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value == 0) ? 0 : value * 1_440;
		return _convert(value, "minutes", options);
	},
	toHours(value: number=0, options: IOptions={}): String | number {
		if(isNaN(value)){
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value == 0) ? 0 :value * 24;
		return _convert(value, "hours", options);
	},
	toWeeks(value: number=0, options: IOptions={}): String | number {
		if(isNaN(value)){
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value == 0) ? 0 :value / 7;
		return _convert(value, "weeks", options);
	},
	toMonths(value: number=0, options: IOptions={}): String | number {
		if(isNaN(value)){
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value == 0) ? 0 :value / 30;
		return _convert(value, "months", options);
	},
	toYears(value: number=0, options: IOptions={}): String | number {
		if(isNaN(value)){
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value == 0) ? 0 :value / 365;
		return _convert(value, "years", options);
	}
}

const Weeks: IWeeks = {
	toMilliseconds(value: number=0, options: IOptions={}): String | number {
		if(isNaN(value)){
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value == 0) ? 0 :value * 604_800_000;
		return _convert(value, "millisecond",options);
	},
	toSeconds(value: number=0, options: IOptions={}): String | number {
		if(isNaN(value)){
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value == 0) ? 0 :value * 604_800;
		return _convert(value, "second", options);
	},
	toMinutes(value: number=0, options: IOptions={}): String | number {
		if(isNaN(value)){
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value == 0) ? 0 :value * 10_080;
		return _convert(value, "minute", options);
	},
	toHours(value: number=0, options: IOptions={}): String | number {
		if(isNaN(value)){
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value == 0) ? 0 :value * 168;
		return _convert(value, "hour",options);
	},
	toDays(value: number=0, options: IOptions={}): String | number {
		if(isNaN(value)){
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value == 0) ? 0 :value * 7;
		return _convert(value, "day", options);
	},
	toMonths(value: number=0, options: IOptions={}): String | number {
		if(isNaN(value)){
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value == 0) ? 0 :value / 4.34524;
		return _convert(value,"month", options);
	},
	toYears(value: number=0, options: IOptions={}): String | number {
		if(isNaN(value)){
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value == 0) ? 0 : value / 52.1429;
		return _convert(value, "year",options);
	}
}

const Months: IMonths = {
	toMilliseconds(value: number=0, options: IOptions={}): String | number {
		if(isNaN(value)){
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value == 0) ? 0 : value * 2_628_000_000;
		return _convert(value,"millisecond", options);
	},
	toSeconds(value: number=0, options: IOptions={}): String | number {
		if(isNaN(value)){
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value == 0) ? 0 : value * 2_628_000;
		return _convert(value,"second", options);
	},
	toMinutes(value: number=0, options: IOptions={}): String | number {
		if(isNaN(value)){
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value == 0) ? 0 : value * 43_800;
		return _convert(value, "minute", options);
	},
	toHours(value: number=0, options: IOptions={}): String | number {
		if(isNaN(value)){
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value == 0) ? 0 : value * 730.001;
		return _convert(value , "hour", options);
	},
	toDays(value: number=0, options: IOptions={}): String | number {
		if(isNaN(value)){
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value == 0) ? 0 : value * 30.4167;
		return _convert(value,"day", options);
	},
	toWeeks(value: number=0, options: IOptions={}): String | number {
		if(isNaN(value)){
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value == 0) ? 0 : value * 4.34524;
		return _convert(value ,"week", options);
	},
	toYears(value: number=0, options: IOptions={}): String | number {
		if(isNaN(value)){
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value == 0) ? 0 : value / 12;
		return _convert(value, "year", options);
	}
}

const Years: IYears = {
	toMilliseconds(value: number=0, options: IOptions={}): String | number {
		if(isNaN(value)){
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value == 0) ? 0 :value * 31_540_000_000;
		return _convert(value, "millisecond", options);
	},
	toSeconds(value: number=0, options: IOptions={}): String | number {
		if(isNaN(value)){
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value == 0) ? 0 :value * 31_540_000;
		return _convert(value, "second", options);
	},
	toMinutes(value: number=0, options: IOptions={}): String | number {
		if(isNaN(value)){
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value == 0) ? 0 : value * 525_600;
		return _convert(value, "minute", options);
	},
	toHours(value: number=0, options: IOptions={}): String | number {
		if(isNaN(value)){
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value == 0) ? 0 :value * 8_760;
		return _convert(value, "hour", options);
	},
	toDays(value: number=0, options: IOptions={}): String | number {
		if(isNaN(value)){
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value == 0) ? 0 :value * 365;
		return _convert(value, "day", options);
	},
	toWeeks(value: number=0, options: IOptions={}): String | number {
		if(isNaN(value)){
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value == 0) ? 0 :value * 52.1429;
		return _convert(value, "week", options);
	},
	toMonths(value: number=0, options: IOptions={}): String | number {
		if(isNaN(value)){
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value == 0) ? 0 : value * 12;
		return _convert(value, "month", options);
	}
}

export {Milliseconds, Seconds, Minutes, Hours, Days, Weeks, Months, Years};