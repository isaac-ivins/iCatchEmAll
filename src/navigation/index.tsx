import { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import UnauthenticatedStackNavigator from '@navigation/navigators/unauthenticated';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationParamList, NavigationScreens } from 'types/nav';
import { CustomTheme } from 'contsants/theme';

const NavigationStack = createNativeStackNavigator<NavigationParamList>();

const Navigation: FC = () => {
  return (
    <NavigationContainer theme={CustomTheme}>
      <NavigationStack.Screen
        name={NavigationScreens.RootStackNavigator}
        component={UnauthenticatedStackNavigator}
       />
    </NavigationContainer>
  );
};

export default Navigation;
