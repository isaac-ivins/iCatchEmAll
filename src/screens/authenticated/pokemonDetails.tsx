import { FC, useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import { ExtendedTheme, useTheme } from '@react-navigation/native';
import RNText from 'components/text';
import { RNTextEnum } from '../../../designLib/types/typography';

// Close Details Modal with X
const PokemonDetailsModal: FC = () => {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);

  // query for more pokemon details
  // display more info

  // run catch - add-to caught pokemon list

  return (
    <View style={styles.container}>
      <RNText type={RNTextEnum.h1} customStyles={styles.font}>
        Captured Pokemon Screen
      </RNText>
      {/* display more info */}
      {/* "Catch" CTA -> adds to caught pokemon */}
    </View>
  );
};

export default PokemonDetailsModal;

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
