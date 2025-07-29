import { Dimensions } from 'react-native';
import getLayoutFromClientViewportDeminsions from '../../designLib/tools/layoutTokenTransformer';
import { CustomThemeType } from '../../designLib/types/theme';
import lightThemeColors from '../../designLib/tokens/light.json';
import darkThemeColors from '../../designLib/tokens/dark.json';
import getTransformedTypeographyFromTokens from '../../designLib/tools/typographyTokenTransformer';

const { width, height } = Dimensions.get('window');
const fonts = getTransformedTypeographyFromTokens();
const layout = getLayoutFromClientViewportDeminsions(width, height);

export const LightTheme: CustomThemeType = {
  dark: false,
  colors: lightThemeColors.colors,
  fonts,
  layout,
};

export const DarkCustomTheme: CustomThemeType = {
  dark: true,
  colors: darkThemeColors.colors,
  fonts,
  layout,
};
