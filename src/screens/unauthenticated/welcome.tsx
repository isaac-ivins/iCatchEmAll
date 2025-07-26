import { FC, useMemo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ExtendedTheme, useTheme } from '@react-navigation/native';

const WelcomeScreen: FC = () => {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);

  return (
    <View style={styles.container}>
      <Text style={styles.font}>Welcome Screen</Text>
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
      fontSize: 40,
      color: colors.text,
      marginVertical: layout.scaledY.medium,
    },
  });
};
