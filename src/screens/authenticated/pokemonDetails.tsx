import { FC, useEffect, useLayoutEffect, useMemo, useCallback } from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import {
  ExtendedTheme,
  RouteProp,
  useRoute,
  useTheme,
} from '@react-navigation/native';
import RNText from 'components/text';
import { RNTextEnum } from '../../../designLib/types/typography';
import {
  AuthenticatedStackNavigatorParamList,
  AuthenticatedStackNavigatorScreens,
} from 'types/nav';
import { useLazyQuery } from '@apollo/client';
import { GET_POKEMON_DETAILS_BY_POKEMON_ID } from 'graphql/queries';
import RNButton, { ButtonType } from 'components/button';
import { useTrainers } from '@hooks/useMainStore';
import { useMainAppStore } from 'store/main';

// Modal shown within AuthenticatedStackNavigator - Bottom Tabs
// Only place a user can "Catch" a Pokemon
// Does not close out automatically - requires pulldown swipe at the moment
// Todo: add more info / update query
const PokemonDetailsModal: FC = () => {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  const currentTrainer = useMainAppStore((state) => state.currentTrainer);
  const { toggleFavorite } = useTrainers();
  const route =
    useRoute<
      RouteProp<
        AuthenticatedStackNavigatorParamList,
        AuthenticatedStackNavigatorScreens.PokemonDetailsModal
      >
    >();
  const [runLazyGetPokemonDetailsByPokemonIdQuery, { data, error }] =
    useLazyQuery(GET_POKEMON_DETAILS_BY_POKEMON_ID, {
      fetchPolicy: 'no-cache',
      notifyOnNetworkStatusChange: true,
    });
  const { pokemonId } = route.params;
  const isCaught = useMemo(() => 
    currentTrainer?.favoritePokemons?.some((pok) => pok.id === pokemonId) ?? false,
    [currentTrainer?.favoritePokemons, pokemonId]
  );
  const pokemonDetails = useMemo(() => data?.details?.[0], [data?.details]);

  // run lazy query on mount
  useLayoutEffect(() => {
    runLazyGetPokemonDetailsByPokemonIdQuery({
      variables: {
        pokeId: pokemonId,
      },
    });
  }, []);

  // lazy query error handling
  useEffect(() => {
    if (error) {
      Alert.alert('Error', 'Failed to fetch pokemon details');
    }
  }, [error]);

  const onPressToggleFavoriteHandler = useCallback(() => {
    if (pokemonDetails?.name) {
      toggleFavorite({ name: pokemonDetails.name, id: pokemonId });
    }
  }, []);

  return (
    <View style={styles.container}>
      <RNText type={RNTextEnum.h2} customStyles={styles.font}>
        Name: {pokemonDetails?.name}
      </RNText>
      <RNText type={RNTextEnum.h3} customStyles={styles.font}>
        Height: {pokemonDetails?.height} m
      </RNText>
      <RNText type={RNTextEnum.h3} customStyles={styles.font}>
        Weight: {pokemonDetails?.weight} kg
      </RNText>
      <RNText type={RNTextEnum.h3} customStyles={styles.font}>
        Base Experience: {pokemonDetails?.base_experience}
      </RNText>
      <RNButton
        type={isCaught ? ButtonType.Secondary : ButtonType.Primary}
        title={isCaught ? 'Release' : 'Catch!'}
        onPress={onPressToggleFavoriteHandler}
      />
    </View>
  );
};

export default PokemonDetailsModal;

const createStyles = ({ layout, colors }: ExtendedTheme) => {
  return StyleSheet.create({
    container: {
      backgroundColor: colors.background,
      marginHorizontal: layout.scaledX.medium,
    },
    font: {
      marginVertical: layout.scaledY.medium,
    },
  });
};
