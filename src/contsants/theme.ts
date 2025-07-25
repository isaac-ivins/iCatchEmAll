import { Dimensions } from "react-native";
import { DefaultTheme, DarkTheme } from '@react-navigation/native';
import getLayoutFromClientViewportDeminsions from "../../designLib/tools/layoutTokenTransformer";
// import { LayoutThemeType } from "../../designLib/types/layout";

const { width, height } = Dimensions.get('window');

// export interface CustomThemeType {
//     dark: boolean;
//     colors: any;
//     fonts: any;
//     layout: LayoutThemeType
// };

// export const CustomTheme: CustomThemeType =  {
export const CustomTheme =  {
    ...DefaultTheme,
    ...DarkTheme,
    layout: getLayoutFromClientViewportDeminsions(width, height),
}