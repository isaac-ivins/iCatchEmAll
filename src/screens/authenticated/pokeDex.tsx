import { FC, useCallback, useEffect, useLayoutEffect, useMemo, useState } from 'react';
import { FlatList, RefreshControl, StyleSheet, TouchableOpacity, View } from 'react-native';
import { ExtendedTheme, useNavigation, useTheme } from '@react-navigation/native';
import RNText from 'components/text';
import { RNTextEnum } from '../../../designLib/types/typography';
import { useLazyQuery } from '@apollo/client';
import { GET_ALL_POKEMON_BY_GENERATION_NAME } from 'graphql/queries';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useMainAppStore } from 'store/main';
import { PokeDexPokemonType } from 'types/graphql';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AuthenticatedStackNavigatorParamList, AuthenticatedStackNavigatorScreens } from 'types/nav';
import { capFirstLetter } from 'helpers';

// Open Details Modal with CTA on Pokemon Tile
const PokedexScreen: FC = () => {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  const navigation = useNavigation<NativeStackNavigationProp<AuthenticatedStackNavigatorParamList>>();
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
        genName: currentTrainer?.region
      }
    })
  }, [])

  // lazy query error handling
  useEffect(() => {
    if (error) {
      console.log('error: ', error)
    }
  }, [error, loading])

  // refresh control -> refetch w delay for visual aid
  const onRefresh = useCallback(async () => {
    setRefreshing(true)
    await refetch();
    setRefreshing(false)
  }, [])

  // handle Open Details Modal
  const onPressOpenDetailsModalHandler = (pokemonId: string) => {
    navigation.navigate(AuthenticatedStackNavigatorScreens.PokemonDetailsModal, {
      pokemonId: pokemonId
    });
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList<PokeDexPokemonType>
        data={data?.pokemon ?? []}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
        extraData={currentTrainer?.favoritePokemonIds}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => onPressOpenDetailsModalHandler(item.id)}
              style={styles.cellWrapper}
            >
              <View style={styles.cellContainer}>
                <RNText
                  type={RNTextEnum.p1}
                >
                  {capFirstLetter(item.name)}
                </RNText>
              </View>
            </TouchableOpacity>
          )
        }}
      />
      <RNText type={RNTextEnum.h1} customStyles={styles.font}>
        PokeDex Screen
      </RNText>
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
    font: {
      marginVertical: layout.scaledY.medium,
    },
    cellWrapper: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    cellContainer: {
      borderWidth: 1,
      borderColor: colors.border,
      marginVertical: layout.scaledY.xxSmall,
      paddingHorizontal: layout.scaledX.medium,
      paddingVertical: layout.scaledY.xSmall,
      borderRadius: layout.scaledX.xSmall,
    },
  });
};
