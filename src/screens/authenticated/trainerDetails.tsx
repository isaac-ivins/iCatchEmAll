import { FC, useMemo, useCallback } from 'react';
import { StyleSheet, View } from 'react-native';
import {
  CommonActions,
  ExtendedTheme,
  useNavigation,
  useTheme,
} from '@react-navigation/native';
import RNText from 'components/text';
import { RNTextEnum } from '../../../designLib/types/typography';
import RNButton from 'components/button';
import { useMainAppStore } from 'store/main';
import { RootParamList, RootParamScreens } from 'types/nav';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// Final Tab in BottomTabNavigator ( 3/3 )
// Logout CTA -> clears currentTrainer from Main Store & navigates to WelcomeScreen
const TrainerDetailsScreen: FC = () => {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  const { setCurrentTrainer } = useMainAppStore();
  const currentTrainer = useMainAppStore((state) => state.currentTrainer);
  const navigation = useNavigation<NativeStackNavigationProp<RootParamList>>();

  // Logout CTA -> Navigates to WelcomeScreen
  const handleLogoutLogic = useCallback(() => {
    setCurrentTrainer(null);
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: RootParamScreens.UnauthenticatedStackNavigator }],
      }),
    );
  }, [setCurrentTrainer, navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <RNText type={RNTextEnum.h2} customStyles={styles.font}>
          {currentTrainer?.name}
        </RNText>
        <RNText
          type={RNTextEnum.h2}
          customStyles={[styles.font, styles.margin]}
        >
          {currentTrainer?.region}
        </RNText>
        <RNText
          type={RNTextEnum.h2}
          customStyles={[styles.font, styles.margin]}
        >
          Pokemon Caught: {currentTrainer?.favoritePokemons?.length ?? '0'}
        </RNText>
      </View>
      <RNButton title={'Logout'} onPress={handleLogoutLogic} />
    </View>
  );
};

export default TrainerDetailsScreen;

const createStyles = ({ layout, colors }: ExtendedTheme) => {
  return StyleSheet.create({
    container: {
      backgroundColor: colors.background,
      marginHorizontal: layout.scaledX.medium,
    },
    font: {
      color: colors.text,
    },
    margin: {
      marginTop: layout.scaledY.small,
    },
    header: {
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical: layout.scaledY.medium,
    },
  });
};
