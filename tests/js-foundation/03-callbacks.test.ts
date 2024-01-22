import { getUserById } from '../../src/js-foundation/03-callbacks';

describe('03-callbacks', () => {
	test('getUserById should return an error if user does not exist', () => {
		const idTestError = 10;

		getUserById(idTestError, (error, user) => {
			expect(error).toBe(`USER NOT FOUND WITH ID ${idTestError}`);
			expect(user).toBeUndefined();
		});
	});

	test('getUserById should return an user', () => {
		const idTestSucces = 1;

		getUserById(idTestSucces, (error, user) => {
			expect(error).toBeUndefined();

			expect(user?.name).toBe('John Doe');
		});
	});
});
