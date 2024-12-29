// test.ts
const { assert } = require("chai");
const { describe, it } = require("mocha");
import { Kilogram, Gram, Ton, Milligram, Microgram, Pound, Stone, Ounce } from '../dist/convert';

describe('Mass', () => {
	describe('Kilogram', () => {
		it('toGram', () => {
			assert.equal(Kilogram.toGram(1, {locale : 'en-US'}), "1,000 g");
		});
		it('toTon', () => {
			assert.equal(Kilogram.toTon(1), 0.001);
		});
		it('toMilligram', () => {
			assert.equal(Kilogram.toMilligram(1), 1_000_000);
		});
		it('toMicrogram', () => {
			assert.equal(Kilogram.toMicrogram(1, {local: "fr-FR"}), "1,000,000,000 µg");
		});
	});
	describe('Gram', () => {
		it('toKilogram', () => {
			assert.equal(Gram.toKilogram(1000), 1);
		});
		it('toTon', () => {
			assert.equal(Gram.toTon(1000), 0.001);
		});
		it('toMilligram', () => {
			assert.equal(Gram.toMilligram(1), 1000);
		});
		it('toMicrogram', () => {
			assert.equal(Gram.toMicrogram(1), 1_000_000);
		});
	});
	describe('Ton', () => {
		it('toKilogram', () => {
			assert.equal(Ton.toKilogram(1), 1000);
		});
		it('toGram', () => {
			assert.equal(Ton.toGram(1), 1_000_000);
		});
		it('toMilligram', () => {
			assert.equal(Ton.toMilligram(1, {locale: "ja-JP", unitDisplay: "long"}), "1,000,000,000 ミリグラム");
		});
		it('toMicrogram', () => {
			assert.equal(Ton.toMicrogram(1), 1_000_000_000_000);
		});
	});
	describe('Milligram', () => {
		it('toKilogram', () => {
			assert.equal(Milligram.toKilogram(1_000_000), 1);
		});
		it('toGram', () => {
			assert.equal(Milligram.toGram(1_000), 1);
		});
		it('toTon', () => {
			assert.equal(Milligram.toTon(1_000_000), 0.001);
		});
		it('toMicrogram', () => {
			assert.equal(Milligram.toMicrogram(1), 1_000);
		});
	});
	describe('Microgram', () => {
		it('toKilogram', () => {
			assert.equal(Microgram.toKilogram(1_000_000_000), 1);
		});
		it('toGram', () => {
			assert.equal(Microgram.toGram(1_000_000), 1);
		});
		it('toTon', () => {
			assert.equal(Microgram.toTon(1_000_000_000), 0.001);
		});
		it('toMilligram', () => {
			assert.equal(Microgram.toMilligram(1_000), 1);
		});
	});
});