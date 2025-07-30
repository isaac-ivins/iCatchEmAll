import { ReactNode, FC, useMemo } from 'react';
import {
  StyleSheet,
  StyleProp,
  Text,
  TextProps,
  TextStyle,
} from 'react-native';
import { RNTextEnum } from '../../../designLib/types/typography';
import { ExtendedTheme, useTheme } from '@react-navigation/native';

interface RNTextProps extends TextProps {
  type: RNTextEnum;
  children: ReactNode;
  customStyles?: StyleProp<TextStyle>;
}

// Minimalist Reusable Text Component for all static copy cases
// Currently aligned with DesignTokening system
// There's like 3 headings and 2 paragraph styles atm - this would grow
// I don't like adding margins/padding here - set when used
const RNText: FC<RNTextProps> = ({
  type,
  children,
  customStyles,
  accessibilityLabel,
}) => {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme, type), [theme, type]);

  return (
    <Text
      accessibilityLabel={accessibilityLabel || children?.toString()}
      style={[styles.typography, customStyles]}
    >
      {children}
    </Text>
  );
};

const createStyles = ({ colors, fonts }: ExtendedTheme, type: RNTextEnum) => {
  return StyleSheet.create({
    typography: {
      color: colors.text,
      ...fonts[type],
    },
  });
};

export default RNText;
