import { useTypography } from '@/frontend/helpers/useTypography';
import React from 'react';
import { Text, TextProps, StyleProp, TextStyle } from 'react-native';

type TextVariant =
  | 'displayLarge'
  | 'displayMedium'
  | 'displaySmall'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'bodyLarge'
  | 'body'
  | 'bodySmall'
  | 'labelLarge'
  | 'label'
  | 'labelSmall'
  | 'buttonLarge'
  | 'button'
  | 'caption'
  | 'captionMuted'
  | 'overline';

type AppTextProps = TextProps & {
  children: React.ReactNode;
  variant?: TextVariant;
  style?: StyleProp<TextStyle>;
  color?: string;
};

export function AppText({
  children,
  variant = 'body',
  style,
  color,
  ...rest
}: AppTextProps) {
  const typography = useTypography();

  const baseStyle = typography.montserrat[variant];

  return (
    <Text
      {...rest}
      allowFontScaling={false}
      style={[baseStyle, color ? { color } : null, style]}
    >
      {children}
    </Text>
  );
}
