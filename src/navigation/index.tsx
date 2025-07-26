import { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootStackNavigator from '@navigation/navigators/root';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationParamList, NavigationScreens } from 'types/nav';
import { CustomTheme } from 'contsants/theme';

const NavigationStack = createNativeStackNavigator<NavigationParamList>();

const Navigation: FC = () => {
  console.log('CustomTheme: ', CustomTheme);
  return (
    <NavigationContainer theme={CustomTheme}>
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
