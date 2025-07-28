export type NavigationParamList = {
  RootStackNavigator: undefined;
};

export enum NavigationScreens {
  RootStackNavigator = 'RootStackNavigator',
}

// --------------------------------------------

export type RootParamList = {
  UnauthenticatedStackNavigator: undefined;
  OnboardingStackNavigator: undefined;
  AuthenticatedStackNavigator: undefined;
};

export enum RootParamScreens {
  UnauthenticatedStackNavigator = 'UnauthenticatedStackNavigator',
  OnboardingStackNavigator = 'OnboardingStackNavigator',
  AuthenticatedStackNavigator = 'AuthenticatedStackNavigator',
}

// --------------------------------------------

export type UnauthenticatedParamList = {
  WelcomeScreen: undefined;
};

export enum UnauthenticatedScreens {
  WelcomeScreen = 'WelcomeScreen',
}

// --------------------------------------------

export type OnboardingParamList = {
  CreateTrainerNameScreen: undefined;
  ChooseTrainerRegionScreen: undefined;
};

export enum OnboardingScreens {
  CreateTrainerNameScreen = 'CreateTrainerNameScreen',
  ChooseTrainerRegionScreen = 'ChooseTrainerRegionScreen',
}

// --------------------------------------------

export type AuthenticatedStackNavigatorParamList = {
  AuthenticatedBottomTabNavigator: undefined;
  PokemonDetailsModal: undefined;
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
