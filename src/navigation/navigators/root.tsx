import { FC } from 'react';
import { RootParamList, RootParamScreens } from 'types/nav';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UnauthenticatedStackNavigator from '@navigation/navigators/unauthenticated';
import OnboardingStackNavigator from '@navigation/navigators/onboarding';
import AuthenticatedNavigationStack from '@navigation/navigators/authenticated';
import { useMainAppStore } from 'store/main';

const RootNavigationStack = createNativeStackNavigator<RootParamList>();

// Again not much going on here
// Dynamically setting the initial route based on the currentTrainer
// - persists through App Launch but not termination ( for now )
const RootStackNavigator: FC = () => {
  const currentTrainer = useMainAppStore((state) => state.currentTrainer);
  const isAuthenticated = !!currentTrainer;

  return (
    <RootNavigationStack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={
        isAuthenticated
          ? RootParamScreens.AuthenticatedStackNavigator
          : RootParamScreens.UnauthenticatedStackNavigator
      }
    >
      <RootNavigationStack.Screen
        name={RootParamScreens.UnauthenticatedStackNavigator}
        component={UnauthenticatedStackNavigator}
      />
      <RootNavigationStack.Screen
        name={RootParamScreens.AuthenticatedStackNavigator}
        component={AuthenticatedNavigationStack}
      />
      <RootNavigationStack.Screen
        name={RootParamScreens.OnboardingStackNavigator}
        component={OnboardingStackNavigator}
      />
    </RootNavigationStack.Navigator>
  );
};

export default RootStackNavigator;
