import { FC, useMemo, useState, useCallback } from 'react';
import {
  FlatList,
  StyleSheet,
  View,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {
  CommonActions,
  ExtendedTheme,
  RouteProp,
  useNavigation,
  useRoute,
  useTheme,
} from '@react-navigation/native';
import RNText from 'components/text';
import { RNTextEnum } from '../../../designLib/types/typography';
import { useQuery } from '@apollo/client';
import { GET_ALL_GENERATIONS } from 'graphql/queries';
import { PokeDexGeneration } from 'types/graphql';
import RNButton from 'components/button';
import {
  OnboardingParamList,
  OnboardingScreens,
  RootParamList,
  RootParamScreens,
} from 'types/nav';
import { useMainAppStore } from 'store/main';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// Final Onboarding Screen (2/2)
// CTA -> navigates to BottomTabNavigator ( Pokedex initial Screen )
// Trainer Created in Main Store
// currentTrainer set in Main Store
const ChooseTrainerRegionScreen: FC = () => {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  const { data } = useQuery(GET_ALL_GENERATIONS);
  const [selectedGen, setSelectedGen] = useState<string | null>(null);
  const navigation = useNavigation<NativeStackNavigationProp<RootParamList>>();
  const route =
    useRoute<
      RouteProp<
        OnboardingParamList,
        OnboardingScreens.ChooseTrainerRegionScreen
      >
    >();
  const { createTrainer, setCurrentTrainer } = useMainAppStore();

  const handleGenerationSelect = useCallback((generationName: string) => {
    setSelectedGen(generationName === selectedGen ? null : generationName);
  }, [selectedGen]);

  const onSubmitHandler = useCallback(() => {
    if (selectedGen && route.params.name) {
      const newTrainer = {
        name: route.params.name,
        region: selectedGen,
        createdAt: new Date().toISOString(),
      };

      const currentTrainer = {
        ...newTrainer,
        id: Date.now().toString(),
        favoritePokemons: [],
      };

      createTrainer(newTrainer);
      setCurrentTrainer(currentTrainer);

      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: RootParamScreens.AuthenticatedStackNavigator }],
        }),
      );
    } else {
      Alert.alert('Whoops', 'Ensure the Name and Generation are set/selected');
    }
  }, [selectedGen]);

  // another cool renderItem in a callback
  // would create reusable component but only used once
  const renderGenerationItem = useCallback(({ item }: { item: PokeDexGeneration }) => {
    const isSelected: boolean = item.name === selectedGen;
    return (
      <TouchableOpacity
        onPress={() => handleGenerationSelect(item.name)}
        style={styles.cellWrapper}
      >
        <View
          style={[
            styles.cellContainer,
            isSelected && {
              borderColor: theme.colors.primary,
              borderWidth: 2,
            },
          ]}
        >
          <RNText
            customStyles={
              isSelected ? { color: theme.colors.primary } : undefined
            }
            type={RNTextEnum.p1}
          >
            Title: {item.name}
          </RNText>
          <RNText
            customStyles={
              isSelected ? { color: theme.colors.primary } : undefined
            }
            type={RNTextEnum.p1}
          >
            Total: {item.pokemon_species.aggregate.count}
          </RNText>
        </View>
      </TouchableOpacity>
    );
  }, [selectedGen]);

  // theoretical performance optimization
  const keyExtractor = useCallback((item: PokeDexGeneration) => item.name, []);

  return (
    <View style={styles.container}>
      <RNText type={RNTextEnum.h2} customStyles={styles.font}>
        Select Your PokeDex Gen
      </RNText>
      <FlatList<PokeDexGeneration>
        numColumns={2}
        data={data?.generations ?? []}
        extraData={selectedGen}
        keyExtractor={keyExtractor}
        renderItem={renderGenerationItem}
      />
      <RNButton
        style={styles.btn}
        disabled={!selectedGen}
        title={'Start Catching!'}
        onPress={onSubmitHandler}
      />
    </View>
  );
};

export default ChooseTrainerRegionScreen;

const createStyles = ({ layout, colors }: ExtendedTheme) => {
  return StyleSheet.create({
    container: {
      backgroundColor: colors.background,
      marginHorizontal: layout.scaledX.medium,
    },
    cellWrapper: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    cellContainer: {
      flex: 1,
      borderColor: colors.border,
      borderWidth: 1,
      borderRadius: layout.scaledX.small,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: layout.scaledX.xSmall,
      paddingVertical: layout.scaledY.xSmall,
      marginHorizontal: layout.scaledX.xSmall,
      marginVertical: layout.scaledY.xSmall,
    },
    selected: {
      borderColor: colors.primary,
    },
    font: {
      marginVertical: layout.scaledY.xSmall,
    },
    btn: {
      marginVertical: layout.scaledY.medium,
    },
  });
};
