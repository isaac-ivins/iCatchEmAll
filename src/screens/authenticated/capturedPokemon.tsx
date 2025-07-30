import { FC, useMemo, useCallback } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import {
  ExtendedTheme,
  useNavigation,
  useTheme,
} from '@react-navigation/native';
import { useMainAppStore } from 'store/main';
import {
  AuthenticatedStackNavigatorParamList,
  AuthenticatedStackNavigatorScreens,
} from 'types/nav';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import PokemonList from 'components/pokemonList';
import { PokeDexPokemonType } from 'types/graphql';

// Second Tab in BottomTabNavigator ( 2/3 )
// Displays Pokemon that have been "Caught" by the Trainer
// Pokemon Details Modal is shown on Pokemon Tile CTA
const CapturedPokemonScreen: FC = () => {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  const currentTrainer = useMainAppStore((state) => state.currentTrainer);
  const navigation =
    useNavigation<
      NativeStackNavigationProp<AuthenticatedStackNavigatorParamList>
    >();
  const capturedPokemon = useMemo(() => 
    currentTrainer?.favoritePokemons ?? [], 
    [currentTrainer?.favoritePokemons]
  );

  const onPressOpenDetailsModalHandler = useCallback((pokemon: PokeDexPokemonType) => {
    navigation.navigate(
      AuthenticatedStackNavigatorScreens.PokemonDetailsModal,
      {
        pokemonId: pokemon.id,
      },
    );
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <PokemonList
        data={capturedPokemon}
        onPress={onPressOpenDetailsModalHandler}
      />
    </SafeAreaView>
  );
};

export default CapturedPokemonScreen;

const createStyles = ({ layout, colors }: ExtendedTheme) => {
  return StyleSheet.create({
    container: {
      backgroundColor: colors.background,
      marginHorizontal: layout.scaledX.medium,
    },
  });
};
