import { ReactNode, FC } from 'react';
import { StyleProp, Text, TextProps, TextStyle } from 'react-native'
import { RNTextEnum, TypographyConfig, TypographyValues } from '../../../designLib/types/typography';
import typography from '../../../designLib/tokens/typography.json';

interface RNTextProps extends TextProps {
    type: RNTextEnum;
    children: ReactNode;
    customStyles?: StyleProp<TextStyle>;
}

const mapTokensToValues = (config: TypographyConfig, values: TypographyValues): TextStyle => {
    return {
        fontFamily: values.fontFamily[config.fontFamily],
        fontSize: values.fontSize[config.fontSize],
        fontWeight: values.fontWeight[config.fontWeight] as TextStyle['fontWeight'],
        lineHeight: values.lineHeight[config.lineHeight] * values.fontSize[config.fontSize],
    };
};

const RNText: FC<RNTextProps> = ({ type, children, customStyles }) => {
    const { values } = typography.typography as { values: TypographyValues };
    const textConfig = typography.typography[type] as TypographyConfig;
    const textStyle = mapTokensToValues(textConfig, values);
    
    return <Text style={[textStyle, customStyles]}>{children}</Text>
}

export default RNText;