import { gql } from '@apollo/client';

// Query to get all Pokemon Generations
// Used within Onboarding - see PokeDexGeneration
export const GET_ALL_GENERATIONS = gql`
  query getAllGenerations {
    generations: generation {
      name
      pokemon_species: pokemonspecies_aggregate {
        aggregate {
          count
        }
      }
    }
  }
`;

// Query to get all Pokemon by Generation Name
// Used on Pokedex Screen - see PokeDexPokemonType
export const GET_ALL_POKEMON_BY_GENERATION_NAME = gql`
  query getAllPokemonByGenerationName($genName: String!) {
    pokemon: pokemonspecies(
      where: { generation: { name: { _eq: $genName } } }
      order_by: { id: asc }
    ) {
      name
      id
    }
  }
`;

// Query to get Pokemon Details by Pokemon ID
// Used on PokemonDetailsModal - see PokeDexPokemonType
export const GET_POKEMON_DETAILS_BY_POKEMON_ID = gql`
  query getPokemonDetailsByPokemonId($pokeId: Int!) {
    details: pokemon(where: { id: { _eq: $pokeId } }) {
      id
      name
      height
      is_default
      base_experience
      weight
    }
  }
`;
