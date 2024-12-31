//test.ts
const { assert } = require("chai");
const { describe, it } = require("mocha");
import {Bit, Byte, Kilobyte} from '../dist/convert';

describe('Storage', () => {
	describe('Bit', () => {
		it('toByte', () => {
			assert.equal(Bit.toByte(1), 0.125);
		});
		it('toKilobyte', () => {
			assert.equal(Bit.toKilobyte(1), 0.000125);
		});
	});
	describe('Byte', () => {
		it('toBit', () => {
			assert.equal(Byte.toBit(1), 8);
		});
		it('toKilobyte', () => {
			assert.equal(Byte.toKilobyte(1), 0.001);
		});
	});
	describe('Kilobyte', () => {
		it('toBit', () => {
			assert.equal(Kilobyte.toBit(1), 8000);
		});
		it('toByte', () => {
			assert.equal(Kilobyte.toByte(1), 1000);
		});
	});
});