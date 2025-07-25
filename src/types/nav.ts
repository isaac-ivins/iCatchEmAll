export type NavigationParamList = {
  RootStackNavigator: undefined;
};

export enum NavigationScreens {
  RootStackNavigator = 'RootStackNavigator',
}

export type RootParamList = {
  UnauthenticatedStackNavigator: undefined;
  AuthenticatedStackNavigator: undefined;
  OnboardingStackNavigator: undefined;
};

export enum RootParamScreens {
  UnauthenticatedStackNavigator = 'UnauthenticatedStackNavigator',
}

export type UnauthenticatedParamList = {
  WelcomeScreen: undefined;
};

export enum UnauthenticatedScreens {
  WelcomeScreen = 'WelcomeScreen',
}
