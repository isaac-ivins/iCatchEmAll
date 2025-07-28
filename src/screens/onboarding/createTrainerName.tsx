import { FC, useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import { ExtendedTheme, useTheme } from '@react-navigation/native';
import RNText from 'components/text';
import { RNTextEnum } from '../../../designLib/types/typography';

// "Go Back / Close" -> onboarding
// "Choose Region" CTA -> ChooseRegionScreen
const CreateTrainerNameScreen: FC = () => {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);

  // keyboard input logic

  return (
    <View style={styles.container}>
      <RNText type={RNTextEnum.h1} customStyles={styles.font}>
        Create Trainer Screen
      </RNText>
      {/* // input to collect Trainer Name */}
      {/* button that links to ChooseRegionScreen */}
    </View>
  );
};

export default CreateTrainerNameScreen;

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
