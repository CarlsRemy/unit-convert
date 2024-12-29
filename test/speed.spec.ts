//test.ts
const { assert } = require("chai");
const { describe, it } = require("mocha");
import { KilometerPerDay, KilometerPerHour, MeterPerMinute, MeterPerSecond } from '../dist/convert';

describe('Speed', () => {
	describe('KilometerPerDay', () => {
		it('toKilometerPerHour', () => {
			assert.equal(KilometerPerDay.toKilometerPerHour(1), 24);
		});
		it('toKilometerPerMinute', () => {
			assert.equal(KilometerPerDay.toKilometerPerMinute(1), 1440);
		});
		it('toKilometerPerSecond', () => {
			assert.equal(KilometerPerDay.toKilometerPerSecond(6),518400);
		});
		it('toMeterPerDay', () => {
			assert.equal(KilometerPerDay.toMeterPerDay(1), 1000);
		});
		it('toMeterPerHour', () => {
			assert.equal(KilometerPerDay.toMeterPerHour(1), 41.6667);
		});
		it('toMeterPerMinute', () => {
			assert.equal(KilometerPerDay.toMeterPerMinute(1), 0.6944444444444444);
		});
		it('toMeterPerSecond', () => {
			assert.equal(KilometerPerDay.toMeterPerSecond( 17_800), 206.0185185185185);
		});
	});
	describe('KilometerPerHour', () => {
		it('toKilometerPerDay', () => {
			assert.equal(KilometerPerHour.toKilometerPerDay(1), 0.041666666666666664);
		});
		it('toKilometerPerMinute', () => {
			assert.equal(KilometerPerHour.toKilometerPerMinute(35), 2100);
		});
		it('toKilometerPerSecond', () => {
			assert.equal(KilometerPerHour.toKilometerPerSecond(1), 3600);
		});
		it('toMeterPerDay', () => {
			assert.equal(KilometerPerHour.toMeterPerDay(1), 41.666666666666664);
		});
		it('toMeterPerHour', () => {
			assert.equal(KilometerPerHour.toMeterPerHour(1), 1000);
		});
		it('toMeterPerMinute', () => {
			assert.equal(KilometerPerHour.toMeterPerMinute(1), 16.666666666666668);
		})
	});

	describe('MeterPerMinute', () => {
		it('toKilometerPerDay', () => {
			assert.equal(MeterPerMinute.toKilometerPerDay(97_976_800), 68.03944444444444);
		});
		it('toKilometerPerHour', () => {
			assert.equal(MeterPerMinute.toKilometerPerHour(88_095), 1.46825);
		});
		it('toKilometerPerSecond', () => {
			assert.equal(MeterPerMinute.toKilometerPerSecond(789), 47.34);
		});
		it('toMeterPerDay', () => {
			assert.equal(MeterPerMinute.toMeterPerDay(880_987), 611.7965277777778);
		});
		it('toMeterPerHour', () => {
			assert.equal(MeterPerMinute.toMeterPerHour(63), 1.05);
		});
		it('toMeterPerSecond', () => {
			assert.equal(MeterPerMinute.toMeterPerSecond(145), 8700);
		});
	});
});