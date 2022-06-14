type PokemonTypes = {
  type: {
    name: string;
  };
};

type PokemonStats = {
  base_stat: number;
  stat: {
    name: string;
  };
};

export type PokemonData = {
  id: number;
  name: string;
  sprites: {
    front_default: string;
    other: {
      dream_world: {
        front_default: string;
      };
    };
  };
  types: PokemonTypes[];
  stats: PokemonStats[];
};
