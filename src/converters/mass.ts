/**
 * Convert a unit to another unit
 * Mass units measurements
 * @author Carlos Ismael .Y .R
 * 
 * @param value - The value to convert
 * @param Options - The options to convert
 * @returns The converted value 
 * @example Kilogram.toGram(1, {"unitDisplay": "short"}) // 1000 Gr
*/
import { IOptions,  _convert } from './utils.ts'; 

interface IOunce {
	toGram(value: number, options: IOptions): string | number;
	toTon(value: number, options: IOptions): string | number;
	toKilogram(value: number, options: IOptions): string | number;
	toMilligram(value: number, options: IOptions): string | number;
	toMicrogram(value: number, options: IOptions): string | number;
	toPound(value: number, options: IOptions): string | number;
	toStone(value: number, options: IOptions): string | number;
}

interface IPound {
	toGram(value: number, options: IOptions): string | number;
	toTon(value: number, options: IOptions): string | number;
	toKilogram(value: number, options: IOptions): string | number;
	toMilligram(value: number, options: IOptions): string | number;
	toMicrogram(value: number, options: IOptions): string | number;
	toOnce(value: number, options: IOptions): string | number;
	toStone(value: number, options: IOptions): string | number;
}

interface IStone {
	toGram(value: number, options: IOptions): string | number;
	toTon(value: number, options: IOptions): string | number;
	toKilogram(value: number, options: IOptions): string | number;
	toMilligram(value: number, options: IOptions): string | number;
	toMicrogram(value: number, options: IOptions): string | number;
	toOnce(value: number, options: IOptions): string | number;
	toPound(value: number, options: IOptions): string | number;
}

interface IKilogram {
	toGram(value: number, options: IOptions): string | number;
	toTon(value: number, options: IOptions): string | number;
	toMilligram(value: number, options: IOptions): string | number;
	toMicrogram(value: number, options: IOptions): string | number;
	toOnce(value: number, options: IOptions): string | number;
	toPound(value: number, options: IOptions): string | number;
	toStone(value: number, options: IOptions): string | number;
}

interface IGram {
	toKilogram(value: number, options: IOptions): string | number;
	toTon(value: number, options: IOptions): string | number;
	toMilligram(value: number, options: IOptions): string | number;
	toMicrogram(value: number, options: IOptions): string | number;
	toOnce(value: number, options: IOptions): string | number;
	toPound(value: number, options: IOptions): string | number;
	toStone(value: number, options: IOptions): string | number;
}

interface ITon {
	toKilogram(value: number, options: IOptions): string | number;
	toGram(value: number, options: IOptions): string | number;
	toMilligram(value: number, options: IOptions): string | number;
	toMicrogram(value: number, options: IOptions): string | number;
	toOnce(value: number, options: IOptions): string | number;
	toPound(value: number, options: IOptions): string | number;
	toStone(value: number, options: IOptions): string | number;
}

interface IMilligram {
	toKilogram(value: number, options: IOptions): string | number;
	toGram(value: number, options: IOptions): string | number;
	toTon(value: number, options: IOptions): string | number;
	toMicrogram(value: number, options: IOptions): string | number;
	toOnce(value: number, options: IOptions): string | number;
	toPound(value: number, options: IOptions): string | number;
	toStone(value: number, options: IOptions): string | number;
}

interface IMicrogram {
	toKilogram(value: number, options: IOptions): string | number;
	toGram(value: number, options: IOptions): string | number;
	toTon(value: number, options: IOptions): string | number;
	toMilligram(value: number, options: IOptions): string | number;
	toOnce(value: number, options: IOptions): string | number;
	toPound(value: number, options: IOptions): string | number;
	toStone(value: number, options: IOptions): string | number;
}

const MicrogramConversion = (microgram: number , options:IOptions = {}):string => {
	const locale = options?.locale || 'en-US';
	const unitDisplay = options?.unitDisplay || 'short';
	let Unit: string = "µg"; 

	const unitsLongs: { [key: string]: string } = {"es-Es":"microgramo", "en-IN":"microgram", "en-US":"Microgram", "fr-FR":"microgramme", "de-DE":"mikrogramm",
	"it-IT":"microgrammo", "pt-PT":"micrograma", "ru-RU":"mикрограмм", "zh-CN":"微克", "ja-JP":"マイクログラム"};
	
	const unitsLongsPlurals: { [key: string]: string } = {"es-Es":"microgramos", "en-IN":"micrograms", "en-US":"micrograms", "fr-FR":"microgrammes", "de-DE":"mikrogramm", 
	"it-IT":"microgrammi", "pt-PT":"microgramas", "ru-RU":"mикрограммы", "zh-CN":"微克", "ja-JP":"マイクログラム"};

	if (unitDisplay === "long"){
		Unit = "Microgram";

		if(microgram == 1){
			if(Object.keys(unitsLongs).includes(locale)) {
				Unit = unitsLongs[locale as keyof typeof unitsLongs];
			}

		}else{
			Unit = "Micrograms";
			if(Object.keys(unitsLongsPlurals).includes(locale)) {
				Unit = unitsLongsPlurals[locale as keyof typeof unitsLongsPlurals];
			}
		}
	}

	const fortmat = _convert(microgram, "", options)

 return `${fortmat} ${Unit}`
}
const MilligramConversion = (microgram: number , options:IOptions = {}):string => {
	const locale = options?.locale || 'en-US';
	const unitDisplay = options?.unitDisplay || 'short';
	let Unit: string = "mg"; 

	const unitsLongs: { [key: string]: string } = {"es-Es":"miligramo", "en-IN":"milligram", "en-US":"Milligram", "fr-FR":"milligramme", "de-DE":"milligramm",
	"it-IT":"milligrammo", "pt-PT":"miligrama", "ru-RU":"миллиграмм", "zh-CN":"毫克", "ja-JP":"ミリグラム"}
	
	
	const unitsLongsPlurals: { [key: string]: string } = {"es-Es":"miligramos", "en-IN":"milligrams", "en-US":"milligrams", "fr-FR":"milligrammes", "de-DE":"milligramm",
	"it-IT":"milligrammi", "pt-PT":"miligramas", "ru-RU":"миллиграммы", "zh-CN":"毫克", "ja-JP":"ミリグラム"
	};

	if (unitDisplay === "long"){
		Unit = "milligram";

		if(microgram == 1){
			if(Object.keys(unitsLongs).includes(locale)) {
				Unit = unitsLongs[locale as keyof typeof unitsLongs];
			}

		}else{
			Unit = "milligrams";
			if(Object.keys(unitsLongsPlurals).includes(locale)) {
				Unit = unitsLongsPlurals[locale as keyof typeof unitsLongsPlurals];
			}
		}
	}

	const fortmat = _convert(microgram, "", options)
 return `${fortmat} ${Unit}`
}

const Kilogram: IKilogram ={
	toGram: (kilogram: number=0, options: IOptions={}): string|number => {
		if (isNaN(kilogram)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		const Gram = (kilogram ==0) ? 0 : kilogram * 1000;
		return _convert(Gram, "gram", options)
	},
	toTon: (kilogram: number=0, options: IOptions={}): string| number => {
		if (isNaN(kilogram)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		const Ton = (kilogram ==0) ? 0 : kilogram / 1000;
		return _convert(Ton, "ton", options)
	},
	toMilligram: (kilogram: number=0, options: IOptions={}):string| number  => {
		if (isNaN(kilogram)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		const Milligram = (kilogram ==0) ? 0 : kilogram * 1_000_000;
		if (Object.keys(options).length > 0 && typeof options === 'object') {
			return MilligramConversion(Milligram, options);
		}
		return Milligram
	},
	toMicrogram: (kilogram: number=0, options: IOptions={}): string| number => {
		if (isNaN(kilogram)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		const Microgram = (kilogram ==0) ? 0 : kilogram * 1_000_000_000;
		if (Object.keys(options).length > 0 && typeof options === 'object') {
			return MicrogramConversion(Microgram, options);
		}
		return Microgram
	},
	toOnce: (kilogram: number=0, options: IOptions={}): string| number => {
		if (isNaN(kilogram)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		const Once = (kilogram ==0) ? 0 : kilogram * 35.274;
		return _convert(Once, "ounce", options)
	},
	toPound: (kilogram: number=0, options: IOptions={}): string| number => {
		if (isNaN(kilogram)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		const Pound = (kilogram ==0) ? 0 : kilogram * 2.20462;
		return _convert(Pound, "pound", options)
	},
	toStone: (kilogram: number=0, options: IOptions={}): string| number => {
		if (isNaN(kilogram)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		const Stone = (kilogram ==0) ? 0 : kilogram * 0.157473;
		return _convert(Stone, "stone", options)
	}

}; 

const Gram:IGram ={
	toKilogram: (gram: number=0, options: IOptions={}):string| number  => {
		if (isNaN(gram)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		const Kilogram = (gram ==0) ? 0 : gram / 1000;
		return _convert(Kilogram, "kilogram", options)
	},
	toTon: (gram: number=0, options: IOptions={}):string| number  => {
		if (isNaN(gram)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		const Ton = (gram ==0) ? 0 : gram / 1_000_000;
		return _convert(Ton, "ton", options)
	},
	toMilligram: (gram: number=0, options: IOptions={}):string| number  => {
		if (isNaN(gram)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		const Milligram = (gram ==0) ? 0 : gram * 1000;
		if (Object.keys(options).length > 0 && typeof options === 'object') {
			return MilligramConversion(Milligram, options);
		}
		return Milligram
	},
	toMicrogram: (gram: number=0, options: IOptions={}):string| number  => {
		if (isNaN(gram)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		const Microgram = (gram ==0) ? 0 : gram * 1_000_000;
		if (Object.keys(options).length > 0 && typeof options === 'object') {
			return MicrogramConversion(Microgram, options);
		}
		return Microgram
	},
	toOnce: (gram: number=0, options: IOptions={}):string| number  => {
		if (isNaN(gram)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		const Once = (gram ==0) ? 0 : gram * 0.035274;
		return _convert(Once, "ounce", options)
	},
	toPound: (gram: number=0, options: IOptions={}):string| number  => {
		if (isNaN(gram)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		const Pound = (gram ==0) ? 0 : gram * 0.00220462;
		return _convert(Pound, "pound", options)
	},
	toStone: (gram: number=0, options: IOptions={}):string| number  => {
		if (isNaN(gram)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		const Stone = (gram ==0) ? 0 : gram * 0.000157473;
		return _convert(Stone, "stone", options)
	}
};

const Ton: ITon ={
	toKilogram: (ton: number=0, options: IOptions={}):string| number => {
		if (isNaN(ton)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		const Kilogram = (ton ==0) ? 0 : ton * 1000;
		return _convert(Kilogram, "kilogram", options)
	},
	toGram: (ton: number=0, options: IOptions={}):string| number => {
		if (isNaN(ton)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		const Gram = (ton ==0) ? 0 : ton * 1_000_000;
	  return _convert(Gram, "gram", options)
	},
	toMilligram: (ton: number=0, options: IOptions={}):string| number => {
		if (isNaN(ton)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		const Milligram = (ton ==0) ? 0 : ton * 1_000_000_000;
		if (Object.keys(options).length > 0 && typeof options === 'object') {
			return MilligramConversion(Milligram, options);
		}
		return Milligram
	},
	toMicrogram: (ton: number=0, options: IOptions={}):string| number => {
		if (isNaN(ton)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		const Microgram = (ton ==0) ? 0 : ton * 1_000_000_000_000;
		if (Object.keys(options).length > 0 && typeof options === 'object') {
			return MicrogramConversion(Microgram, options);
		}
		return Microgram
	},
	toOnce: (ton: number=0, options: IOptions={}):string| number => {
		if (isNaN(ton)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		const Once = (ton ==0) ? 0 : ton * 35_274;
		return _convert(Once, "ounce", options)
	},
	toPound: (ton: number=0, options: IOptions={}):string| number => {
		if (isNaN(ton)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		const Pound = (ton ==0) ? 0 : ton * 2_204.62;
		return _convert(Pound, "pound", options)
	},
	toStone: (ton: number=0, options: IOptions={}):string| number => {
		if (isNaN(ton)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		const Stone = (ton ==0) ? 0 : ton * 157.473;
		return _convert(Stone, "stone", options)
	}
};

const Milligram: IMilligram ={
	toKilogram: (milligram: number=0, options: IOptions={}):string| number => {
		if (isNaN(milligram)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		const Kilogram = (milligram ==0) ? 0 : milligram / 1_000_000;
		return _convert(Kilogram, "kilogram", options)
	},
	toTon: (milligram: number=0, options: IOptions={}):string| number => {
		if (isNaN(milligram)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		const Ton = (milligram ==0) ? 0 : milligram / 1_000_000_000;
		return _convert(Ton, "ton", options)
	},
	toGram: (milligram: number=0, options: IOptions={}):string| number => {
		if (isNaN(milligram)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		const Gram = (milligram ==0) ? 0 : milligram / 1_000;
		return _convert(Gram, "gram", options)
	},
	toMicrogram: (milligram: number=0, options: IOptions={}):string| number => {
		if (isNaN(milligram)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		const Microgram = (milligram ==0) ? 0 : milligram * 1_000;
		if (Object.keys(options).length > 0 && typeof options === 'object') {
			return MicrogramConversion(Microgram, options);
		}
		return Microgram
	},
	toOnce: (milligram: number=0, options: IOptions={}):string| number => {
		if (isNaN(milligram)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		const Once = (milligram ==0) ? 0 : milligram * 3.5274e-5;
		return _convert(Once, "ounce", options)
	},
	toPound: (milligram: number=0, options: IOptions={}):string| number => {
		if (isNaN(milligram)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		const Pound = (milligram ==0) ? 0 : milligram * 2.20462e-6;
		return _convert(Pound, "pound", options)
	},
	toStone: (milligram: number=0, options: IOptions={}):string| number => {
		if (isNaN(milligram)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		const Stone = (milligram ==0) ? 0 : milligram * 1.5747e-7;
		return _convert(Stone, "stone", options)
	}

};

const Microgram: IMicrogram ={
	toKilogram: (microgram: number=0, options: IOptions={}):string| number => {
		if (isNaN(microgram)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		const Kilogram = (microgram ==0) ? 0 : microgram / 1_000_000_000;
		return _convert(Kilogram, "kilogram", options)
	},
	toTon: (microgram: number=0, options: IOptions={}):string| number => {
		if (isNaN(microgram)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		const Ton = (microgram ==0) ? 0 : microgram / 1_000_000_000_000;
		return _convert(Ton, "ton", options)
	},
	toGram: (microgram: number=0, options: IOptions={}):string| number => {
		if (isNaN(microgram)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		const Gram = (microgram ==0) ? 0 : microgram / 1_000_000;
		return _convert(Gram, "gram", options)
	},
	toMilligram: (microgram: number=0, options: IOptions={}):string| number => {
		if (isNaN(microgram)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		const Milligram = (microgram ==0) ? 0 : microgram / 1_000;
		if (Object.keys(options).length > 0 && typeof options === 'object') {
			return MilligramConversion(Milligram, options);
		}
		return Milligram
	},
	toOnce: (microgram: number=0, options: IOptions={}):string| number => {
		if (isNaN(microgram)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		const Once = (microgram ==0) ? 0 : microgram * 3.5274e-8;
		return _convert(Once, "ounce", options)
	},
	toPound: (microgram: number=0, options: IOptions={}):string| number => {
		if (isNaN(microgram)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		const Pound = (microgram ==0) ? 0 : microgram * 2.20462e-9;
		return _convert(Pound, "pound", options)
	},
	toStone: (microgram: number=0, options: IOptions={}):string| number => {
		if (isNaN(microgram)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		const Stone = (microgram ==0) ? 0 : microgram * 1.5747e-10;
		return _convert(Stone, "stone", options)
	}
};

const Pound: IPound ={
	toTon(value: number=0, options: IOptions={}) {
		if (isNaN(value)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		const Ton = (value ==0) ? 0 : value / 2204.62;
		return _convert(Ton, "ton", options)
	},
	toKilogram(value: number=0, options: IOptions={}) {
		if (isNaN(value)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		const Kilogram = (value ==0) ? 0 : value / 2.20462;
		return _convert(Kilogram, "kilogram", options)
	},
	toGram(value: number=0, options: IOptions={}) {
		if (isNaN(value)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		const Gram = (value ==0) ? 0 : value / 0.00220462;
		return _convert(Gram, "gram", options)
	},
	toMilligram(value: number=0, options: IOptions={}) {
		if (isNaN(value)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		const Milligram = (value ==0) ? 0 : value / 2.20462e-6;
		if (Object.keys(options).length > 0 && typeof options === 'object') {
			return MilligramConversion(Milligram, options);
		}
		return Milligram
	},
	toMicrogram(value: number=0, options: IOptions={}) {
		if (isNaN(value)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		const Microgram = (value ==0) ? 0 : value / 2.20462e-9;
		if (Object.keys(options).length > 0 && typeof options === 'object') {
			return MicrogramConversion(Microgram, options);
		}
		return Microgram
	},
	toOnce(value: number=0, options: IOptions={}) {
		if (isNaN(value)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		const Once = (value ==0) ? 0 : value * 16;
		return _convert(Once, "ounce", options)
	},
	toStone(value: number=0, options: IOptions={}) {
		if (isNaN(value)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		const Stone = (value ==0) ? 0 : value / 14;
		return _convert(Stone, "stone", options)
	}
}

const Ounce: IOunce ={
	toTon(value: number=0, options: IOptions={}) {
		if (isNaN(value)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		const Ton = (value ==0) ? 0 : value / 35.274;
		return _convert(Ton, "ton", options)
	},
	toKilogram(value: number=0, options: IOptions={}) {
		if (isNaN(value)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		const Kilogram = (value ==0) ? 0 : value / 35.274;
		return _convert(Kilogram, "kilogram", options)
	},
	toGram(value: number=0, options: IOptions={}) {
		if (isNaN(value)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		const Gram = (value ==0) ? 0 : value / 0.035274;
		return _convert(Gram, "gram", options)
	},
	toMilligram(value: number=0, options: IOptions={}) {
		if (isNaN(value)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		const Milligram = (value ==0) ? 0 : value / 3.5274e-5;
		if (Object.keys(options).length > 0 && typeof options === 'object') {
			return MilligramConversion(Milligram, options);
		}
		return Milligram
	},
	toMicrogram(value: number=0, options: IOptions={}) {
		if (isNaN(value)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		const Microgram = (value ==0) ? 0 : value / 3.5274e-8;
		if (Object.keys(options).length > 0 && typeof options === 'object') {
			return MicrogramConversion(Microgram, options);
		}
		return Microgram
	},
	toPound(value: number=0, options: IOptions={}) {
		if (isNaN(value)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		const Pound = (value ==0) ? 0 : value / 16;
		return _convert(Pound, "pound", options)
	},
	toStone(value: number=0, options: IOptions={}) {
		if (isNaN(value)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		const Stone = (value ==0) ? 0 : value / 224;
		return _convert(Stone, "stone", options)
	}
}

const Stone: IStone ={
	toTon(value: number=0, options: IOptions={}) {
		if (isNaN(value)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		const Ton = (value ==0) ? 0 : value / 157.473;
		return _convert(Ton, "ton", options)
	},
	toKilogram(value: number=0, options: IOptions={}) {
		if (isNaN(value)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		const Kilogram = (value ==0) ? 0 : value / 0.157473;
		return _convert(Kilogram, "kilogram", options)
	},
	toGram(value: number=0, options: IOptions={}) {
		if (isNaN(value)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		const Gram = (value ==0) ? 0 : value / 0.000157473;
		return _convert(Gram, "gram", options)
	},
	toMilligram(value: number=0, options: IOptions={}) {
		if (isNaN(value)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		const Milligram = (value ==0) ? 0 : value / 1.5747e-7;
		if (Object.keys(options).length > 0 && typeof options === 'object') {
			return MilligramConversion(Milligram, options);
		}
		return Milligram
	},
	toMicrogram(value: number=0, options: IOptions={}) {
		if (isNaN(value)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		const Microgram = (value ==0) ? 0 : value / 1.5747e-10;
		if (Object.keys(options).length > 0 && typeof options === 'object') {
			return MicrogramConversion(Microgram, options);
		}
		return Microgram
	},
	toOnce(value: number=0, options: IOptions={}) {
		if (isNaN(value)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		const Once = (value ==0) ? 0 : value * 224;
		return _convert(Once, "ounce", options)
	},
	toPound(value: number=0, options: IOptions={}) {
		if (isNaN(value)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		const Pound = (value ==0) ? 0 : value * 14;
		return _convert(Pound, "pound", options)
	}
}

export {Kilogram, Gram, Ton, Milligram, Microgram, Pound, Stone, Ounce};