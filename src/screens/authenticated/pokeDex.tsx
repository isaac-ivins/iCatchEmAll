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

// Initial Tab in BottomTabNavigator ( 1/3 )
// Displays Pokemon by Generation ( Region )
// Pokemon Details Modal is shown on Pokemon Tile CTA
// Pokemon List is refreshed on pull-to-refresh
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
    { data, refetch, error },
  ] = useLazyQuery(GET_ALL_POKEMON_BY_GENERATION_NAME, {
    fetchPolicy: 'no-cache',
    notifyOnNetworkStatusChange: true,
  });
  const pokemonData = useMemo(() => data?.pokemon ?? [], [data?.pokemon]);

  // initial mount - run lazy query
  useLayoutEffect(() => {
    if (currentTrainer?.region) {
      runLazyGetAllPokemonByGenerationNameQuery({
        variables: {
          genName: currentTrainer.region,
        },
      });
    }
  }, [currentTrainer?.region]);

  useEffect(() => {
    if (error) {
      Alert.alert(
        'Whoops!',
        'There was an issue with our network request. Try again Soon. :/',
      );
    }
  }, [error]);

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    try {
      await refetch();
    } catch {
      Alert.alert('Error', 'Failed to refresh Pokemon data');
    } finally {
      setRefreshing(false);
    }
  }, [refetch]);

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
        data={pokemonData}
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
