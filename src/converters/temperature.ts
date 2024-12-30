/**
 * Convert a unit to another unit
 * Temperature units measurements
 * @author Carlos Ismael .Y .R
 * 
 * @param value - The value to convert
 * @param Options - The options to convert
 * @returns The converted value
*/
import { IOptions,  _convert } from './utils.ts';

interface ICelsius {
	toFahrenheit(value: number, options: IOptions): String | number;
	toKelvin(value: number, options: IOptions): String | number;
}

interface IFahrenheit {
	toCelsius(value: number, options: IOptions): String | number;
	toKelvin(value: number, options: IOptions): String | number;
}

interface IKelvin {
	toCelsius(value: number, options: IOptions): String | number;
	toFahrenheit(value: number, options: IOptions): String | number;
}

const KelvinConversion = (value: number, options: IOptions)=>{
	const locale = options?.locale || 'en-US';
	const unitDisplay = options?.unitDisplay || 'short';
	let Unit: string = "°K";

	if (unitDisplay === "long"){
		const unitsLongSingular: { [key: string]: string } ={
			"es-ES": "grado kelvin", "en-US": "degree kelvin", "en-IN": "degree kelvin", 
			"fr-FR": "degré kelvin", "de-DE": "kelvin", "it-IT": "kelvin", "pt-PT": "kelvin",
			"pt-BR": "kelvin", "ja-JP": "ケルビン", "ko-KR": "켈빈", "zh-CN": "开尔文", 
			"ru-RU": "градус кельвина", "ar-SA": "درجة كلفن", "hi-IN": "केल्विन डिग्री",
		}
		const unitsLongPlural: { [key: string]: string } ={
			"es-ES": "grados kelvin", "en-US": "degrees kelvin", "en-IN": "degrees kelvin", 
			"fr-FR": "degrés kelvin", "de-DE": "kelvin", "it-IT": "kelvin", "pt-PT": "kelvin",
			"pt-BR": "kelvin", "ja-JP": "ケルビン", "ko-KR": "켈빈", "zh-CN": "开尔文", 
			"ru-RU": "градусов кельвина", "ar-SA": "درجة كلفن", "hi-IN": "केल्विन डिग्री",
		}
		if (value === 1) {
			Unit = unitsLongSingular[locale] || Unit;
		} else {
			Unit = unitsLongPlural[locale] || Unit;
		}
	}

	let Kelvin = _convert(value, "", options)
	return `${Kelvin}${Unit}`;
}

const Celsius: ICelsius ={
	toFahrenheit(value: number=0, options: IOptions={}): String | number {
		if(isNaN(value)){
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value * (9 / 5 )) + 32;
		return _convert(value, "fahrenheit", options,);
	},
	toKelvin(value: number=0, options: IOptions={}): String | number {
		if(isNaN(value)){
			throw new Error('El valor introducido no es un número válido.');
		}
		value =  value + 273.15;
		if (Object.keys(options).length > 0 && typeof options === 'object') {
			return KelvinConversion(value, options);
		}
		return value
	}
}

const Fahrenheit: IFahrenheit ={
	toCelsius(value: number=0, options: IOptions={}): String | number {
		if(isNaN(value)){
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value - 32) * 5 / 9;
		return _convert(value, "celsius", options,);
	},
	toKelvin(value: number=0, options: IOptions={}): String | number {
		if(isNaN(value)){
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value - 32) * (5 / 9) + 273.15;
		if (Object.keys(options).length > 0 && typeof options === 'object') {
			return KelvinConversion(value, options);
		}
		return value
	}
}

const kelvin: IKelvin ={
	toCelsius(value: number=0, options: IOptions={}): String | number {
		if(isNaN(value)){
			throw new Error('El valor introducido no es un número válido.');
		}
		value = value - 273.15;
		return _convert(value, "celsius", options,);
	},
	toFahrenheit(value: number=0, options: IOptions={}): String | number {
		if(isNaN(value)){
			throw new Error('El valor introducido no es un número válido.');
		}
		value =  (value - 273.15) * 9 / 5 + 32;
		return _convert(value, "fahrenheit", options,);
	}
}

export {kelvin, Fahrenheit, Celsius};