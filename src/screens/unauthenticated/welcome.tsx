import { FC, useMemo } from 'react';
import { FlatList, StyleSheet, TouchableOpacity, View } from 'react-native';
import {
  CommonActions,
  ExtendedTheme,
  useNavigation,
  useTheme,
} from '@react-navigation/native';
import { RNTextEnum } from '../../../designLib/types/typography';
import RNButton from 'components/button';
import RNText from 'components/text';
import { RootParamList, RootParamScreens } from 'types/nav';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useMainAppStore } from 'store/main';
import { TrainerWithFavorites } from 'types/store';
import { SafeAreaView } from 'react-native-safe-area-context';

// "Create account/trainer" CTA -> onboarding
const WelcomeScreen: FC = () => {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  const { setCurrentTrainer } = useMainAppStore();
  const trainers = useMainAppStore((state) => state.trainers);
  const navigation = useNavigation<NativeStackNavigationProp<RootParamList>>();

  // handle create trainer
  const onPressCreateTrainerHandler = () => {
    navigation.navigate(RootParamScreens.OnboardingStackNavigator);
  };

  // handle login w/ trainer
  const onPressLoginWithTrainerHandler = (trainer: TrainerWithFavorites) => {
    setCurrentTrainer(trainer);
    navigation.navigate(RootParamScreens.OnboardingStackNavigator);

    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: RootParamScreens.AuthenticatedStackNavigator }],
      }),
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <RNText
        type={RNTextEnum.h1}
        customStyles={[styles.centerText, styles.textVertMargin]}
      >
        iCatchEmAll
      </RNText>
      <RNText
        type={RNTextEnum.h3}
        customStyles={[styles.centerText, styles.textVertMargin]}
      >
        In this mobile-app users can create Pokemon Trainers, select what
        generation of Pokemon to &quot;catch&quot;, and try to catch them all!
      </RNText>
      <RNButton
        style={styles.btn}
        title={'Create Trainer'}
        onPress={onPressCreateTrainerHandler}
      />
      {trainers && (
        <View style={styles.existingContainer}>
          <RNText type={RNTextEnum.h2} customStyles={styles.textVertMargin}>
            Choose Existing Trainers:
          </RNText>
          <FlatList<TrainerWithFavorites>
            data={trainers}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity
                  onPress={() => onPressLoginWithTrainerHandler(item)}
                  style={styles.cellWrapper}
                >
                  <View style={styles.cellContainer}>
                    <RNText
                      type={RNTextEnum.p1}
                      customStyles={styles.centerText}
                    >
                      {item.name} - {item.region}
                    </RNText>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      )}
      <RNText type={RNTextEnum.h3} customStyles={styles.textVertMargin}>
        By: Isaac Ivins
      </RNText>
    </SafeAreaView>
  );
};

export default WelcomeScreen;

const createStyles = ({ layout, colors }: ExtendedTheme) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.background,
      marginHorizontal: layout.scaledX.medium,
    },
    centerText: {
      textAlign: 'center',
    },
    textVertMargin: {
      marginVertical: layout.scaledY.xSmall,
    },
    existingContainer: {
      flex: 1,
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
    btn: {
      marginVertical: layout.scaledY.small,
    },
  });
};
