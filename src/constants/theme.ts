import { Dimensions } from 'react-native';
import getLayoutFromClientViewportDeminsions from '../../designLib/tools/layoutTokenTransformer';
import { CustomThemeType } from '../../designLib/types/theme';
import lightThemeColors from '../../designLib/tokens/light.json';
import darkThemeColors from '../../designLib/tokens/dark.json';
import getTransformedTypeographyFromTokens from '../../designLib/tools/typographyTokenTransformer';

// Maps the DesignTokens to the mobile-app / FE client
// JOSN tokens -> transformers -> customTheme ( were here ) -> Navigation Library
// micro FE architecture "inspired" - requires Product to agree on a design tokening system

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
