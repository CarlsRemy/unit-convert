// test.ts
const { assert } = require("chai");
const { describe, it } = require("mocha");
import { Inch,Centimeter, Meter, Kilometer, Mile, Yard, Foot } from '../dist/convert';

describe('Meter', () => {
	
	it('Evaluacion de conversion a Kilometros (SHORT)', () => {
		const kilometer = Meter.toKilometer(1000, {locale : 'en-US'});
		assert.strictEqual(kilometer, "1 km", 'Deberia ser 1 Km');
	})

	it('Evaluacion de conversion a Kilometros (LONG)', () => {
		const kilometer = Meter.toKilometer(1500, {locale : 'en-US', unitDisplay : 'long'});
		assert.strictEqual(kilometer, "1.5 kilometers", 'Deberia ser 1 Km');
	})
});

describe('Kilometer', () => {
	
	it('Evaluacion de conversion a Metros (SHORT)', () => {
		const meter = Kilometer.toMeter(1, {locale : 'en-US'});
		assert.strictEqual(meter, "1,000 m", 'Deberia ser 1 m');
	})

	it('Evaluacion de conversion a Metros (LONG)', () => {
		const meter = Kilometer.toMeter(234.67, {locale : 'en-US', unitDisplay : 'long'});
		assert.strictEqual(meter, "234,670 meters", 'Deberia ser 1.5 m');
	})
});

describe('Inch', () => {
	
	it('Evaluacion de conversion a Centimetros (SHORT)', () => {
		const centimeter = Inch.toCentimeter(1, {locale : 'en-US'});
		assert.strictEqual(centimeter, "2.54 cm", 'Deberia ser 2.54 cm');
	})

	it('Evaluacion de conversion a Centimetros (LONG)', () => {
		const centimeter = Inch.toCentimeter(10, {locale : 'en-US', unitDisplay : 'long'});
		assert.strictEqual(centimeter, "25.4 centimeters", 'Deberia ser 25.4 cm');
	})
});

describe('Centimeter', () => {
	
	it('Evaluacion de conversion a Pulgadas (SHORT)', () => {
		const inch = Centimeter.toInch(2.54, {locale : 'en-US'});
		assert.strictEqual(inch, "1 in", 'Deberia ser 1 in');
	})

	it('Evaluacion de conversion a Pulgadas (LONG)', () => {
		const inch = Centimeter.toInch(25.4, {locale : 'en-US', unitDisplay : 'long'});
		assert.strictEqual(inch, "10 inches", 'Deberia ser 10 in');
	})
});

describe('Mile', () => {
	
	it('Evaluacion de conversion a Kilometros (SHORT)', () => {
		const kilometer = Mile.toKilometer(1, {locale : 'en-US'});
		assert.strictEqual(kilometer, "1.609 km", 'Deberia ser 1.61 km');
	})

	it('Evaluacion de conversion a Kilometros (LONG)', () => {
		const kilometer = Mile.toKilometer(10, {locale : 'en-US', unitDisplay : 'long'});
		assert.strictEqual(kilometer, "16.093 kilometers", 'Deberia ser 16.09 km');
	})
});

describe('Yard', () => {
	
	it('Evaluacion de conversion a Metros (SHORT)', () => {
		const meter = Yard.toMeter(1, {locale : 'en-US'});
		assert.strictEqual(meter, "0.914 m", 'Deberia ser 0.91 m');
	})

	it('Evaluacion de conversion a Metros (LONG)', () => {
		const meter = Yard.toMeter(10, {locale : 'en-US', unitDisplay : 'long'});
		assert.strictEqual(meter, "9.144 meters", 'Deberia ser 9.14 m');
	})
});

describe('Foot', () => {
	
	it('Evaluacion de conversion a Kilometros (SHORT)', () => {
		const meter = Foot.toKilometer(170, {locale : 'en-US'});
		assert.strictEqual(meter, "0.052 km", 'Deberia ser 0.30 m');
	})

	it('Evaluacion de conversion a Metros (LONG)', () => {
		const meter = Foot.toMeter(10, {locale : 'en-US', unitDisplay : 'long'});
		assert.strictEqual(meter, "3.048 meters", 'Deberia ser 3.05 m');
	})

	it('Evaluacion de conversion a Yardas (LONG)', () => {
		const inch = Foot.toYard(168, {locale : 'es-ES', unitDisplay : 'long'});
		assert.strictEqual(inch, "56 yardas", 'Deberia ser 12 in');
	})
});