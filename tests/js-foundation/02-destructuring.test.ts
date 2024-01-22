import { characters } from '../../src/js-foundation/02-destructuring';

describe('02-destructuring', () => {
	test('Characters should be an array', () => {
		expect(Array.isArray(characters)).toBe(true);
	});

	test('Characters array should have values', () => {
		expect(characters.length).toBeGreaterThan(0);
	});

	test('characters should contain Flash, Superman', () => {
		expect(characters).toContain('Flash');
		expect(characters).toContain('Superman');
	});

	test('First character should be Flash', () => {
		const [flash] = characters;
		expect(flash).toBe('Flash');
	});
});
