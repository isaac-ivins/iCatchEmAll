import { useMainAppStore } from 'store/main';
import { PokeDexPokemonType } from 'types/graphql';

// This hook gets used to refference methods from the main store
// toggleFavorite is called on the PokemonDetailsModal ( for now )
export const useTrainers = () => {
  const store = useMainAppStore();
  return {
    ...store,
    toggleFavorite: (pokemon: PokeDexPokemonType) => {
      console.log('pokemon', pokemon);
      const isFavorited =
        store.currentTrainer?.favoritePokemons?.some(
          (pok) => pok.id === pokemon.id,
        ) || false;
      console.log('isFavorited:', isFavorited);
      if (isFavorited) {
        store.removeFromFavorites(pokemon);
      } else {
        store.addToFavorites(pokemon);
      }
    },
  };
};
