import { FC, useMemo, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { ExtendedTheme, useNavigation, useTheme } from '@react-navigation/native';
import RNText from 'components/text';
import { RNTextEnum } from '../../../designLib/types/typography';
import RNButton, { ButtonType } from 'components/button';
import { OnboardingParamList, OnboardingScreens } from 'types/nav';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RNTextInput } from 'components/textInput';

// "Go Back / Close" -> onboarding
// "Choose Region" CTA -> ChooseRegionScreen
const CreateTrainerNameScreen: FC = () => {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  const navigation = useNavigation<NativeStackNavigationProp<OnboardingParamList>>();
  const [name, setName] = useState<string>('');

  // navigate to ChooseTrainerRegionScreen w/ input value
  const onPressHandler = () => {
    navigation.navigate(OnboardingScreens.ChooseTrainerRegionScreen, {
      name: name
    })
  }

  return (
    <View style={styles.container}>
      <RNText type={RNTextEnum.h2} customStyles={styles.font}>
        Set your new trainers Name
      </RNText>
      {/* // input to collect Trainer Name */}
      <RNText type={RNTextEnum.h3} customStyles={styles.font}>
        Name: {name}
      </RNText>
      <RNTextInput
        value={name}
        onChangeText={(val:string) => setName(val)}
        maxLength={25}
        placeholder="Enter trainer name"
        style={styles.input}
      />
      <RNButton disabled={name.length < 1} title={'Pick Generation'} onPress={onPressHandler} />
      <RNButton type={ButtonType.Secondary} title={'Leave'} onPress={() => navigation.goBack()} />
    </View>
  );
};

export default CreateTrainerNameScreen;

const createStyles = ({ layout, colors }: ExtendedTheme) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
      marginHorizontal: layout.scaledX.medium
    },
    font: {
      color: colors.text,
      marginVertical: layout.scaledY.xSmall,
    },
    error: {
      color: colors.notification
    },
    input: {
      marginBottom: layout.scaledY.xSmall,
    },
  });
};
