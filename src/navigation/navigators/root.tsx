import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UnauthenticatedStackNavigator from '@navigation/navigators/unauthenticated';
import { RootParamList } from 'types/nav';

const Stack = createNativeStackNavigator<RootParamList>();

const RootStack = () => {
  return (
    <Stack.Navigator>
      <UnauthenticatedStackNavigator />
    </Stack.Navigator>
  );
};

export default RootStack;
