import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UnauthenticatedStackNavigator from '@navigation/navigators/unauthenticated';
import { RootParamList, RootParamScreens } from 'types/nav';

const RootNavigationStack = createNativeStackNavigator<RootParamList>();

const RootStackNavigator = () => {
  return (
    <RootNavigationStack.Navigator>
      <RootNavigationStack.Screen
        name={RootParamScreens.UnauthenticatedStackNavigator}
        component={UnauthenticatedStackNavigator}
      />
    </RootNavigationStack.Navigator>
  );
};

export default RootStackNavigator;
