/**
 * Convert a unit to another unit
 * Speed units measurements
 * @author Carlos Ismael .Y .R
 * 
 * @param value - The value to convert
 * @param Options - The options to convert
 * @returns The converted value
*/
import { Kilometer } from './distance.ts';
import { IOptions,  _convert } from './utils.ts'; 

interface IKilometerPerDay {
	toMeterPerDay(value:number, options: IOptions): number | string;
	toMeterPerHour(value:number, options: IOptions): number | string;
	toMeterPerMinute(value:number, options: IOptions): number | string;
	toMeterPerSecond(value:number, options: IOptions): number | string;
	toKilometerPerHour(value:number, options: IOptions): number | string;
	toKilometerPerMinute(value:number, options: IOptions): number | string;
	toKilometerPerSecond(value:number, options: IOptions): number | string;
}

interface IKilometerPerHour {
	toMeterPerDay(value:number, options: IOptions): number | string;
	toMeterPerHour(value:number, options: IOptions): number | string;
	toMeterPerMinute(value:number, options: IOptions): number | string;
	toMeterPerSecond(value:number, options: IOptions): number | string;
	toKilometerPerDay(value:number, options: IOptions): number | string;
	toKilometerPerMinute(value:number, options: IOptions): number | string;
	toKilometerPerSecond(value:number, options: IOptions): number | string;
}

interface IKilometerPerMinute {
	toMeterPerDay(value:number, options: IOptions): number | string;
	toMeterPerHour(value:number, options: IOptions): number | string;
	toMeterPerMinute(value:number, options: IOptions): number | string;
	toMeterPerSecond(value:number, options: IOptions): number | string;
	toKilometerPerDay(value:number, options: IOptions): number | string;
	toKilometerPerHour(value:number, options: IOptions): number | string;
	toKilometerPerSecond(value:number, options: IOptions): number | string;
}

interface IKilometerPerSecond {
	toMeterPerDay(value:number, options: IOptions): number | string;
	toMeterPerHour(value:number, options: IOptions): number | string;
	toMeterPerMinute(value:number, options: IOptions): number | string;
	toMeterPerSecond(value:number, options: IOptions): number | string;
	toKilometerPerDay(value:number, options: IOptions): number | string;
	toKilometerPerHour(value:number, options: IOptions): number | string;
	toKilometerPerMinute(value:number, options: IOptions): number | string;
}

interface IMeterPerDay {
	toMeterPerHour(value:number, options: IOptions): number | string;
	toMeterPerMinute(value:number, options: IOptions): number | string;
	toMeterPerSecond(value:number, options: IOptions): number | string;
	toKilometerPerDay(value:number, options: IOptions): number | string;
	toKilometerPerHour(value:number, options: IOptions): number | string;
	toKilometerPerMinute(value:number, options: IOptions): number | string;
	toKilometerPerSecond(value:number, options: IOptions): number | string;
}

interface IMeterPerHour {
	toMeterPerDay(value:number, options: IOptions): number | string;
	toMeterPerMinute(value:number, options: IOptions): number | string;
	toMeterPerSecond(value:number, options: IOptions): number | string;
	toKilometerPerDay(value:number, options: IOptions): number | string;
	toKilometerPerHour(value:number, options: IOptions): number | string;
	toKilometerPerMinute(value:number, options: IOptions): number | string;
	toKilometerPerSecond(value:number, options: IOptions): number | string;
}

interface IMeterPerMinute {
	toMeterPerDay(value:number, options: IOptions): number | string;
	toMeterPerHour(value:number, options: IOptions): number | string;
	toMeterPerSecond(value:number, options: IOptions): number | string;
	toKilometerPerDay(value:number, options: IOptions): number | string;
	toKilometerPerHour(value:number, options: IOptions): number | string;
	toKilometerPerMinute(value:number, options: IOptions): number | string;
	toKilometerPerSecond(value:number, options: IOptions): number | string;
}

interface IMeterPerSecond {
	toMeterPerDay(value:number, options: IOptions): number | string;
	toMeterPerHour(value:number, options: IOptions): number | string;
	toMeterPerMinute(value:number, options: IOptions): number | string;
	toKilometerPerDay(value:number, options: IOptions): number | string;
	toKilometerPerHour(value:number, options: IOptions): number | string;
	toKilometerPerMinute(value:number, options: IOptions): number | string;
	toKilometerPerSecond(value:number, options: IOptions): number | string;
}

const KilometerPerDay: IKilometerPerDay = {
	toMeterPerDay(value:number = 0, options: IOptions={}){
		if (isNaN(value)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value == 0) ? 0 : value * 1000;
		return _convert(value,'meter-per-day', options)
	},
	toMeterPerHour(value:number = 0, options: IOptions={}){
		if (isNaN(value)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value == 0) ? 0 : value * 41.6667;
		return _convert(value,'meter-per-hour', options)
	},
	toMeterPerMinute(value:number = 0, options: IOptions={}){
		if (isNaN(value)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value == 0) ? 0 : (value * 1000) / (24 * 60);
		return _convert(value,'meter-per-minute', options)
	},
	toMeterPerSecond(value:number = 0, options: IOptions={}){
		if (isNaN(value)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value == 0) ? 0 : (value * 1000) / (24 * 60 * 60);
		return _convert(value,'meter-per-second', options)
	},

	toKilometerPerHour(value:number = 0, options: IOptions={}){
		if (isNaN(value)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value == 0) ? 0 : value * 24;
		return _convert(value,'kilometer-per-hour', options)
	},

	toKilometerPerMinute(value:number = 0, options: IOptions={}){
		if (isNaN(value)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value == 0) ? 0 : value * (24 * 60);
		return _convert(value,'kilometer-per-minute', options)
	},

	toKilometerPerSecond(value:number = 0, options: IOptions={}){
		if (isNaN(value)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value == 0) ? 0 : value * (24 * 60 * 60);
		return _convert(value,'kilometer-per-second', options)
	},
}

const KilometerPerHour: IKilometerPerHour = {
	toMeterPerDay(value:number = 0, options: IOptions={}){
		if (isNaN(value)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value == 0) ? 0 : (value * 1000) / 24;
		return _convert(value,'meter-per-day', options)
	},
	toMeterPerHour(value:number = 0, options: IOptions={}){
		if (isNaN(value)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value == 0) ? 0 : value * 1000;
		return _convert(value,'meter-per-hour', options)
	},
	toMeterPerMinute(value:number = 0, options: IOptions={}){
		if (isNaN(value)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value == 0) ? 0 : (value * 1000) / 60;
		return _convert(value,'meter-per-minute', options)
	},
	toMeterPerSecond(value:number = 0, options: IOptions={}){
		if (isNaN(value)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value == 0) ? 0 : (value * 1000) / 3600;
		return _convert(value,'meter-per-second', options)
	},

	toKilometerPerDay(value:number = 0, options: IOptions={}){
		if (isNaN(value)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value == 0) ? 0 : value / 24;
		return _convert(value,'kilometer-per-day', options)
	},

	toKilometerPerMinute(value:number = 0, options: IOptions={}){
		if (isNaN(value)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value == 0) ? 0 : value * 60;
		return _convert(value,'kilometer-per-minute', options)
	},

	toKilometerPerSecond(value:number = 0, options: IOptions={}){
		if (isNaN(value)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value == 0) ? 0 : value * 3600;
		return _convert(value,'kilometer-per-second', options)
	}
}

const KilometerPerMinute: IKilometerPerMinute = {
	toKilometerPerDay(value:number = 0, options: IOptions={}){
		if (isNaN(value)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value == 0) ? 0 : value / (24 * 60);
		return _convert(value,'kilometer-per-day', options)
	},
	toKilometerPerHour(value:number = 0, options: IOptions={}){
		if (isNaN(value)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value == 0) ? 0 : value / 60;
		return _convert(value,'kilometer-per-hour', options)
	},
	toKilometerPerSecond(value:number = 0, options: IOptions={}){
		if (isNaN(value)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value == 0) ? 0 : value * 60;
		return _convert(value,'kilometer-per-second', options)
	},
	toMeterPerDay(value:number = 0, options: IOptions={}){
		if (isNaN(value)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value == 0) ? 0 : (value * 1000) / (24 * 60);
		return KilometerPerDay.toMeterPerDay(value, options);
	},

	toMeterPerHour(value:number = 0, options: IOptions={}){
		if (isNaN(value)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value == 0) ? 0 : (value * 1000) / 60;
		return KilometerPerDay.toMeterPerHour(value, options);
	},

	toMeterPerMinute(value:number = 0, options: IOptions={}){
		if (isNaN(value)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value == 0) ? 0 : value * 1000;
		return KilometerPerDay.toMeterPerMinute(value, options);
	},
	toMeterPerSecond(value:number = 0, options: IOptions={}){
		if (isNaN(value)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value == 0) ? 0 : (value * 1000) * 60;
		return KilometerPerDay.toMeterPerSecond(value, options);
	}
}

const KilometerPerSecond: IKilometerPerSecond = {
	toKilometerPerDay(value:number = 0, options: IOptions={}){
		if (isNaN(value)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value == 0) ? 0 : value / (24 * 60 * 60);
		return _convert(value,'kilometer-per-day', options)
	},
	toKilometerPerHour(value:number = 0, options: IOptions={}){
		if (isNaN(value)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value == 0) ? 0 : value / 3600;
		return _convert(value,'kilometer-per-hour', options)
	},
	toKilometerPerMinute(value:number = 0, options: IOptions={}){
		if (isNaN(value)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value == 0) ? 0 : value / 60;
		return _convert(value,'kilometer-per-minute', options)
	},
	toMeterPerDay(value:number = 0, options: IOptions={}){
		if (isNaN(value)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value == 0) ? 0 : (value * 1000) / (24 * 60 * 60);
		return KilometerPerDay.toMeterPerDay(value, options);
	},
	toMeterPerHour(value:number = 0, options: IOptions={}){
		if (isNaN(value)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value == 0) ? 0 : (value * 1000) / 3600;
		return KilometerPerDay.toMeterPerHour(value, options);
	},
	toMeterPerMinute(value:number = 0, options: IOptions={}){
		if (isNaN(value)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value == 0) ? 0 : (value * 1000) / 60;
		return KilometerPerDay.toMeterPerMinute(value, options);
	},
	toMeterPerSecond(value:number = 0, options: IOptions={}){
		if (isNaN(value)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value == 0) ? 0 : value * 1000;
		return KilometerPerDay.toMeterPerSecond(value, options);
	}
}

const MeterPerDay: IMeterPerDay = {
	toMeterPerHour(value:number = 0, options: IOptions={}){
		if(isNaN(value)){
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value == 0) ? 0 : value / 24;
		return _convert(value,'meter-per-hour', options)
	},
	toMeterPerMinute(value:number = 0, options: IOptions={}){
		if(isNaN(value)){
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value == 0) ? 0 : value / (24 * 60);
		return _convert(value,'meter-per-minute', options)
	},
	toMeterPerSecond(value:number = 0, options: IOptions={}){
		if(isNaN(value)){
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value == 0) ? 0 : value / (24 * 60 * 60);
		return _convert(value,'meter-per-second', options)
	},
	toKilometerPerDay(value:number = 0, options: IOptions={}){
		if(isNaN(value)){
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value == 0) ? 0 : value / 1000;
		return _convert(value,'kilometer-per-day', options)
	},
	toKilometerPerHour(value:number = 0, options: IOptions={}){
		if(isNaN(value)){
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value == 0) ? 0 : (value / 1000) * 24;
		return _convert(value,'kilometer-per-hour', options)
	},
	toKilometerPerMinute(value:number = 0, options: IOptions={}){
		if(isNaN(value)){
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value == 0) ? 0 : (value / 1000) * (24 * 60);
		return _convert(value,'kilometer-per-minute', options)
	},
	toKilometerPerSecond(value:number = 0, options: IOptions={}){
		if(isNaN(value)){
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value == 0) ? 0 : (value / 1000) * (24 * 60 * 60);
		return _convert(value,'kilometer-per-second', options)
	}
}

const MeterPerHour: IMeterPerHour = {
	toMeterPerDay(value:number = 0, options: IOptions={}){
		if(isNaN(value)){
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value == 0) ? 0 : value * 24;
		return _convert(value,'meter-per-day', options)
	},
	toMeterPerMinute(value:number = 0, options: IOptions={}){
		if(isNaN(value)){
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value == 0) ? 0 : value / 60;
		return _convert(value,'meter-per-minute', options)
	},
	toMeterPerSecond(value:number = 0, options: IOptions={}){
		if(isNaN(value)){
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value == 0) ? 0 : value / 3600;
		return _convert(value,'meter-per-second', options)
	},
	toKilometerPerDay(value:number = 0, options: IOptions={}){
		if(isNaN(value)){
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value == 0) ? 0 : (value / 1000) * 24;
		return _convert(value,'kilometer-per-day', options)
	},
	toKilometerPerHour(value:number = 0, options: IOptions={}){
		if(isNaN(value)){
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value == 0) ? 0 : value / 1000;
		return _convert(value,'kilometer-per-hour', options)
	},
	toKilometerPerMinute(value:number = 0, options: IOptions={}){
		if(isNaN(value)){
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value == 0) ? 0 : (value / 1000) * 60;
		return _convert(value,'kilometer-per-minute', options)
	},
	toKilometerPerSecond(value:number = 0, options: IOptions={}){
		if(isNaN(value)){
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value == 0) ? 0 : (value / 1000) * 3600;
		return _convert(value,'kilometer-per-second', options)
	}
}

const MeterPerMinute: IMeterPerMinute = {
	toMeterPerDay(value:number = 0, options: IOptions={}){
		if(isNaN(value)){
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value == 0) ? 0 : value / (24 * 60);
		return _convert(value,'meter-per-day', options)
	},
	toMeterPerHour(value:number = 0, options: IOptions={}){
		if(isNaN(value)){
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value == 0) ? 0 : value / 60;
		return _convert(value,'meter-per-hour', options)
	},
	toMeterPerSecond(value:number = 0, options: IOptions={}){
		if(isNaN(value)){
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value == 0) ? 0 : value * 60;
		return _convert(value,'meter-per-second', options)
	},
	toKilometerPerDay(value:number = 0, options: IOptions={}){
		if(isNaN(value)){
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value == 0) ? 0 : (value / 1000) / (24 * 60);
		return _convert(value,'kilometer-per-day', options)
	},
	toKilometerPerHour(value:number = 0, options: IOptions={}){
		if(isNaN(value)){
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value == 0) ? 0 : (value / 1000) / 60;
		return _convert(value,'kilometer-per-hour', options)
	},
	toKilometerPerMinute(value:number = 0, options: IOptions={}){
		if(isNaN(value)){
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value == 0) ? 0 : value / 1000;
		return _convert(value,'kilometer-per-minute', options)
	},
	toKilometerPerSecond(value:number = 0, options: IOptions={}){
		if(isNaN(value)){
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value == 0) ? 0 : (value / 1000) * 60;
		return _convert(value,'kilometer-per-second', options)
	}
}

const MeterPerSecond: IMeterPerSecond = {
	toMeterPerDay(value:number = 0, options: IOptions={}){
		if(isNaN(value)){
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value == 0) ? 0 : value / (24 * 60 * 60);
		return _convert(value,'meter-per-day', options)
	},
	toMeterPerHour(value:number = 0, options: IOptions={}){
		if(isNaN(value)){
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value == 0) ? 0 : value / 3600;
		return _convert(value,'meter-per-hour', options)
	},
	toMeterPerMinute(value:number = 0, options: IOptions={}){
		if(isNaN(value)){
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value == 0) ? 0 : value / 60;
		return _convert(value,'meter-per-minute', options)
	},
	toKilometerPerDay(value:number = 0, options: IOptions={}){
		if(isNaN(value)){
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value == 0) ? 0 : (value / 1000) / (24 * 60 * 60);
		return _convert(value,'kilometer-per-day', options)
	},
	toKilometerPerHour(value:number = 0, options: IOptions={}){
		if(isNaN(value)){
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value == 0) ? 0 : (value / 1000) / 3600;
		return _convert(value,'kilometer-per-hour', options)
	},
	toKilometerPerMinute(value:number = 0, options: IOptions={}){
		if(isNaN(value)){
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value == 0) ? 0 : (value / 1000) / 60;
		return _convert(value,'kilometer-per-minute', options)
	},
	toKilometerPerSecond(value:number = 0, options: IOptions={}){
		if(isNaN(value)){
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value == 0) ? 0 : value / 1000;
		return _convert(value,'kilometer-per-second', options)
	}
}

export {KilometerPerDay, KilometerPerHour, KilometerPerMinute, KilometerPerSecond, MeterPerDay, MeterPerHour, MeterPerMinute, MeterPerSecond}