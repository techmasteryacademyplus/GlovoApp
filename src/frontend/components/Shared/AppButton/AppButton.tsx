import React from 'react';
import {
  TouchableOpacity,
  ActivityIndicator,
  StyleProp,
  ViewStyle,
  View,
} from 'react-native';

import { AppText } from '../AppText/AppText';
import { styles } from './styles';
import { useTheme } from '@/frontend/theme/ThemeProvider';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

type AppButtonProps = {
  title: string;
  onPress?: () => void;
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;

  textVariant?: any;
};

export function AppButton({
  title,
  onPress,
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled = false,
  style,
  textVariant = 'button',
}: AppButtonProps) {
  const { theme } = useTheme();
  const { colors } = theme;

  const isDisabled = disabled || loading;

  /* ================= VARIANT STYLES ================= */

  let backgroundColor = 'transparent';
  let borderColor = 'transparent';
  let textColor = colors.textPrimary;

  switch (variant) {
    case 'primary':
      backgroundColor = colors.buttonPrimary;
      textColor = colors.buttonPrimaryText;
      break;

    case 'secondary':
      backgroundColor = colors.buttonSecondary;
      textColor = colors.buttonSecondaryText;
      break;

    case 'outline':
      borderColor = colors.primary;
      textColor = colors.primary;
      break;

    case 'ghost':
      textColor = colors.primary;
      break;
  }

  if (isDisabled) {
    backgroundColor = colors.buttonDisabled;
    textColor = colors.buttonDisabledText;
  }

  return (
    <TouchableOpacity
      activeOpacity={0.85}
      disabled={isDisabled}
      onPress={onPress}
      style={[
        styles.base,
        styles[size],
        variant === 'outline' && styles.outline,
        {
          backgroundColor,
          borderColor,
        },
        style,
      ]}
    >
      <View style={styles.content}>
        <AppText variant={textVariant} color={textColor}>
          {title}
        </AppText>

        {loading && (
          <ActivityIndicator
            size="small"
            color={textColor}
            style={styles.loader}
          />
        )}
      </View>
    </TouchableOpacity>
  );
}
