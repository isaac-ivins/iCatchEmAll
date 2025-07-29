import { FC, useEffect, useLayoutEffect, useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
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

// Close Details Modal with X
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
  const [runLazyGetPokemonDetailsByPokemonIdQuery, { data, loading, error }] =
    useLazyQuery(GET_POKEMON_DETAILS_BY_POKEMON_ID, {
      fetchPolicy: 'no-cache',
      notifyOnNetworkStatusChange: true,
    });
  const { pokemonId } = route.params;
  const isCaught = currentTrainer?.favoritePokemons?.some(
    (pok) => pok.id === pokemonId,
  );

  // query for more pokemon details
  // display more info
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
      console.log('error: ', error);
    }
  }, [error, loading]);

  const onPressToggleFavoriteHandler = () => {
    console.log('data?.details[0].name: ', data?.details[0].name);
    toggleFavorite({ name: data?.details[0].name, id: pokemonId });
  };

  return (
    <View style={styles.container}>
      <RNText type={RNTextEnum.h2} customStyles={styles.font}>
        Name: {data?.details[0].name}
      </RNText>
      <RNText type={RNTextEnum.h3} customStyles={styles.font}>
        Height: {data?.details[0]?.height} m
      </RNText>
      <RNText type={RNTextEnum.h3} customStyles={styles.font}>
        Weidht: {data?.details[0]?.weight} kg
      </RNText>
      <RNText type={RNTextEnum.h3} customStyles={styles.font}>
        Base Experience: {data?.details[0]?.base_experience}
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
