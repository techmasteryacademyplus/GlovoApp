import React, { useEffect } from 'react';
import { Image } from 'react-native';
import styles from './styles';
import { useTheme } from '@/frontend/theme/ThemeProvider';
import { ScreenWrapper } from '@/frontend/components/Shared/ScreenWrapper/ScreenWrapper';

export default function SplashScreen({ navigation }: any) {
  const { theme } = useTheme();
  const colors = theme.colors;

  useEffect(() => {
    setTimeout(() => {
      console.log('Navigate to next screen');

      //   Navigate to the next screen
      navigation.replace('Onboarding');
    }, 5000);
  }, [navigation]);

  return (
    <ScreenWrapper
      padded={false}
      safeAreaEdges={[]}
      statusBarStyle="dark-content"
      statusBarBackground={colors.primary}
      style={[styles.container, { backgroundColor: colors.splashBackground }]}
    >
      <Image
        source={require('@/frontend/assets/images/logo.png')}
        style={styles.logo}
        resizeMode="contain"
      />
    </ScreenWrapper>
  );
}
