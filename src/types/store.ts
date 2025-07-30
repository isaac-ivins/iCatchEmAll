import { PokeDexPokemonType } from './graphql';
export interface TrainerType {
  name: string;
  region: string;
  createdAt: string;
}
export interface TrainerWithFavorites extends TrainerType {
  id: string;
  favoritePokemons: PokeDexPokemonType[];
}
export interface MainAppStore {
  trainers: TrainerWithFavorites[];
  currentTrainer: TrainerWithFavorites | null;
  setCurrentTrainer: (trainer: TrainerWithFavorites | null) => void;
  createTrainer: (trainer: TrainerType) => void;
  deleteTrainer: (id: string) => void;
  addToFavorites: (pokemon: PokeDexPokemonType) => void;
  removeFromFavorites: (pokemon: PokeDexPokemonType) => void;
}
