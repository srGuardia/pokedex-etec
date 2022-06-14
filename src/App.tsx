import { useEffect, useState } from 'react';
import Aos from 'aos';
import { toast } from 'react-toastify';

import { Footer } from './shared/components/Footer';
import { Main } from './shared/components/Main';
import { GlobalLayout } from './shared/global/layout';
import { Header } from './shared/components/Header';
import { List } from './shared/components/List';
import api from './services/api';
import { PokemonData } from './shared/@types/pokemon';
import { ThemeProvider } from 'styled-components';
import { themes } from './shared/global/themes';
import { getTheme, setLocalTheme } from './utils/functions';
import { ThemeName } from './shared/@types/theme';

function App() {
  let [page, setPage] = useState(0);
  const [pokemons, setPokemons] = useState<PokemonData[] | []>([]);
  const [theme, setTheme] = useState(themes['light']);
  const [themeName, setThemeName] = useState(ThemeName.light);

  const getPokemons = async () => {
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
  };

  useEffect(() => {
    Aos.init();

    async function themeColor() {
      const response = await getTheme();

      setTheme(themes[response]);
      setThemeName(ThemeName[response]);
    }

    themeColor();

    getPokemons();
  }, []);

  const handleFetchMore = () => {
    setPage((page += 10));

    getPokemons();

    toast.success('Success more pokemons');
  };

  const handleTheme = (value: ThemeName) => {
    setTheme(themes[value]);
    setThemeName(value);
    setLocalTheme(value);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalLayout />
      <Header
        handleFetch={handleFetchMore}
        themeName={themeName}
        handleTheme={handleTheme}
      />
      <Main>{pokemons && <List data={pokemons} />}</Main>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
