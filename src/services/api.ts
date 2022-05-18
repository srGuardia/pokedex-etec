import { ApiData } from '../shared/@types/api';
import { PokemonData } from '../shared/@types/pokemon';
import { axiosConfig as axios } from './config';

class PokeApi {
	async allPokemons(page: number): Promise<ApiData> {
		const { data } = await axios.get(`pokemon?limit=10&offset=${page}`);

		return { data };
	}

	async detailPokemon(id: number): Promise<PokemonData> {
		const { data } = await axios.get(`pokemon/${id}`);
		return data as PokemonData;
	}
}

export default new PokeApi();
