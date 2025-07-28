import { FC, useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import { ExtendedTheme, useTheme } from '@react-navigation/native';
import RNText from 'components/text';
import { RNTextEnum } from '../../../designLib/types/typography';

// "Logout" CTA -> WelcomeScreen / UnauthStack
const TrainerDetailsScreen: FC = () => {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);

  // run logut - aka remove dummy token

  return (
    <View style={styles.container}>
      <RNText type={RNTextEnum.h1} customStyles={styles.font}>Trainer Details Screen</RNText>
      {/* // show name */}
      {/* // show selected region */}
      {/* // show total pokemon caugh # */}
      {/* LOGOUT button that links to UnauthStack */}
    </View>
  );
};

export default TrainerDetailsScreen;

const createStyles = ({ layout, colors }: ExtendedTheme) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: colors.background,
    },
    font: {
      color: colors.text,
      marginVertical: layout.scaledY.medium,
    },
  });
};
