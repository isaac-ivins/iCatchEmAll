import {
  FC,
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useState,
} from 'react';
import { Alert, StyleSheet } from 'react-native';
import {
  ExtendedTheme,
  useNavigation,
  useTheme,
} from '@react-navigation/native';
import { useLazyQuery } from '@apollo/client';
import { GET_ALL_POKEMON_BY_GENERATION_NAME } from 'graphql/queries';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useMainAppStore } from 'store/main';
import { PokeDexPokemonType } from 'types/graphql';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import {
  AuthenticatedStackNavigatorParamList,
  AuthenticatedStackNavigatorScreens,
} from 'types/nav';
import PokemonList from 'components/pokemonList';

// Open Details Modal with CTA on Pokemon Tile
const PokedexScreen: FC = () => {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  const navigation =
    useNavigation<
      NativeStackNavigationProp<AuthenticatedStackNavigatorParamList>
    >();
  const currentTrainer = useMainAppStore((state) => state.currentTrainer);
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [
    runLazyGetAllPokemonByGenerationNameQuery,
    { data, loading, refetch, error },
  ] = useLazyQuery(GET_ALL_POKEMON_BY_GENERATION_NAME, {
    fetchPolicy: 'no-cache',
    notifyOnNetworkStatusChange: true,
  });

  // inital mount - run lazy query
  useLayoutEffect(() => {
    runLazyGetAllPokemonByGenerationNameQuery({
      variables: {
        genName: currentTrainer?.region,
      },
    });
  }, []);

  // lazy query error handling
  useEffect(() => {
    if (error) {
      Alert.alert(
        'Whoops!',
        'There was an issue with our network request. Try again Soon. :/',
      );
    }
  }, [error, loading]);

  // refresh control -> refetch
  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await refetch();
    setRefreshing(false);
  }, []);

  // Navigates to PokemonDetailsModal
  const onPressOpenDetailsModalHandler = (pokemon: PokeDexPokemonType) => {
    navigation.navigate(
      AuthenticatedStackNavigatorScreens.PokemonDetailsModal,
      {
        pokemonId: pokemon.id,
      },
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <PokemonList
        data={data?.pokemon ?? []}
        onPress={onPressOpenDetailsModalHandler}
        refreshing={refreshing}
        onRefresh={onRefresh}
      />
    </SafeAreaView>
  );
};

export default PokedexScreen;

const createStyles = ({ layout, colors }: ExtendedTheme) => {
  return StyleSheet.create({
    container: {
      backgroundColor: colors.background,
      marginHorizontal: layout.scaledX.medium,
    },
  });
};
