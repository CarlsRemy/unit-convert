6350.294971201412// test.ts
const { assert } = require("chai");
const { describe, it } = require("mocha");
import { FluidOunce, Gallon, Liter, Milliliter, CubicMeter, Pint, Tablespoon, Cup } from '../dist/convert';
import { unitDisplay } from '../dist/converters/utils';

describe('Volume', () => {
	describe('FluidOunce', () => {
		it('toGallon', () => {
			assert.equal(FluidOunce.toGallon(1, ), 0.0078125);
		});
		it('toLiter', () => {
			assert.equal(FluidOunce.toLiter(1), 0.029573549417401077);
		});
		it('toMilliliter', () => {
			assert.equal(FluidOunce.toMilliliter(1), 29.574);
		});
		it('toCubicMeter', () => {
			assert.equal(FluidOunce.toCubicMeter(1), 0.000029577048210588582);
		});
		it('toPint', () => {
			assert.equal(FluidOunce.toPint(1, {locate: "ru-RU", unitDisplay: "long"}), "0.063 pints");
		});
		it('toTablespoon', () => {
			assert.equal(FluidOunce.toTablespoon(1), 2);
		});
		it('toCup', () => {
			assert.equal(FluidOunce.toCup(1), 0.12322858903265557);
		});
	});
	describe('Gallon', () => {
		it('toFluidOunce', () => {
			assert.equal(Gallon.toFluidOunce(1), 128);
		});
		it('toLiter', () => {
			assert.equal(Gallon.toLiter(1), 3.785);
		});
		it('toMilliliter', () => {
			assert.equal(Gallon.toMilliliter(1), 3785);
		});
		it('toCubicMeter', () => {
			assert.equal(Gallon.toCubicMeter(265), 1.0030280090840273);
		});
		it('toPint', () => {
			assert.equal(Gallon.toPint(1), 8);
		});
		it('toTablespoon', () => {
			assert.equal(Gallon.toTablespoon(1), 256);
		});
		it('toCup', () => {
			assert.equal(Gallon.toCup(1), 15.773);
		});
	});
	describe('Liter', () => {
		it('toFluidOunce', () => {
			assert.equal(Liter.toFluidOunce(1,{maximumFractionDigits:3}), "33.814 fl oz");
		});
		it('toGallon', () => {
			assert.equal(Liter.toGallon(1), 3.785);
		});
	})
});