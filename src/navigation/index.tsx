import { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootStackNavigator from '@navigation/navigators/root';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationParamList, NavigationScreens } from 'types/nav';
import { LightTheme } from '@constants/theme';

const NavigationStack = createNativeStackNavigator<NavigationParamList>();

const Navigation: FC = () => {
  // impliment dark mode with theme toggle
  console.log('LightTheme: ', LightTheme);
  return (
    <NavigationContainer theme={LightTheme}>
      <NavigationStack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName={NavigationScreens.RootStackNavigator}
      >
        <NavigationStack.Screen
          name={NavigationScreens.RootStackNavigator}
          component={RootStackNavigator}
        />
      </NavigationStack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
