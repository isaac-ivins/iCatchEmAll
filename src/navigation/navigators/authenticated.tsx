import { FC } from 'react';
import {
  AuthenticatedStackNavigatorScreens,
  AuthenticatedStackNavigatorParamList,
  AuthenticatedBottomTabNavigatorParamList,
  AuthenticatedBottomTabNavigatorScreens,
} from 'types/nav';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PokedexScreen from '@screens/authenticated/pokeDex';
import CapturedPokemonScreen from '@screens/authenticated/capturedPokemon';
import TrainerDetailsScreen from '@screens/authenticated/trainerDetails';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PokemonDetailsModal from '@screens/authenticated/pokemonDetails';

const AuthenticatedBottomTabs =
  createBottomTabNavigator<AuthenticatedBottomTabNavigatorParamList>();
const AuthenticatedNavigationStack =
  createNativeStackNavigator<AuthenticatedStackNavigatorParamList>();

const AuthenticatedBottomTabNavigator: FC = () => {
  return (
    <AuthenticatedBottomTabs.Navigator
      initialRouteName={AuthenticatedBottomTabNavigatorScreens.PokedexScreen}
    >
      <AuthenticatedBottomTabs.Screen
        name={AuthenticatedBottomTabNavigatorScreens.PokedexScreen}
        component={PokedexScreen}
      />
      <AuthenticatedBottomTabs.Screen
        name={AuthenticatedBottomTabNavigatorScreens.CapturedPokemonScreen}
        component={CapturedPokemonScreen}
      />
      <AuthenticatedBottomTabs.Screen
        name={AuthenticatedBottomTabNavigatorScreens.TrainerDetailsScreen}
        component={TrainerDetailsScreen}
      />
    </AuthenticatedBottomTabs.Navigator>
  );
};

const AuthenticatedStackNavigator: FC = () => {
  return (
    <AuthenticatedNavigationStack.Navigator>
      <AuthenticatedNavigationStack.Screen
        name={
          AuthenticatedStackNavigatorScreens.AuthenticatedBottomTabNavigator
        }
        component={AuthenticatedBottomTabNavigator}
        options={{ headerShown: false }}
      />
      <AuthenticatedNavigationStack.Screen
        name={AuthenticatedStackNavigatorScreens.PokemonDetailsModal}
        component={PokemonDetailsModal}
        options={{ presentation: 'modal' }}
      />
    </AuthenticatedNavigationStack.Navigator>
  );
};

export default AuthenticatedStackNavigator;
