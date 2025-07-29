export interface PokeDexGeneration {
  name: string;
  region_id: number;
  pokemon_species: {
    aggregate: {
      count: number;
    };
  };
}
export interface PokeDexPokemonType {
  id: string;
  name: string;
}
