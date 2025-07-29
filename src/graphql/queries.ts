import { gql } from "@apollo/client";

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

export const GET_ALL_POKEMON_BY_GENERATION = gql`
  query getAllGenerations($genName: String!) {
    pokemon: pokemonspecies(
        where: {
            generation: {
                name: {
                    _eq: $genName
                }
            }
        }
        order_by: {
            id: asc
        }
    ) {
        name
        id
    }
  }
`;

export const GET_DETAILS_BY_POKEMON_ID = gql`
  query getPokemonDetails($pokeId: Int!) {
    details: pokemon(where:  {
        id:  {
            _eq: $pokeId
        }
    }) {
        id
        name
        height
        is_default
        base_experience
        weight
    }
  }
`;