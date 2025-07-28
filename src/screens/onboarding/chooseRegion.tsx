import { FC, useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import { ExtendedTheme, useTheme } from '@react-navigation/native';
import RNText from 'components/text';
import { RNTextEnum } from '../../../designLib/types/typography';

// "Go back" -> ChooseTrainerName
// "Complete" CTA -> AuthStackNav
const ChooseTrainerRegionScreen: FC = () => {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);

  // query available regions
  // display as select list

  // run createUser - name, region
  // run login - aka create dummy token

  return (
    <View style={styles.container}>
      <RNText type={RNTextEnum.h1} customStyles={styles.font}>Choose Region Screen</RNText>
      {/* // select from region list */}
      {/* button that links to AuthStackNav */}
    </View>
  );
};

export default ChooseTrainerRegionScreen;

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
