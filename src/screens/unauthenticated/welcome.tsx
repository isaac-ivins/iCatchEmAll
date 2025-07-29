import { FC, useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import { ExtendedTheme, useNavigation, useTheme } from '@react-navigation/native';
import { RNTextEnum } from '../../../designLib/types/typography';
import RNButton from 'components/button';
import RNText from 'components/text';
import { RootParamList, RootParamScreens } from 'types/nav';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// "Create account/trainer" CTA -> onboarding
const WelcomeScreen: FC = () => {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  const navigation = useNavigation<NativeStackNavigationProp<RootParamList>>();

  // query available Pokemon Trainers
  // display as select list
  // useEffect(() => {
  //   console.log('loading: ', loading)
  //   if (!loading) {
  //     console.log('data: ', data)
  //   }
  // }, [loading])

  const onPressHandler = () => {
    navigation.navigate(RootParamScreens.OnboardingStackNavigator)
  }

  return (
    <View style={styles.container}>
      <RNText type={RNTextEnum.h1} customStyles={styles.font}>
        Welcome Screen
      </RNText>
      <RNButton title={'Create Trainer'} onPress={onPressHandler} />
      {/* button that links to OnboardingStackNavigator */}
      {/* list of existing trainers */}
    </View>
  );
};

export default WelcomeScreen;

const createStyles = ({ layout, colors }: ExtendedTheme) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: colors.background,
    },
    font: {
      marginVertical: layout.scaledY.medium,
    },
  });
};
