// Type Checking the navigator is borderline mandatory if you're not using file based routing
// - I am not using file based routing

export type NavigationParamList = {
  [NavigationScreens.RootStackNavigator]: undefined;
};

export enum NavigationScreens {
  RootStackNavigator = 'RootStackNavigator',
}

// --------------------------------------------

export type RootParamList = {
  [RootParamScreens.UnauthenticatedStackNavigator]: undefined;
  [RootParamScreens.OnboardingStackNavigator]: undefined;
  [RootParamScreens.AuthenticatedStackNavigator]: undefined;
};

export enum RootParamScreens {
  UnauthenticatedStackNavigator = 'UnauthenticatedStackNavigator',
  OnboardingStackNavigator = 'OnboardingStackNavigator',
  AuthenticatedStackNavigator = 'AuthenticatedStackNavigator',
}

// --------------------------------------------

export type UnauthenticatedParamList = {
  [UnauthenticatedScreens.WelcomeScreen]: undefined;
};

export enum UnauthenticatedScreens {
  WelcomeScreen = 'WelcomeScreen',
}

// --------------------------------------------

export type OnboardingParamList = {
  [OnboardingScreens.CreateTrainerNameScreen]: undefined;
  [OnboardingScreens.ChooseTrainerRegionScreen]: { name: string };
};

export enum OnboardingScreens {
  CreateTrainerNameScreen = 'CreateTrainerNameScreen',
  ChooseTrainerRegionScreen = 'ChooseTrainerRegionScreen',
}

// --------------------------------------------

export type AuthenticatedStackNavigatorParamList = {
  AuthenticatedBottomTabNavigator: undefined;
  PokemonDetailsModal: {
    pokemonId: string;
  };
};

export enum AuthenticatedStackNavigatorScreens {
  AuthenticatedBottomTabNavigator = 'AuthenticatedBottomTabNavigator',
  PokemonDetailsModal = 'PokemonDetailsModal',
}

export type AuthenticatedBottomTabNavigatorParamList = {
  TrainerDetailsScreen: undefined;
  PokedexScreen: undefined;
  CapturedPokemonScreen: undefined;
};

export enum AuthenticatedBottomTabNavigatorScreens {
  TrainerDetailsScreen = 'TrainerDetailsScreen',
  PokedexScreen = 'PokedexScreen',
  CapturedPokemonScreen = 'CapturedPokemonScreen',
}
