import { FC, useEffect, useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import { ExtendedTheme, useTheme } from '@react-navigation/native';
import RNText from 'components/text';
import { RNTextEnum } from '../../../designLib/types/typography';
import { useQuery } from '@apollo/client';
import { GET_ALL_GENERATIONS } from 'graphql/queries';

// "Create account/trainer" CTA -> onboarding
const WelcomeScreen: FC = () => {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  const { loading, data } = useQuery(GET_ALL_GENERATIONS);

  // query available Pokemon Trainers
  // display as select list
  useEffect(() => {
    console.log('loading: ', loading)
    if (!loading) {
      console.log('data: ', data)
    }
  }, [loading])

  return (
    <View style={styles.container}>
      <RNText type={RNTextEnum.h1} customStyles={styles.font}>
        Welcome Screen
      </RNText>
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
