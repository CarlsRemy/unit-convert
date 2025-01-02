// test.ts
const { assert } = require("chai");
const { describe, it } = require("mocha");
import { Milliseconds, Seconds, Minutes, Hours, Days, Weeks, Months, Years } from '../dist/convert';

describe('Time', () => {
	describe('Milliseconds', () => {
		it('toSeconds', () => {
			assert.equal(Milliseconds.toSeconds(1), 0.001);
		});
		it('toMinutes', () => {
			assert.equal(Milliseconds.toMinutes(1), 0.000016666666666666668);
		});
		it('toHours', () => {
			assert.equal(Milliseconds.toHours(1), 2.7777777777777776e-7);
		});
	});
	describe('Seconds', () => {
		it('toMilliseconds', () => {
			assert.equal(Seconds.toMilliseconds(1), 1000);
		});
		it('toMinutes', () => {
			assert.equal(Seconds.toMinutes(1), 0.016666666666666666);
		});
		it('toHours', () => {
			assert.equal(Seconds.toHours(1), 0.0002777777777777778);
		});
		it('toDays', () => {
			assert.equal(Seconds.toDays(1), 1.1574074074074074e-5);
		});
		it('toWeeks', () => {
			assert.equal(Seconds.toWeeks(1), 1.6534391534391535e-6);
		});
	});
	describe('Years', () => {
		it('toMinutes', () => {
			assert.equal(Years.toMinutes(1), 525600);
		});
		it('toHours', () => {
			assert.equal(Years.toHours(1), 8760);
		});
		it('toDays', () => {
			assert.equal(Years.toDays(1), 365);
		});
		it('toWeeks', () => {
			assert.equal(Years.toWeeks(1), 52.1429);
		});
		it('toMonths', () => {
			assert.equal(Years.toMonths(1), 12);
		});
	});
});
