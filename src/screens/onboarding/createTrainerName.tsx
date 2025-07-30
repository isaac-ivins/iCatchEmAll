import { FC, useMemo, useState, useCallback } from 'react';
import { StyleSheet, View } from 'react-native';
import {
  ExtendedTheme,
  useNavigation,
  useTheme,
} from '@react-navigation/native';
import RNText from 'components/text';
import { RNTextEnum } from '../../../designLib/types/typography';
import RNButton, { ButtonType } from 'components/button';
import { OnboardingParamList, OnboardingScreens } from 'types/nav';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RNTextInput } from 'components/textInput';

// Initial Onboarding Screen (1/2)
// Continue CTA -> navigates to ChooseRegionScreen (2/2 screens)
// Sub-Minimal Input Validation 
const CreateTrainerNameScreen: FC = () => {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  const navigation =
    useNavigation<NativeStackNavigationProp<OnboardingParamList>>();
  const [name, setName] = useState<string>('');

  // navigate to ChooseTrainerRegionScreen w/ input value
  const onPressHandler = useCallback(() => {
    navigation.navigate(OnboardingScreens.ChooseTrainerRegionScreen, {
      name: name,
    });
  }, [name]);

  const handleNameChange = useCallback((val: string) => {
    setName(val);
  }, []);

  const onPressGoBack = useCallback(() => {
    navigation.goBack();
  }, []);

  return (
    <View style={styles.container}>
      <RNText type={RNTextEnum.h2} customStyles={styles.font}>
        Set your new trainers Name
      </RNText>
      <RNText type={RNTextEnum.h3} customStyles={styles.font}>
        Name: {name}
      </RNText>
      <RNTextInput
        value={name}
        onChangeText={handleNameChange}
        maxLength={25}
        placeholder="Enter trainer name"
        style={styles.input}
      />
      <RNButton
        disabled={name.length < 1}
        title={'Continue'}
        onPress={onPressHandler}
      />
      <RNButton
        type={ButtonType.Secondary}
        title={'Leave'}
        onPress={onPressGoBack}
      />
    </View>
  );
};

export default CreateTrainerNameScreen;

const createStyles = ({ layout, colors }: ExtendedTheme) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
      marginHorizontal: layout.scaledX.medium,
    },
    font: {
      marginVertical: layout.scaledY.xSmall,
    },
    error: {
      color: colors.notification,
    },
    input: {
      marginBottom: layout.scaledY.xSmall,
    },
  });
};
