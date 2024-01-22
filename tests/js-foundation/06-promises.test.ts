import { getPokemonNameById } from '../../src/js-foundation/06-promises';

describe('06-promises', () => {
	test('getPokemonNameById should return a pokemon', async () => {
		const pokemonId = 1;
		const pokemonName = await getPokemonNameById(pokemonId);

		expect(pokemonName).toBe('bulbasaur');
	});

	test('getPokemonNameById should return an error if pokemon does not exist', async () => {
		const pokemonId = 10000000;

		try {
			await getPokemonNameById(pokemonId);
			expect(true).toBeFalsy();
		} catch (error) {
			expect(error).toBe(`Pokemon with the id ${pokemonId} not exists`);
		}
	});
});
