import { FC, useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import { ExtendedTheme, useTheme } from '@react-navigation/native';
import RNText from 'components/text';
import { RNTextEnum } from '../../../designLib/types/typography';

const WelcomeScreen: FC = () => {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);

  return (
    <View style={styles.container}>
      <RNText type={RNTextEnum.h1} customStyles={styles.font}>Welcome Screen</RNText>
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
      color: colors.text,
      marginVertical: layout.scaledY.medium,
    },
  });
};
