/**
 * Convert a unit to another unit
 * Volume units measurements
 * @author Carlos Ismael .Y .R
 * @param value - The value to convert
 * @param Options - The options to convert
 * @returns The converted value 
*/
import { IOptions,  _convert } from './utils.ts'; 

interface IFluidOunce{
	toGallon(value: number, options: IOptions): string | number;
	toLiter(value: number, options: IOptions): string | number;
	toMilliliter(value: number, options: IOptions): string | number;
	toCubicMeter(value: number, options: IOptions): string | number;
	toPint(value: number, options: IOptions): string | number;
	toTablespoon(value: number, options: IOptions): string | number;
	toCup(value: number, options: IOptions): string | number;	
}

interface IGallon{
	toFluidOunce(value: number, options: IOptions): string | number;
	toLiter(value: number, options: IOptions): string | number;
	toMilliliter(value: number, options: IOptions): string | number;
	toCubicMeter(value: number, options: IOptions): string | number;
	toPint(value: number, options: IOptions): string | number;
	toTablespoon(value: number, options: IOptions): string | number;
	toCup(value: number, options: IOptions): string | number;	
}

interface ILiter{
	toFluidOunce(value: number, options: IOptions): string | number;
	toGallon(value: number, options: IOptions): string | number;
	toMilliliter(value: number, options: IOptions): string | number;
	toCubicMeter(value: number, options: IOptions): string | number;
	toPint(value: number, options: IOptions): string | number;
	toTablespoon(value: number, options: IOptions): string | number;
	toCup(value: number, options: IOptions): string | number;
}

interface IMilliliter{
	toFluidOunce(value: number, options: IOptions): string | number;
	toGallon(value: number, options: IOptions): string | number;
	toLiter(value: number, options: IOptions): string | number;
	toCubicMeter(value: number, options: IOptions): string | number;
	toPint(value: number, options: IOptions): string | number;
	toTablespoon(value: number, options: IOptions): string | number;
	toCup(value: number, options: IOptions): string | number;
}

interface ICubicMeter{
	toFluidOunce(value: number, options: IOptions): string | number;
	toGallon(value: number, options: IOptions): string | number;
	toLiter(value: number, options: IOptions): string | number;
	toMilliliter(value: number, options: IOptions): string | number;
	toPint(value: number, options: IOptions): string | number;
	toTablespoon(value: number, options: IOptions): string | number;
	toCup(value: number, options: IOptions): string | number;
}

interface IPint{
	toFluidOunce(value: number, options: IOptions): string | number;
	toGallon(value: number, options: IOptions): string | number;
	toLiter(value: number, options: IOptions): string | number;
	toMilliliter(value: number, options: IOptions): string | number;
	toCubicMeter(value: number, options: IOptions): string | number;
	toTablespoon(value: number, options: IOptions): string | number;
	toCup(value: number, options: IOptions): string | number;
}

interface ITablespoon{
	toFluidOunce(value: number, options: IOptions): string | number;
	toGallon(value: number, options: IOptions): string | number;
	toLiter(value: number, options: IOptions): string | number;
	toMilliliter(value: number, options: IOptions): string | number;
	toCubicMeter(value: number, options: IOptions): string | number;
	toPint(value: number, options: IOptions): string | number;
	toCup(value: number, options: IOptions): string | number;
}

interface ICup{
	toFluidOunce(value: number, options: IOptions): string | number;
	toGallon(value: number, options: IOptions): string | number;
	toLiter(value: number, options: IOptions): string | number;
	toMilliliter(value: number, options: IOptions): string | number;
	toCubicMeter(value: number, options: IOptions): string | number;
	toPint(value: number, options: IOptions): string | number;
	toTablespoon(value: number, options: IOptions): string | number;
}

const VolumeConversion = (value: number=0, unit: string, options: IOptions = {}): string => {
    const locale = options?.locale || "en-US";
    const unitDisplay = options?.unitDisplay || "short";

    let Unit: string = unit; // Valor predeterminado, puede cambiar según unitDisplay

    const unitsShort: { [key: string]: string } = {
			"cubic-meter": "m³",
			pint: "pt",
			tablespoon: "tbsp",
			cup: "cup"
    };

    const unitsLongSingular: { [key: string]: { [locale: string]: string } } = {
			"cubic-meter": {
				"en-US": "cubic meter",
				"en-IN": "cubic meter",
				"es-ES": "metro cúbico",
				"fr-FR": "mètre cube",
				"it-IT": "metro cubo",
				"ja-JP": "立方メートル",
				"de-DE": "Kubikmeter",
				"pt-PT": "metro cúbico",
				"ru-RU": "кубический метр",
				"zh-CN": "立方米"
			},
			pint: {
				"en-US": "pint",
				"en-IN": "pint",
				"es-ES": "pinta",
				"fr-FR": "pinte",
				"it-IT": "pinta",
				"ja-JP": "パイント",
				"de-DE": "Pint",
				"pt-PT": "pinta",
				"ru-RU": "пинта",
				"zh-CN": "品脱"
			},
			tablespoon: {
				"en-US": "tablespoon",
				"en-IN": "tablespoon",
				"es-ES": "cucharada",
				"fr-FR": "cuillère à soupe",
				"it-IT": "cucchiaio",
				"ja-JP": "大さじ",
				"de-DE": "Esslöffel",
				"pt-PT": "colher de sopa",
				"ru-RU": "столовая ложка",
				"zh-CN": "汤匙"
			},
			cup: {
				"en-US": "cup",
				"en-IN": "cup",
				"es-ES": "taza",
				"fr-FR": "tasse",
				"it-IT": "tazza",
				"ja-JP": "カップ",
				"de-DE": "Tasse",
				"pt-PT": "copo",
				"ru-RU": "чашка",
				"zh-CN": "杯"
			}
    };

    const unitsLongPlural: { [key: string]: { [locale: string]: string } } = {
			"cubic-meter": {
				"en-US": "cubic meters",
				"en-IN": "cubic meters",
				"es-ES": "metros cúbicos",
				"fr-FR": "mètres cubes",
				"it-IT": "metri cubi",
				"ja-JP": "立方メートル",
				"de-DE": "Kubikmeter",
				"pt-PT": "metros cúbicos",
				"ru-RU": "кубические метры",
				"zh-CN": "立方米"
			},
			pint: {
				"en-US": "pints",
				"en-IN": "pints",
				"es-ES": "pintas",
				"fr-FR": "pintes",
				"it-IT": "pinte",
				"ja-JP": "パイント",
				"de-DE": "Pint",
				"pt-PT": "pintas",
				"ru-RU": "пинты",
				"zh-CN": "品脱"
			},
			tablespoon: {
				"en-US": "tablespoons",
				"en-IN": "tablespoons",
				"es-ES": "cucharadas",
				"fr-FR": "cuillères à soupe",
				"it-IT": "cucchiai",
				"ja-JP": "大さじ",
				"de-DE": "Esslöffel",
				"pt-PT": "colheres de sopa",
				"ru-RU": "столовые ложки",
				"zh-CN": "汤匙"
			},
			cup: {
				"en-US": "cups",
				"en-IN": "cups",
				"es-ES": "tazas",
				"fr-FR": "tasses",
				"it-IT": "tazze",
				"ja-JP": "カップ",
				"de-DE": "Tasse",
				"pt-PT": "copos",
				"ru-RU": "чашки",
				"zh-CN": "杯"
			}
    };

    if (unitDisplay === "long") {
			if (value === 1) {
				Unit = unitsLongSingular[unit]?.[locale] || unit;
			} else {
				Unit = unitsLongPlural[unit]?.[locale] || unit;
			}
    } else {
      Unit = unitsShort[unit] || unit;
    }

    const formattedValue = new Intl.NumberFormat(locale).format(value);
    return `${formattedValue} ${Unit}`;
};

const FluidOunce: IFluidOunce = {
	toGallon(value: number=0, options: IOptions={}): string | number {
		if (isNaN(value)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value ==0) ? 0 : value / 128;
		return _convert(value, 'gallon', options);
	},
	toLiter(value: number=0, options: IOptions={}): string | number {
		if (isNaN(value)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value ==0) ? 0 : value / 33.814;
		return _convert(value, 'liter', options);
	},
	toMilliliter(value: number=0, options: IOptions={}): string | number {
		if (isNaN(value)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value ==0) ? 0 : value *  29.574;
		return _convert(value, 'milliliter', options);
	},
	toCubicMeter(value: number=0, options: IOptions={}): string | number {
		if (isNaN(value)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value == 0) ? 0 : value /  33810;

		if (Object.keys(options).length > 0 && typeof options === 'object') {
			return VolumeConversion(value, "cubic-meter", options);
		}
		return value;
	},
	toPint(value: number=0, options: IOptions={}): string | number {
		if (isNaN(value)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value == 0) ? 0 : value / 16;
		if (Object.keys(options).length > 0 && typeof options === 'object') {
			return VolumeConversion(value, 'pint', options);
		}
		return value;
	},
	toTablespoon(value: number=0, options: IOptions={}): string | number {
		if (isNaN(value)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value == 0) ? 0 : value * 2;
		if (Object.keys(options).length > 0 && typeof options === 'object') {
			return VolumeConversion(value, 'tablespoon', options);
		}
		return value;
	},
	toCup(value: number=0, options: IOptions={}): string | number {
		if (isNaN(value)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value == 0) ? 0 : value / 8.115;
		if (Object.keys(options).length > 0 && typeof options === 'object') {
			return VolumeConversion(value, 'cup', options);
		}
		return value;
	}
}

const Gallon: IGallon = {
	toFluidOunce(value: number=0, options: IOptions={}): string | number {
		if (isNaN(value)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value ==0) ? 0 : value * 128;
		return _convert(value, 'fluid-ounce', options);
	},
	toLiter(value: number=0, options: IOptions={}): string | number {
		if (isNaN(value)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value ==0) ? 0 : value * 3.785;
		return _convert(value, 'liter', options);
	},
	toMilliliter(value: number=0, options: IOptions={}): string | number {
		if (isNaN(value)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value ==0) ? 0 : value * 3785;
		return _convert(value, 'milliliter', options);
	},
	toCubicMeter(value: number=0, options: IOptions={}): string | number {
		if (isNaN(value)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value == 0) ? 0 : value /  264.2;
		if (Object.keys(options).length > 0 && typeof options === 'object') {			
			return VolumeConversion(value, "cubic-meter", options);
		}
		return value;
	},
	toPint(value: number=0, options: IOptions={}): string | number {
		if (isNaN(value)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value == 0) ? 0 : value * 8;
		if (Object.keys(options).length > 0 && typeof options === 'object') {			
			return VolumeConversion(value, 'pint', options);
		}
		return value;
	},
	toTablespoon(value: number=0, options: IOptions={}): string | number {
		if (isNaN(value)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value == 0) ? 0 : value * 256;
		if (Object.keys(options).length > 0 && typeof options === 'object') {
			return VolumeConversion(value, 'tablespoon', options);
		}
		return value;
	},
	toCup(value: number=0, options: IOptions={}): string | number {
		if (isNaN(value)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value == 0) ? 0 : value * 15.773;
		if (Object.keys(options).length > 0 && typeof options === 'object') {
			return VolumeConversion(value, 'cup', options);
		}
		return value;
	}
}

const Liter: ILiter = {
	toFluidOunce(value: number=0, options: IOptions={}): string | number {
		if (isNaN(value)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value ==0) ? 0 : value * 33.814;
		return _convert(value, 'fluid-ounce', options);
	},
	toGallon(value: number=0, options: IOptions={}): string | number {
		if (isNaN(value)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value ==0) ? 0 : value * 3.785;
		return _convert(value, 'gallon', options);
	},
	toMilliliter(value: number=0, options: IOptions={}): string | number {
		if (isNaN(value)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value ==0) ? 0 : value * 1000;
		return _convert(value, 'milliliter', options);
	},
	toCubicMeter(value: number=0, options: IOptions={}): string | number {
		if (isNaN(value)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value == 0) ? 0 : value * 1000;
		if (Object.keys(options).length > 0 && typeof options === 'object') {
			return VolumeConversion(value, "cubic-meter", options);
		}
		return value;
	},
	toPint(value: number=0, options: IOptions={}): string | number {
		if (isNaN(value)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value == 0) ? 0 : value * 2.113;
		if (Object.keys(options).length > 0 && typeof options === 'object') {
			return VolumeConversion(value, 'pint', options);
		}
		return value;
	},
	toTablespoon(value: number=0, options: IOptions={}): string | number {
		if (isNaN(value)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value == 0) ? 0 : value * 67.628;
		if (Object.keys(options).length > 0 && typeof options === 'object') {
			return VolumeConversion(value, 'tablespoon', options);
		}
		return value;
	},
	toCup(value: number=0, options: IOptions={}): string | number {
		if (isNaN(value)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value == 0) ? 0 : value * 4.167;
		if (Object.keys(options).length > 0 && typeof options === 'object') {
			return VolumeConversion(value, 'cup', options);
		}
		return value;
	}
}

const Milliliter: IMilliliter = {
	toFluidOunce(value: number=0, options: IOptions={}): string | number {
		if (isNaN(value)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value ==0) ? 0 : value * 29.574;
		return _convert(value, 'fluid-ounce', options);
	},
	toGallon(value: number=0, options: IOptions={}): string | number {
		if (isNaN(value)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value ==0) ? 0 : value * 3785;
		return _convert(value, 'gallon', options);
	},
	toLiter(value: number=0, options: IOptions={}): string | number {
		if (isNaN(value)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value ==0) ? 0 : value / 1000;
		return _convert(value, 'liter', options);
	},
	toCubicMeter(value: number=0, options: IOptions={}): string | number {
		if (isNaN(value)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value == 0) ? 0 : value / 1_000_000;
		if (Object.keys(options).length > 0 && typeof options === 'object') {
			return VolumeConversion(value, "cubic-meter", options);
		}
		return value;
	},
	toPint(value: number=0, options: IOptions={}): string | number {
		if (isNaN(value)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value == 0) ? 0 : value / 473.2;
		if (Object.keys(options).length > 0 && typeof options === 'object') {
			return VolumeConversion(value, 'pint', options);
		}
		return value;
	},
	toTablespoon(value: number=0, options: IOptions={}): string | number {
		if (isNaN(value)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value == 0) ? 0 : value * 14.787;
		if (Object.keys(options).length > 0 && typeof options === 'object') {
			return VolumeConversion(value, 'tablespoon', options);
		}
		return value;
	},
	toCup(value: number=0, options: IOptions={}): string | number {
		if (isNaN(value)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value == 0) ? 0 : value / 240;
		if (Object.keys(options).length > 0 && typeof options === 'object') {
			return VolumeConversion(value, 'cup', options);
		}
		return value;
	}
}
const CubicMeter: ICubicMeter = {
	toFluidOunce(value: number=0, options: IOptions={}): string | number {
		if (isNaN(value)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value ==0) ? 0 : value * 33_810;
		return _convert(value, "fluid-ounce", options);
	},
	toGallon(value: number=0, options: IOptions={}): string | number {
		if (isNaN(value)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value ==0) ? 0 : value * 264.2;
		return _convert(value, "gallon", options);
	},
	toLiter(value: number=0, options: IOptions={}): string | number {
		if (isNaN(value)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value ==0) ? 0 : value * 1000;
		return _convert(value, "liter", options);
	},
	toMilliliter(value: number=0, options: IOptions={}): string | number {
		if (isNaN(value)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value ==0) ? 0 : value * 1_000_000;
		return _convert(value, "milliliter", options);
	},
	toPint(value: number=0, options: IOptions={}): string | number {
		if (isNaN(value)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value ==0) ? 0 : value * 2113;
		if (Object.keys(options).length > 0 && typeof options === 'object') {
			return VolumeConversion(value, "pint", options);
		}
		return value;
	},
	toTablespoon(value: number=0, options: IOptions={}): string | number {
		if (isNaN(value)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value ==0) ? 0 : value * 67_630;
		if (Object.keys(options).length > 0 && typeof options === 'object') {
			return VolumeConversion(value, "tablespoon", options);
		}
		return value;
	},
	toCup(value: number=0, options: IOptions={}): string | number {
		if (isNaN(value)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value ==0) ? 0 : value * 4_167;
		if (Object.keys(options).length > 0 && typeof options === 'object') {
			return VolumeConversion(value, "cup", options);
		}
		return value;
	}
}
const Pint: IPint = {
	toFluidOunce(value: number=0, options: IOptions={}): string | number {
		if (isNaN(value)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value ==0) ? 0 : value * 16;
		return _convert(value, 'fluid-ounce', options);
	},
	toGallon(value: number=0, options: IOptions={}): string | number {
		if (isNaN(value)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value ==0) ? 0 : value / 8;
		return _convert(value, 'gallon', options);
	},
	toLiter(value: number=0, options: IOptions={}): string | number {
		if (isNaN(value)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value ==0) ? 0 : value / 2.113;
		return _convert(value, 'liter', options);
	},
	toMilliliter(value: number=0, options: IOptions={}): string | number {
		if (isNaN(value)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value ==0) ? 0 : value * 473.2;
		return _convert(value, 'milliliter', options);
	},
	toCubicMeter(value: number=0, options: IOptions={}): string | number {
		if (isNaN(value)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value == 0) ? 0 : value / 2113;
		if (Object.keys(options).length > 0 && typeof options === 'object') {
			return VolumeConversion(value, "cubic-meter", options);
		}
		return value;
	},
	toTablespoon(value: number=0, options: IOptions={}): string | number {
		if (isNaN(value)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value == 0) ? 0 : value * 32;
		if (Object.keys(options).length > 0 && typeof options === 'object') {
			return VolumeConversion(value, 'tablespoon', options);
		}
		return value;
	},
	toCup(value: number=0, options: IOptions={}): string | number {
		if (isNaN(value)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value == 0) ? 0 : value /  1.972;
		if (Object.keys(options).length > 0 && typeof options === 'object') {
			return VolumeConversion(value, 'cup', options);
		}
		return value;
	}
}
const Tablespoon: ITablespoon = {
	toFluidOunce(value: number=0, options: IOptions={}): string | number {
		if (isNaN(value)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value ==0) ? 0 : value / 2;
		return _convert(value, 'fluid-ounce', options);
	},
	toGallon(value: number=0, options: IOptions={}): string | number {
		if (isNaN(value)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value ==0) ? 0 : value / 256;
		return _convert(value, 'gallon', options);
	},
	toLiter(value: number=0, options: IOptions={}): string | number {
		if (isNaN(value)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value ==0) ? 0 : value / 67.628;
		return _convert(value, 'liter', options);
	},
	toMilliliter(value: number=0, options: IOptions={}): string | number {
		if (isNaN(value)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value ==0) ? 0 : value * 14.787;
		return _convert(value, 'milliliter', options);
	},
	toCubicMeter(value: number=0, options: IOptions={}): string | number {
		if (isNaN(value)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value == 0) ? 0 : value / 67_630;
		if (Object.keys(options).length > 0 && typeof options === 'object') {
			return VolumeConversion(value, "cubic-meter", options);
		}
		return value;
	},
	toPint(value: number=0, options: IOptions={}): string | number {
		if (isNaN(value)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value == 0) ? 0 : value / 32;
		if (Object.keys(options).length > 0 && typeof options === 'object') {
			return VolumeConversion(value, 'pint', options);
		}
		return value;
	},
	toCup(value: number=0, options: IOptions={}): string | number {
		if (isNaN(value)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value == 0) ? 0 : value / 16.231;
		if (Object.keys(options).length > 0 && typeof options === 'object') {
			return VolumeConversion(value, 'cup', options);
		}
		return value;
	}
}
const Cup: ICup = {
	toFluidOunce(value: number=0, options: IOptions={}): string | number {
		if (isNaN(value)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value ==0) ? 0 : value * 8.115;
		return _convert(value, 'fluid-ounce', options);
	},
	toGallon(value: number=0, options: IOptions={}): string | number {
		if (isNaN(value)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value ==0) ? 0 : value / 15.773;
		return _convert(value, 'gallon', options);
	},
	toLiter(value: number=0, options: IOptions={}): string | number {
		if (isNaN(value)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value ==0) ? 0 : value / 4.167;
		return _convert(value, 'liter', options);
	},
	toMilliliter(value: number=0, options: IOptions={}): string | number {
		if (isNaN(value)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value ==0) ? 0 : value * 240;
		return _convert(value, 'milliliter', options);
	},
	toCubicMeter(value: number=0, options: IOptions={}): string | number {
		if (isNaN(value)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value == 0) ? 0 : value / 4_167;
		if (Object.keys(options).length > 0 && typeof options === 'object') {
			return VolumeConversion(value, "cubic-meter", options);
		}
		return value;			
	},
	toPint(value: number=0, options: IOptions={}): string | number {
		if (isNaN(value)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value == 0) ? 0 : value * 1.972;
		if (Object.keys(options).length > 0 && typeof options === 'object') {
			return VolumeConversion(value, 'pint', options);
		}
		return value;		
	},
	toTablespoon(value: number=0, options: IOptions={}): string | number {
		if (isNaN(value)) {
			throw new Error('El valor introducido no es un número válido.');
		}
		value = (value == 0) ? 0 : value * 16.231;
		if (Object.keys(options).length > 0 && typeof options === 'object') {	
			return VolumeConversion(value, 'tablespoon', options);
		}
		return value;
	}
}

export { FluidOunce, Gallon, Liter, Milliliter, CubicMeter, Pint, Tablespoon, Cup };