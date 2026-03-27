import React from 'react';
import {
  View,
  ScrollView,
  StatusBar,
  StyleProp,
  ViewStyle,
} from 'react-native';

import { SafeAreaView, Edge } from 'react-native-safe-area-context';
import styles from './styles';
import { useTheme } from '@/frontend/theme/ThemeProvider';

type ScreenWrapperProps = {
  children: React.ReactNode;

  padded?: boolean;
  scrollable?: boolean;

  style?: StyleProp<ViewStyle>;

  statusBarStyle?: 'light-content' | 'dark-content';
  statusBarBackground?: string;
  statusBarTranslucent?: boolean;
  topPadding?: number;
  safeAreaEdges?: Edge[];
};

export function ScreenWrapper({
  children,
  padded = true,
  scrollable = false,
  style,
  statusBarStyle,
  statusBarBackground,
  statusBarTranslucent = false,
  topPadding = 0,
  safeAreaEdges = ['top', 'left', 'right'],
}: ScreenWrapperProps) {
  const { isDark } = useTheme();

  const barStyle =
    statusBarStyle ?? (isDark ? 'light-content' : 'dark-content');

  const resolvedStatusBarBackground =
    statusBarBackground ?? (statusBarTranslucent ? 'transparent' : undefined);

  const baseContentStyle = [
    padded && styles.padded,
    topPadding > 0 && { paddingTop: topPadding },
    style,
  ];

  return (
    <SafeAreaView style={styles.container} edges={safeAreaEdges}>
      <StatusBar
        translucent={statusBarTranslucent}
        barStyle={barStyle}
        backgroundColor={resolvedStatusBarBackground}
      />

      {scrollable ? (
        <ScrollView
          style={styles.container}
          contentContainerStyle={[styles.scrollContent, baseContentStyle]}
          showsVerticalScrollIndicator={false}
        >
          {children}
        </ScrollView>
      ) : (
        <View style={[styles.content, baseContentStyle]}>{children}</View>
      )}
    </SafeAreaView>
  );
}
