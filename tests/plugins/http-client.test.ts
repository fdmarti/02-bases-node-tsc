import { httpClientPlugin } from '../../src/plugins/http-client';

describe('http-client', () => {
	const mockValue = {
		userId: 1,
		id: 1,
		title: 'delectus aut autem',
		completed: false,
	};

	test('httpClientPlugin.get() shoud return a string', async () => {
		const data = await httpClientPlugin.get(
			'https://jsonplaceholder.typicode.com/todos/1',
		);

		expect(data).toEqual(mockValue);
	});
});
