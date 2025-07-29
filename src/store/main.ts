import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  TrainerType,
  TrainerWithFavorites,
  MainAppStore,
} from '../types/store';
import { PokeDexPokemonType } from 'types/graphql';

export const useMainAppStore = create<MainAppStore>()(
  persist(
    (set) => ({
      trainers: [],
      currentTrainer: null,
      setCurrentTrainer: (trainer: TrainerWithFavorites | null) => {
        set({ currentTrainer: trainer });
      },
      createTrainer: (trainerData: TrainerType) => {
        const newTrainer: TrainerWithFavorites = {
          ...trainerData,
          id: Date.now().toString(),
          favoritePokemons: [],
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
      addToFavorites: (pokemon: PokeDexPokemonType) => {
        set((state: MainAppStore) => {
          if (!state.currentTrainer) return state;
          const updatedCurrentTrainer = {
            ...state.currentTrainer,
            favoritePokemons: [
              pokemon,
              ...state.currentTrainer.favoritePokemons,
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
      removeFromFavorites: (pokemon: PokeDexPokemonType) => {
        set((state: MainAppStore) => {
          if (!state.currentTrainer) return state;
          const updatedCurrentTrainer = {
            ...state.currentTrainer,
            favoritePokemonIds: state.currentTrainer.favoritePokemons.filter(
              (poke: PokeDexPokemonType) => poke.id !== pokemon.id,
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
    }),
    {
      name: 'mainStore',
      storage: createJSONStorage(() => AsyncStorage), // (optional) by default, 'localStorage' is used
    },
  ),
);
