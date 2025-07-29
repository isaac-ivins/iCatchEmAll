export interface TrainerType {
  name: string;
  region: string;
  createdAt: string;
}
export interface TrainerWithFavorites extends TrainerType {
  id: string;
  favoritePokemonIds: string[];
}
export interface MainAppStore {
  trainers: TrainerWithFavorites[];
  currentTrainer: TrainerWithFavorites | null;
  setCurrentTrainer: (trainer: TrainerWithFavorites | null) => void;
  createTrainer: (trainer: TrainerType) => void;
  deleteTrainer: (id: string) => void;
  addToFavorites: (pokemonId: string) => void;
  removeFromFavorites: (pokemonId: string) => void;
}
