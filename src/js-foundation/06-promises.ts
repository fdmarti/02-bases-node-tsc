import { httpClientPlugin as http } from '../plugins/http-client';

export const getPokemonNameById = async (id: string | number): Promise<string> => {
	try {
		const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

		const pokemon = await http.get(url);
		return pokemon.name;
	} catch (error) {
		throw `Pokemon with the id ${id} not exists`;
	}
};
