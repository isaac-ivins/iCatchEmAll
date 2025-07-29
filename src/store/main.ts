import { create } from 'zustand';
import { TrainerType, TrainerWithFavorites } from '../types/trainer';
import { MainAppStore } from '../types/store';

export const useMainAppStore = create<MainAppStore>((set) => ({
  trainers: [],
  currentTrainer: null,
  setCurrentTrainer: (trainer: TrainerWithFavorites | null) => {
    set({ currentTrainer: trainer });
  },
  createTrainer: (trainerData: TrainerType) => {
    const newTrainer: TrainerWithFavorites = {
      ...trainerData,
      id: Date.now().toString(),
      favoritePokemonIds: [],
    };
    set((state: MainAppStore) => ({
      trainers: [...state.trainers, newTrainer],
    }));
  },
  deleteTrainer: (id: string) => {
    set((state: MainAppStore) => ({
      trainers: state.trainers.filter((trainer) => trainer.id !== id),
      currentTrainer:
        state.currentTrainer?.id === id ? null : state.currentTrainer,
    }));
  },
  addToFavorites: (pokemonId: string) => {
    set((state: MainAppStore) => {
      if (!state.currentTrainer) return state;
      const updatedCurrentTrainer = {
        ...state.currentTrainer,
        favoritePokemonIds: [
          ...state.currentTrainer.favoritePokemonIds,
          pokemonId,
        ],
      };
      const updatedTrainers = state.trainers.map((trainer) =>
        trainer.id === state.currentTrainer!.id
          ? updatedCurrentTrainer
          : trainer,
      );
      return {
        trainers: updatedTrainers,
        currentTrainer: updatedCurrentTrainer,
      };
    });
  },
  removeFromFavorites: (pokemonId: string) => {
    set((state: MainAppStore) => {
      if (!state.currentTrainer) return state;
      const updatedCurrentTrainer = {
        ...state.currentTrainer,
        favoritePokemonIds: state.currentTrainer.favoritePokemonIds.filter(
          (id: string) => id !== pokemonId,
        ),
      };
      const updatedTrainers = state.trainers.map((trainer) =>
        trainer.id === state.currentTrainer!.id
          ? updatedCurrentTrainer
          : trainer,
      );
      return {
        trainers: updatedTrainers,
        currentTrainer: updatedCurrentTrainer,
      };
    });
  },
}));

// Custom hook for easy access to trainer store
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
