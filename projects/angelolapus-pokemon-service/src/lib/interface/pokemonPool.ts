

export interface Pokemon {
  name: string;
  url: string;
}

export interface PokemonPool {
  count: number;
  next?: any;
  previous: string;
  results: Pokemon[];
}
