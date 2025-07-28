import { TextStyle } from "react-native";
import { TypographyConfig, TypographyValues } from "../types/typography";
import typography from '../tokens/typography.json';

const mapTokensToValues = (
    config: TypographyConfig,
    values: TypographyValues,
  ): TextStyle => {
    return {
      fontFamily: values.fontFamily[config.fontFamily],
      fontSize: values.fontSize[config.fontSize],
      fontWeight: values.fontWeight[config.fontWeight] as TextStyle['fontWeight'],
      lineHeight:
        values.lineHeight[config.lineHeight] * values.fontSize[config.fontSize],
    };
  };

const getTransformedTypeographyFromTokens = (): Record<string, TextStyle> => {
  const { values, presets } = typography.typography;
  const transformedTypography: Record<string, TextStyle> = {};

  Object.entries(presets).forEach(([key, value]) => {
    transformedTypography[key] = mapTokensToValues(value as TypographyConfig, values as TypographyValues);
  });

  return transformedTypography;
};

export default getTransformedTypeographyFromTokens;