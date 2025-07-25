import { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootStackNavigator from '@navigation/navigators/root';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationParamList, NavigationScreens } from 'types/nav';

const NavigationStack = createNativeStackNavigator<NavigationParamList>();

const Navigation: FC = () => {
  return (
    <NavigationContainer>
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
