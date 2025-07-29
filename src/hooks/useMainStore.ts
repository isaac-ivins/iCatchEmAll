import { useMainAppStore } from 'store/main';

export const useTrainers = () => {
  const store = useMainAppStore();
  return {
    ...store,
    isPokemonFavorited: (pokemonId: string) => {
      return (
        store.currentTrainer?.favoritePokemonIds.includes(pokemonId) || false
      );
    },
    toggleFavorite: (pokemonId: string) => {
      const isFavorited =
        store.currentTrainer?.favoritePokemonIds.includes(pokemonId) || false;
      if (isFavorited) {
        store.removeFromFavorites(pokemonId);
      } else {
        store.addToFavorites(pokemonId);
      }
    },
  };
};
