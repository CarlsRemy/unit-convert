enum unitDisplay {
	short = "short",
	long = "long",
	narrow = "narrow",
}

type unitDisplayType = `${unitDisplay}`;  // "short" | "long" | "narrow"
/**
 * @type {Object}  IOptions
 * @module IOptions
 */
interface IOptions {
	locale?: string;
	unitDisplay?: unitDisplayType;
	useGrouping?: boolean;
	maximumFractionDigits?: number;
	minimumFractionDigits?: number;
}

const fortnight = (locale: string = "en", style: string = "short") => {
	locale = locale.split('-')[0]; // Get the language code
	let unit = '';
	switch (locale) {
		case 'es':
			unit = style === 'long' ? 'quincenas' : 'quinc';
			break;
		case 'en':
			unit = style === 'long' ? 'fortnights' : 'fort';
			break;
		case 'fr':
			unit = style === 'long' ? 'quinzaines' : 'quinz';
			break;
		default:
			unit = style === 'long' ? 'fortnights' : 'fort'; // Default to English if locale not recognized
			break;
	}
	return unit;
}

const _format = (value: number = 0, Unit = "", options: IOptions = {}) => {
	const locale = options?.locale || 'en-US';
	const unitDisplay: unitDisplayType = options?.unitDisplay || 'short';

	if (Unit === 'fortnight') {
		Unit = fortnight(locale, unitDisplay);
		return `${value} ${(unitDisplay == "long" && value == 1) ? Unit.substring(0, Unit.length -1) : Unit}`;
	}

	const _options: Intl.NumberFormatOptions = {}

	if (Unit !== "") {
		_options.style = 'unit';
		_options.unitDisplay = unitDisplay;
	
		if (Object( options).hasOwnProperty('maximumFractionDigits')) {
			_options.maximumFractionDigits = options.maximumFractionDigits;
		}
		_options.unit = Unit;
	}

	if (Object( options).hasOwnProperty('minimumFractionDigits')) {
		_options.minimumFractionDigits = options.minimumFractionDigits;
	}

	if (Object( options).hasOwnProperty('useGrouping')) {
		_options.useGrouping = options.useGrouping;
	}
	
	const formatter = new Intl.NumberFormat(locale, _options);
	return formatter.format(value);
}
/**
 * 
 * @param value 
 * @param unit 
 * @param options 
 * @returns {string | number}
 * @module _convert
 */
const _convert= (value: number = 0, unit: string = "", options: IOptions = {}): number | string  => {
	if (Object.keys(options).length > 0 && typeof options === 'object') {
		return _format(value, unit, options)
	}
	return value
}

export {IOptions,  unitDisplayType, unitDisplay, _convert};