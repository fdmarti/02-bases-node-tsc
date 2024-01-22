import { generateUuid } from '../../src/plugins/uuid.plugin';

describe('uuid.plugin', () => {
	const id = generateUuid();

	test('UUID should return a valid string', () => {
		expect(typeof id).toBe('string');
	});

	test('UUID should return 36 characters', () => {
		expect(id.length).toBe(36);
	});
});
