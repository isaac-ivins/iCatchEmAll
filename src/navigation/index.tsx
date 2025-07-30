import { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootStackNavigator from '@navigation/navigators/root';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationParamList, NavigationScreens } from 'types/nav';
import { LightTheme } from '@constants/theme';

const NavigationStack = createNativeStackNavigator<NavigationParamList>();

// place for token validation / refreshing
// App State Listeners usually go here too
// Can attach a DevToolsNavigator here as well
const Navigation: FC = () => {
  // to-do: impliment dark mode with theme toggle
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
