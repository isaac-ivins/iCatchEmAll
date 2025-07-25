import { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootStack from './navigators/root';

const Navigation: FC = () => {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}

export default Navigation;