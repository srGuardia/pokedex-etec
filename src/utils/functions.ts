import { PokemonData } from '../shared/@types/pokemon';

export function formatNumber(value = 0) {
	const totalFormat = 4;
	const numberLength = String(value).length;
	const newValue = totalFormat - numberLength + 1;

	return Array(newValue).join('0') + value;
}

export const getFavorite = (id: number) => {
	const data = localStorage.getItem('@WB:Pokemons');

	const pokeData = data ? (JSON.parse(data) as PokemonData[]) : [];

	const filtered = pokeData.find((item) => item.id === id);

	if (filtered) return true;

	return false;
};

export const saveFavorite = async (pokemon: PokemonData) => {
	const data = await localStorage.getItem('@WB:Pokemons');

	const pokeData = data ? (JSON.parse(data) as PokemonData[]) : [];

	let newArray = [...pokeData, pokemon];

	localStorage.setItem('@WB:Pokemons', JSON.stringify(newArray));
};

export const removeFavorite = async (id: number) => {
	const data = await localStorage.getItem('@WB:Pokemons');

	const pokemons = data ? (JSON.parse(data) as PokemonData[]) : [];

	const filterPokemon = pokemons.filter((pokemon) => pokemon.id !== id);

	localStorage.setItem('@WB:Pokemons', JSON.stringify(filterPokemon));
};
