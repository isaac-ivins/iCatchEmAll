import { UnauthenticatedParamList, UnauthenticatedScreens } from 'types/nav';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from '@screens/unauthenticated/welcome';

const UnauthenticatedNavigationStack =
  createNativeStackNavigator<UnauthenticatedParamList>();

const UnauthenticatedStackNavigator = () => {
  return (
    <UnauthenticatedNavigationStack.Navigator
      initialRouteName={UnauthenticatedScreens.WelcomeScreen}
    >
      <UnauthenticatedNavigationStack.Screen
        name={UnauthenticatedScreens.WelcomeScreen}
        component={WelcomeScreen}
      />
    </UnauthenticatedNavigationStack.Navigator>
  );
};

export default UnauthenticatedStackNavigator;
