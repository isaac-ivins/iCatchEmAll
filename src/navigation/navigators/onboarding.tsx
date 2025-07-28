import { OnboardingScreens, OnboardingParamList } from 'types/nav';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from '@screens/unauthenticated/welcome';
import { FC } from 'react';

const OnboardingNavigationStack =
  createNativeStackNavigator<OnboardingParamList>();

const OnboardingStackNavigator: FC = () => {
  return (
    <OnboardingNavigationStack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={OnboardingScreens.CreateTrainerNameScreen}
    >
      <OnboardingNavigationStack.Screen
        name={OnboardingScreens.CreateTrainerNameScreen}
        component={WelcomeScreen}
      />
      <OnboardingNavigationStack.Screen
        name={OnboardingScreens.ChooseTrainerRegionScreen}
        component={WelcomeScreen}
      />
    </OnboardingNavigationStack.Navigator>
  );
};

export default OnboardingStackNavigator;
