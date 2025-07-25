import { Dimensions } from "react-native";
import { LayoutThemeType } from "../../designLib/types/layout";
import getLayoutFromClientViewportDeminsions from "../../designLib/tools/layoutTokenTransformer";

const { width, height } = Dimensions.get('window');

export interface CustomThemeType {
    dark: boolean,
    layout: LayoutThemeType;
    colors: any;
    fonts: any;
}

export const CustomTheme: CustomThemeType =  {
    dark: false,
    layout: getLayoutFromClientViewportDeminsions(width, height),
    colors: {},
    fonts: {}
}