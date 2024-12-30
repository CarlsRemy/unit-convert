// test.ts
const { assert } = require("chai");
const { describe, it } = require("mocha");
import {kelvin, Fahrenheit, Celsius} from '../dist/convert';

describe('Temperature', () => {
	describe('Kelvin', () => {
		it('toCelsius', () => {
			assert.equal(kelvin.toCelsius(273.15), 0);
		});
		it('toFahrenheit', () => {
			assert.equal(kelvin.toFahrenheit(263.15), 14);
		});
	});
	describe('Fahrenheit', () => {
		it('toCelsius', () => {
			assert.equal(Fahrenheit.toCelsius(32), 0);
		});
		it('toKelvin', () => {
			assert.equal(Fahrenheit.toKelvin(32), 273.15);
		});
	});
	describe('Celsius', () => {
		it('toFahrenheit', () => {
			assert.equal(Celsius.toFahrenheit(0), 32);
		});
		it('toKelvin', () => {
			assert.equal(Celsius.toKelvin(0), 273.15);
		});
	});
});