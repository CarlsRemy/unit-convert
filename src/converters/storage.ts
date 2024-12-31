/**
 * Convert a unit to another unit
 * Storage units measurements
 * @author Carlos Ismael .Y .R
 * 
 * @param value - The value to convert
 * @param options - The options to convert
 * @returns The converted value
*/
import { IOptions,  _convert } from './utils.ts'; 

interface IBit {
	toByte(value:number, options: IOptions): number | string;
	toKilobyte(value:number, options: IOptions): number | string;
	toMegabyte(value:number, options: IOptions): number | string;
	toGigabyte(value:number, options: IOptions): number | string;
	toTerabyte(value:number, options: IOptions): number | string;
	toPetabyte(value:number, options: IOptions): number | string;
}

interface IByte {
	toBit(value:number, options: IOptions): number | string;
	toKilobyte(value:number, options: IOptions): number | string;
	toMegabyte(value:number, options: IOptions): number | string;
	toGigabyte(value:number, options: IOptions): number | string;
	toTerabyte(value:number, options: IOptions): number | string;
	toPetabyte(value:number, options: IOptions): number | string;
}

interface IGigabyte {
	toBit(value:number, options: IOptions): number | string;
	toByte(value:number, options: IOptions): number | string;
	toKilobyte(value:number, options: IOptions): number | string;
	toMegabyte(value:number, options: IOptions): number | string;
	toTerabyte(value:number, options: IOptions): number | string;
	toPetabyte(value:number, options: IOptions): number | string;
}

interface IKilobyte {
	toBit(value:number, options: IOptions): number | string;
	toByte(value:number, options: IOptions): number | string;
	toMegabyte(value:number, options: IOptions): number | string;
	toGigabyte(value:number, options: IOptions): number | string;
	toTerabyte(value:number, options: IOptions): number | string;
	toPetabyte(value:number, options: IOptions): number | string;
}

interface IMegabyte {
	toBit(value:number, options: IOptions): number | string;
	toByte(value:number, options: IOptions): number | string;
	toKilobyte(value:number, options: IOptions): number | string;
	toGigabyte(value:number, options: IOptions): number | string;
	toTerabyte(value:number, options: IOptions): number | string;
	toPetabyte(value:number, options: IOptions): number | string;
}



interface IPetabyte {
	toBit(value:number, options: IOptions): number | string;
	toByte(value:number, options: IOptions): number | string;
	toKilobyte(value:number, options: IOptions): number | string;
	toMegabyte(value:number, options: IOptions): number | string;
	toGigabyte(value:number, options: IOptions): number | string;
	toTerabyte(value:number, options: IOptions): number | string;
}


interface ITerabyte {
	toBit(value:number, options: IOptions): number | string;
	toByte(value:number, options: IOptions): number | string;
	toKilobyte(value:number, options: IOptions): number | string;
	toMegabyte(value:number, options: IOptions): number | string;
	toGigabyte(value:number, options: IOptions): number | string;
	toPetabyte(value:number, options: IOptions): number | string;
}

const Bit: IBit = {
	toByte: (value: number=0, options: IOptions={}) =>{
		if (isNaN(value)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value <= 0) ? 0 : value / 8;
		return _convert(value, "byte",options)
	},
	toKilobyte: (value: number=0, options: IOptions={}) => {
		if (isNaN(value)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value <= 8) ? 0 : value / 8_000;
		return _convert(value, "kilobyte",options)
	},
	toMegabyte: (value: number=0, options: IOptions={}) => {
		if (isNaN(value)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value <= 8_000) ? 0 : value / 8_000_000;
		return _convert(value, "megabyte",options)
	},
	toGigabyte: (value: number=0, options: IOptions={}) => {
		if (isNaN(value)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value <= 8_000_000) ? 0 : value / 8_000_000_000;
		return _convert(value, "gigabyte",options)
	},
	toTerabyte: (value: number=0, options: IOptions={}) => {
		if (isNaN(value)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value <= 8_000_000_000) ? 0 : value / 8_000_000_000_000;
		return _convert(value, "terabyte",options)
	},
	toPetabyte: (value: number=0, options: IOptions={}) => {
		if (isNaN(value)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value <= 8_000_000_000_000) ? 0 : value / 8_000_000_000_000_000;
		return _convert(value, "petabyte",options)
	},
}

const Byte: IByte = {
	toBit: (value: number=0, options: IOptions={}) =>{
		if (isNaN(value)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value <= 0) ? 0 : value * 8;
		return _convert(value, "bit",options)
	},
	toKilobyte: (value: number=0, options: IOptions={}) => {
		if (isNaN(value)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value <= 0) ? 0 : value / 1_000;
		return _convert(value, "kilobyte",options)
	},
	toMegabyte: (value: number=0, options: IOptions={}) => {
		if (isNaN(value)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value <= 1_000) ? 0 : value / 1_000_000;
		return _convert(value, "megabyte",options)
	},
	toGigabyte: (value: number=0, options: IOptions={}) => {
		if (isNaN(value)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value <= 1_000_000) ? 0 : value / 1_000_000_000;
		return _convert(value, "gigabyte",options)
	},
	toTerabyte: (value: number=0, options: IOptions={}) => {
		if (isNaN(value)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value <= 1_000_000_000) ? 0 : value / 1_000_000_000_000;
		return _convert(value, "terabyte",options)
	},
	toPetabyte: (value: number=0, options: IOptions={}) => {
		if (isNaN(value)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value <= 1_000_000_000_000) ? 0 : value / 1_000_000_000_000_000;
		return _convert(value, "petabyte",options)
	},
}

const Kilobyte: IKilobyte={
	toBit: (value: number=0, options: IOptions={})=>{
		if (isNaN(value)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value <= 0) ? 0 : value * 8_000;
		return _convert(value, "bit", options);
	},
	toByte: (value: number=0, options: IOptions={})=>{
		if (isNaN(value)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value <= 0) ? 0 : value * 1_000;
		return _convert(value, "byte", options);
	},
	toMegabyte: (value: number=0, options: IOptions={})=>{
		if (isNaN(value)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value <= 0) ? 0 : value / 1_000;
		return _convert(value, "megabyte", options);
	},
	toGigabyte: (value: number=0, options: IOptions={})=>{
		if (isNaN(value)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value <= 1_000) ? 0 : value / 1_000_000;
		return _convert(value, "gigabyte", options);
	},
	toTerabyte: (value: number=0, options: IOptions={})=>{
		if (isNaN(value)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value <= 1_000_000) ? 0 : value / 1_000_000_000;
		return _convert(value, "terabyte", options);
	},
	toPetabyte: (value: number=0, options: IOptions={})=>{
		if (isNaN(value)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value <= 1_000_000_000) ? 0 : value / 1_000_000_000_000;
		return _convert(value, "petabyte", options);
	}
} 

const Megabyte: IMegabyte={
	toBit: (value: number=0, options: IOptions={})=>{
		if (isNaN(value)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value <= 0) ? 0 : value * 8_000_000;
		return _convert(value, "bit", options);
	},
	toByte: (value: number=0, options: IOptions={})=>{
		if (isNaN(value)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value <= 0) ? 0 : value * 1_000_000;
		return _convert(value, "byte", options);
	},
	toKilobyte: (value: number=0, options: IOptions={})=>{
		if (isNaN(value)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value <= 0) ? 0 : value * 1_000;
		return _convert(value, "kilobyte", options);
	},
	toGigabyte: (value: number=0, options: IOptions={})=>{
		if (isNaN(value)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value <= 1_000) ? 0 : value / 1_000;
		return _convert(value, "gigabyte", options);
	},
	toTerabyte: (value: number=0, options: IOptions={})=>{
		if (isNaN(value)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value <= 1_000_000) ? 0 : value / 1_000_000;
		return _convert(value, "terabyte", options);
	},
	toPetabyte: (value: number=0, options: IOptions={})=>{
		if (isNaN(value)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value <= 1_000_000_000) ? 0 : value / 1_000_000_000;
		return _convert(value, "petabyte", options);
	}
}

const Gigabyte: IGigabyte={
	toBit: (value: number=0, options: IOptions={})=>{
		if (isNaN(value)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value <= 0) ? 0 : value * 8_000_000_000;
		return _convert(value, "bit", options);
	},
	toByte: (value: number=0, options: IOptions={})=>{
		if (isNaN(value)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value <= 0) ? 0 : value * 1_000_000_000;
		return _convert(value, "byte", options);
	},
	toKilobyte: (value: number=0, options: IOptions={})=>{
		if (isNaN(value)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value <= 0) ? 0 : value * 1_000_000;
		return _convert(value, "kilobyte", options);
	},
	toMegabyte: (value: number=0, options: IOptions={})=>{
		if (isNaN(value)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value <= 0) ? 0 : value * 1_000;
		return _convert(value, "megabyte", options);
	},
	toTerabyte: (value: number=0, options: IOptions={})=>{
		if (isNaN(value)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value <= 0) ? 0 : value / 1_000;
		return _convert(value, "terabyte", options);
	},
	toPetabyte: (value: number=0, options: IOptions={})=>{
		if (isNaN(value)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value <= 1_000) ? 0 : value / 1_000_000;
		return _convert(value, "petabyte", options);
	}
}

const Terabyte: ITerabyte={
	toBit: (value: number=0, options: IOptions={})=>{
		if (isNaN(value)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value <= 0) ? 0 : value * 8_000_000_000_000;
		return _convert(value, "bit", options);
	},
	toByte: (value: number=0, options: IOptions={})=>{
		if (isNaN(value)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value <= 0) ? 0 : value * 1_000_000_000_000;
		return _convert(value, "byte", options);
	},
	toKilobyte: (value: number=0, options: IOptions={})=>{
		if (isNaN(value)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value <= 0) ? 0 : value * 1_000_000_000;
		return _convert(value, "kilobyte", options);
	},
	toMegabyte: (value: number=0, options: IOptions={})=>{
		if (isNaN(value)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value <= 0) ? 0 : value * 1_000_000;
		return _convert(value, "megabyte", options);
	},
	toGigabyte: (value: number=0, options: IOptions={})=>{
		if (isNaN(value)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value <= 0) ? 0 : value * 1_000;
		return _convert(value, "gigabyte", options);
	},
	toPetabyte: (value: number=0, options: IOptions={})=>{
		if (isNaN(value)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value <= 1) ? 0 : value / 1_000;
		return _convert(value, "petabyte", options);
	}
}

const Petabyte: IPetabyte={
	toBit: (value: number=0, options: IOptions={})=>{
		if (isNaN(value)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value <= 0) ? 0 : value * 8_000_000_000_000_000;
		return _convert(value, "bit", options);
	},
	toByte: (value: number=0, options: IOptions={})=>{
		if (isNaN(value)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value <= 0) ? 0 : value * 1_000_000_000_000_000;
		return _convert(value, "byte", options);
	},
	toKilobyte: (value: number=0, options: IOptions={})=>{
		if (isNaN(value)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value <= 0) ? 0 : value * 1_000_000_000_000;
		return _convert(value, "kilobyte", options);
	},
	toMegabyte: (value: number=0, options: IOptions={})=>{
		if (isNaN(value)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value <= 0) ? 0 : value * 1_000_000_000;
		return _convert(value, "megabyte", options);
	},
	toGigabyte: (value: number=0, options: IOptions={})=>{
		if (isNaN(value)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value <= 0) ? 0 : value * 1_000_000;
		return _convert(value, "gigabyte", options);
	},
	toTerabyte: (value: number=0, options: IOptions={})=>{
		if (isNaN(value)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value <= 0) ? 0 : value * 1_000;
		return _convert(value, "terabyte", options);
	}
}

export { Bit, Byte, Kilobyte, Megabyte, Gigabyte, Terabyte, Petabyte }