import { FC, useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import { ExtendedTheme, useTheme } from '@react-navigation/native';
import RNText from 'components/text';
import { RNTextEnum } from '../../../designLib/types/typography';

// Open Details Modal with CTA on Pokemon Tile
const CapturedPokemonScreen: FC = () => {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);

  // display list of captured pokemon with "release" option

  // run Release - remove from captured list of trainer

  return (
    <View style={styles.container}>
      <RNText type={RNTextEnum.h1} customStyles={styles.font}>Captured Pokemon Screen</RNText>
      {/* show total # pokemon caught */}
      {/* list of capture pokemon */}
      {/* // "release" CTA */}
      {/* // "Open Modal" CTA -> Pokemon Details Modal */}
    </View>
  );
};

export default CapturedPokemonScreen;

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
