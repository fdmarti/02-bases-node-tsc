import { getAge } from '../../src/plugins/get-age.plugin';

describe('plugin/get-age.plugin', () => {
	test('getAge should return a number', () => {
		const currentDate = '1994-04-11';
		const age = getAge(currentDate);
		expect(typeof age).toBe('number');
	});

	test('getAge should return a NaN error', () => {
		const invalidDate = 'TestingFormat';
		const age = getAge(invalidDate);
		expect(age).toBeNaN();
	});
});
