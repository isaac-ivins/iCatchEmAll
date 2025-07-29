import { FC } from 'react';
import { OnboardingScreens, OnboardingParamList } from 'types/nav';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CreateTrainerNameScreen from '@screens/onboarding/createTrainerName';
import ChooseTrainerRegionScreen from '@screens/onboarding/chooseRegion';

const OnboardingNavigationStack =
  createNativeStackNavigator<OnboardingParamList>();

const OnboardingStackNavigator: FC = () => {
  return (
    <OnboardingNavigationStack.Navigator
      initialRouteName={OnboardingScreens.CreateTrainerNameScreen}
    >
      <OnboardingNavigationStack.Screen
        name={OnboardingScreens.CreateTrainerNameScreen}
        component={CreateTrainerNameScreen}
      />
      <OnboardingNavigationStack.Screen
        name={OnboardingScreens.ChooseTrainerRegionScreen}
        component={ChooseTrainerRegionScreen}
      />
    </OnboardingNavigationStack.Navigator>
  );
};

export default OnboardingStackNavigator;
