import React, { useMemo } from 'react';
import {
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from 'react-native';
import { ExtendedTheme, useTheme } from '@react-navigation/native';
import RNText from 'components/text';
import { RNTextEnum } from '../../../designLib/types/typography';

export enum ButtonType {
  Primary = 'Primary',
  Secondary = 'Secondary',
}

interface ButtonProps {
  title: string;
  onPress: () => void;
  type?: ButtonType;
  loading?: boolean;
  disabled?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
  accessibilityLabel?: string;
}

// Used for main Button cases - not every CTA or Pressable use case
// Has 2 types but is expandable given DesignTokens
// Automatically adding accessibility props
// Text within the Button is still customizable
const RNButton: React.FC<ButtonProps> = ({
  title,
  onPress,
  type = ButtonType.Primary,
  loading = false,
  disabled = false,
  style,
  textStyle,
  accessibilityLabel,
}) => {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  const isPrimary = type === ButtonType.Primary;

  const backgroundColor = disabled
    ? theme.colors.border
    : isPrimary
      ? theme.colors.primary
      : theme.colors.background;
  const color = isPrimary ? theme.colors.background : theme.colors.primary;

  return (
    <TouchableOpacity
      style={[
        styles.button,
        { backgroundColor, opacity: disabled ? 0.6 : 1 },
        style,
      ]}
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.7}
      accessibilityRole={'button'}
      accessibilityLabel={accessibilityLabel ?? title}
      accessibilityState={{ disabled: disabled || loading }}
    >
      {loading ? <ActivityIndicator color={color} /> : null}
      <RNText type={RNTextEnum.p1} customStyles={[{ color }, textStyle]}>
        {title}
      </RNText>
    </TouchableOpacity>
  );
};

const createStyles = ({ layout }: ExtendedTheme) => {
  return StyleSheet.create({
    button: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: layout.scaledY.small,
      paddingHorizontal: layout.scaledX.small,
      borderRadius: layout.scaledX.xSmall,
    },
  });
};

export default RNButton;
