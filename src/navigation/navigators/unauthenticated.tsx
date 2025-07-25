import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from '@screens/unauthenticated/welcome';
import { UnauthenticatedParamList, UnauthenticatedScreens } from 'types/nav';

const Stack = createNativeStackNavigator<UnauthenticatedParamList>();

const UnauthenticatedStackNavigator = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name={UnauthenticatedScreens.WelcomeScreen} component={WelcomeScreen} />
      </Stack.Navigator>
    );
  }
  
export default UnauthenticatedStackNavigator;