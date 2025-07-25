import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from '@screens/unauthenticated/welcome';
import { UnauthenticatedParamList, UnauthenticatedScreens } from 'types/nav';

const UnauthenticatedNavigationStack = createNativeStackNavigator<UnauthenticatedParamList>();

const UnauthenticatedStackNavigator = () => {
  return (
    <UnauthenticatedNavigationStack.Navigator>
      <UnauthenticatedNavigationStack.Screen
        name={UnauthenticatedScreens.WelcomeScreen}
        component={WelcomeScreen}
      />
    </UnauthenticatedNavigationStack.Navigator>
  );
};

export default UnauthenticatedStackNavigator; 
