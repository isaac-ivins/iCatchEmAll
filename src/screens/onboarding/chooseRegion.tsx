import { FC, useMemo, useState } from 'react';
import { FlatList, StyleSheet, View, TouchableOpacity, Alert } from 'react-native';
import { ExtendedTheme, RouteProp, useNavigation, useRoute, useTheme } from '@react-navigation/native';
import RNText from 'components/text';
import { RNTextEnum } from '../../../designLib/types/typography';
import { useQuery } from '@apollo/client';
import { GET_ALL_GENERATIONS } from 'graphql/queries';
import { PokeDexGeneration } from 'types/graphql';
import RNButton from 'components/button';
import { OnboardingParamList, OnboardingScreens, RootParamList, RootParamScreens } from 'types/nav';
import { useMainAppStore } from '../../store/main';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// "Go back" -> ChooseTrainerName
// "Complete" CTA -> AuthStackNav
const ChooseTrainerRegionScreen: FC = () => {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  const { data } = useQuery(GET_ALL_GENERATIONS);
  const [selectedGen, setSelectedGen] = useState<string | null>(null);
  const navigation = useNavigation<NativeStackNavigationProp<RootParamList>>();
  const route = useRoute<RouteProp<OnboardingParamList, OnboardingScreens.ChooseTrainerRegionScreen>>();
  const { createTrainer, setCurrentTrainer } = useMainAppStore();

  const onSubmitHandler = () => {
    
    if (selectedGen && route.params.name) {
      // Create the trainer
      const newTrainer = {
        name: route.params.name,
        region: selectedGen,
        createdAt: new Date().toISOString(),
      };
      
      createTrainer(newTrainer);
      
      // Set as current trainer (this will trigger navigation to authenticated stack)
      const currentTrainer = {
        ...newTrainer,
        id: Date.now().toString(),
        favoritePokemonIds: [],
      };

      setCurrentTrainer(currentTrainer);

      navigation.reset({
        index: 0,
        routes: [{ name: RootParamScreens.AuthenticatedStackNavigator }],
      });
    } else {
      Alert.alert('Whoops', 'Ensure the name and generation are set/selected')
    }
  }

  return (
    <View style={styles.container}>
      <RNText type={RNTextEnum.h2} customStyles={styles.font}>
        Select Your PokeDex Gen
      </RNText>
      <FlatList<PokeDexGeneration>
        numColumns={2}
        data={data?.generations ?? []}
        extraData={selectedGen}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => {
          // selectedGen
          const isSelected:boolean = item.name === selectedGen
          return (
            <TouchableOpacity onPress={() => setSelectedGen(item.name === selectedGen ? null : item.name)} style={styles.cellWrapper}>
              <View style={[
                styles.cellContainer,
                isSelected && { borderColor: theme.colors.primary, borderWidth: 2 }
              ]}>
                <RNText 
                  customStyles={isSelected ? { color: theme.colors.primary } : undefined} 
                  type={RNTextEnum.p1}
                >
                  Title: {item.name}
                </RNText>
                <RNText 
                  customStyles={isSelected ? { color: theme.colors.primary } : undefined} 
                  type={RNTextEnum.p1}
                >
                  Total: {item.pokemon_species.aggregate.count}
                </RNText>
              </View>
            </TouchableOpacity>
          );
        }}
      />
      <RNButton
        style={styles.btn}
        disabled={!selectedGen}
        title={'Pick Generation'}
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
      marginHorizontal: layout.scaledX.medium
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
      color: colors.text,
      marginVertical: layout.scaledY.xSmall,
    },
    btn: {
      marginVertical: layout.scaledY.medium
    }
  });
};
