import { buildMakePerson } from '../../src/js-foundation/05-factory';

describe('05-factory', () => {
	const generateUuid = () => '1234';
	const getAge = () => 30;

	test('buildMakePerson should return a function', () => {
		const makePerson = buildMakePerson({ generateUuid, getAge });
		expect(typeof makePerson).toBe('function');
	});

	test('makePerson should return a person', () => {
		const makePerson = buildMakePerson({ generateUuid, getAge });

		const person = {
			name: 'John Wick',
			birthDate: '1985-11-10',
		};

		const johnWick = makePerson(person);
		expect(johnWick).toEqual({
			id: '1234',
			name: 'John Wick',
			birthDate: '1985-11-10',
			age: 30,
		});
	});
});
