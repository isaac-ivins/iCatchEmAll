import { CustomThemeType } from '@constants/theme';

declare module '@react-navigation/native' {
  export type ExtendedTheme = CustomThemeType;
  export function useTheme(): ExtendedTheme;
}
