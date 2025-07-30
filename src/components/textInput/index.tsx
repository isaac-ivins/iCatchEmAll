import { ExtendedTheme, useTheme } from '@react-navigation/native';
import { FC, useMemo } from 'react';
import {
  StyleProp,
  TextInput,
  TextInputProps,
  TextStyle,
  StyleSheet,
} from 'react-native';

interface RNTextInputProps extends TextInputProps {
  value: string;
  onChangeText: (text: string) => void;
  maxLength?: number;
  placeholder?: string;
  style?: StyleProp<TextStyle>;
}

// Minimalist Reusable TextInput for main cases
// Not attached to any current schema - would require updates
// Not a TextArea substitute
// Gets the job done and adds accessibility props automatically
export const RNTextInput: FC<RNTextInputProps> = ({
  value,
  onChangeText,
  maxLength = 25,
  placeholder,
  style,
  accessibilityLabel,
  ...rest
}) => {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);

  return (
    <TextInput
      value={value}
      onChangeText={onChangeText}
      maxLength={maxLength}
      placeholder={placeholder}
      style={[styles.input, style]}
      placeholderTextColor={theme.colors.border}
      accessibilityLabel={accessibilityLabel ?? placeholder}
      {...rest}
    />
  );
};

const createStyles = ({ layout, colors }: ExtendedTheme) => {
  return StyleSheet.create({
    input: {
      borderColor: colors.border,
      borderWidth: 1,
      borderRadius: layout.scaledX.xxxSmall,
      padding: layout.scaledX.xSmall,
      paddingHorizontal: layout.scaledX.small,
      color: colors.text,
      backgroundColor: colors.background,
    },
  });
};
