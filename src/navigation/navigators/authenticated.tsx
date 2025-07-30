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

// Bottom Tab Navigator
// Sits alongside the PokemonDetialsModal
// If grown - these screens become nested Navigators as well
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

// Demonstrating some nested navigators
// Not using "Groups" because I've never used those and everything works without them
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
