import { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootStackNavigator from '@navigation/navigators/root';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationParamList, NavigationScreens } from 'types/nav';
import { LightTheme } from 'contsants/theme';

const NavigationStack = createNativeStackNavigator<NavigationParamList>();

const Navigation: FC = () => {
  console.log('LightTheme: ', LightTheme);
  // impliment dark mode with theme toggle
  return (
    <NavigationContainer theme={LightTheme}>
      <NavigationStack.Navigator
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
