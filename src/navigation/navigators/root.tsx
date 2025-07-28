import { FC } from 'react';
import { RootParamList, RootParamScreens } from 'types/nav';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UnauthenticatedStackNavigator from '@navigation/navigators/unauthenticated';
import OnboardingStackNavigator from '@navigation/navigators/onboarding';
import AuthenticatedNavigationStack from '@navigation/navigators/authenticated';

const RootNavigationStack = createNativeStackNavigator<RootParamList>();

const RootStackNavigator: FC = () => {
  // check if auth token exists ( aka "logged in" as Pokemon Trainer already )
  return (
    <RootNavigationStack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={RootParamScreens.UnauthenticatedStackNavigator}
    >
      <RootNavigationStack.Screen
        name={RootParamScreens.UnauthenticatedStackNavigator}
        component={UnauthenticatedStackNavigator}
      />
      <RootNavigationStack.Screen
        name={RootParamScreens.OnboardingStackNavigator}
        component={OnboardingStackNavigator}
      />
      <RootNavigationStack.Screen
        name={RootParamScreens.AuthenticatedStackNavigator}
        component={AuthenticatedNavigationStack}
      />
    </RootNavigationStack.Navigator>
  );
};

export default RootStackNavigator;
