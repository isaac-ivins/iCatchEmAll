export interface TrainerType {
  name: string;
  region: string;
  createdAt: string;
}

export interface TrainerWithFavorites extends TrainerType {
  id: string;
  favoritePokemonIds: string[];
}
