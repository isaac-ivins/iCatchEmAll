import { Dimensions } from 'react-native';
import getLayoutFromClientViewportDeminsions from '../../designLib/tools/layoutTokenTransformer';
import { CustomThemeType } from '../../designLib/types/theme';
import lightThemeColors from '../../designLib/tokens/light.json';
import { DarkTheme, DefaultTheme } from '@react-navigation/native';
// import DarkThemeColors from '../../designLib/tokens/dark.json';

const { width, height } = Dimensions.get('window');

export const LightTheme: CustomThemeType = {
  dark: false,
  colors: lightThemeColors,
  fonts: DefaultTheme.fonts,
  layout: getLayoutFromClientViewportDeminsions(width, height),
};

export const DarkCustomTheme: CustomThemeType = {
  dark: true,
  colors: DarkTheme.colors,
  fonts: DarkTheme.fonts,
  layout: getLayoutFromClientViewportDeminsions(width, height),
};