import { Dimensions } from 'react-native';
import getLayoutFromClientViewportDeminsions from '../../designLib/tools/layoutTokenTransformer';
import { CustomThemeType } from '../../designLib/types/theme';
import lightThemeColors from '../../designLib/tokens/light.json';
import themeFonts from '../../designLib/tokens/light.json';

const { width, height } = Dimensions.get('window');

export const CustomTheme: CustomThemeType = {
  dark: false,
  colors: lightThemeColors,
  fonts: themeFonts,
  layout: getLayoutFromClientViewportDeminsions(width, height),
};