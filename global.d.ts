import { CustomThemeType } from 'contsants/theme';

declare module '@react-navigation/native' {
  export type ExtendedTheme = CustomThemeType;
  export function useTheme(): ExtendedTheme;
}
