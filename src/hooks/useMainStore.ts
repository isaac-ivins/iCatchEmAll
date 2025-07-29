import { useMainAppStore } from 'store/main';
import { PokeDexPokemonType } from 'types/graphql';

export const useTrainers = () => {
  const store = useMainAppStore();
  return {
    ...store,
    toggleFavorite: (pokemon: PokeDexPokemonType) => {
      const isFavorited =
        store.currentTrainer?.favoritePokemons?.some(
          (pok) => pok.id === pokemon.id,
        ) || false;
      if (isFavorited) {
        store.removeFromFavorites(pokemon);
      } else {
        store.addToFavorites(pokemon);
      }
    },
  };
};
