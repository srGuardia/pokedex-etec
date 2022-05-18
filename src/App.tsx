import { useEffect, useState } from 'react';
import { Footer } from './shared/components/Footer';
import { Main } from './shared/components/Main';
import { GlobalLayout } from './shared/global/layout';
import Aos from 'aos';
import { Header } from './shared/components/Header';
import { List } from './shared/components/List';
import { toast } from 'react-toastify';
import api from './services/api';
import { PokemonData } from './shared/@types/pokemon';

const _DATA = [
	{
		avatar:
			'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg',
		name: 'Bulbasaur',
		types: [
			{ name: 'fire' },
			{ name: 'women' },
			{ name: 'normal' },
			{ name: 'water' },
		],
	},
	{
		avatar:
			'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/2.svg',
		name: 'Bulbasaur',
		types: [{ name: 'grass' }, { name: 'women' }],
	},
	{
		avatar:
			'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/3.svg',
		name: 'Bulbasaur',
		types: [{ name: 'normal' }, { name: 'women' }],
	},
	{
		avatar:
			'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/4.svg',
		name: 'Bulbasaur',
		types: [{ name: 'water' }, { name: 'women' }],
	},
	{
		avatar:
			'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/5.svg',
		name: 'Bulbasaur',
		types: [{ name: 'rock' }, { name: 'women' }],
	},
	{
		avatar:
			'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/6.svg',
		name: 'Bulbasaur',
		types: [{ name: 'ghost' }, { name: 'women' }],
	},
];

function App() {
	let [page, setPage] = useState(0);
	const [pokemons, setPokemons] = useState<PokemonData[] | []>([]);

	async function getPokemons() {
		try {
			const { data } = await api.allPokemons(page);

			data.results.forEach(async (item) => {
				const numberReplace = item.url
					.replace('https://pokeapi.co/api/v2/pokemon/', '')
					.replace('/', '');

				const result = await api.detailPokemon(Number(numberReplace));
				setPokemons((oldState) => [...oldState, result]);
			});
		} catch (error: any) {
			return toast.error(error.message);
		}
	}

	useEffect(() => {
		Aos.init();

		getPokemons();
	}, []);

	const handleFetchMore = () => {
		// setLoadingMore(true);
		setPage((page += 10));

		getPokemons();
	};

	return (
		<>
			<GlobalLayout />
			<Header />
			<Main>
				{pokemons && <List data={pokemons} />}
				<button onClick={handleFetchMore}>Load more</button>
			</Main>

			<Footer />
		</>
	);
}

export default App;
