import { LayoutThemeType } from './layout';

export interface ColorTheme {
  primary: string;
  background: string;
  card: string;
  text: string;
  border: string;
  notification: string;
}

export interface CustomThemeType {
  dark: boolean;
  colors: ColorTheme;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  fonts: any;
  layout: LayoutThemeType;
}
