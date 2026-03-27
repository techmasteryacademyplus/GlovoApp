import React, { useState } from 'react';
import { View, type ViewStyle } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { AppButton } from '@/frontend/components/Shared/AppButton/AppButton';
import { AppText } from '@/frontend/components/Shared/AppText/AppText';
import { ScreenWrapper } from '@/frontend/components/Shared/ScreenWrapper/ScreenWrapper';
import { palette } from '@/frontend/theme/colors';
import { useTheme } from '@/frontend/theme/ThemeProvider';
import { styles } from './styles';

type OnboardingSlide = {
  title: string;
  buttonLabel: string;
  note?: string;
};

const slides: OnboardingSlide[] = [
  {
    title: 'Order from\nany store or restaurant\nin your city',
    buttonLabel: 'Next',
  },
  {
    title: 'Couriers pick up your order\nand bring it to you\nin minutes',
    buttonLabel: 'Continue',
    note: 'Every delivery is carbon\nneutral',
  },
] as const;

const gridCells: ViewStyle[] = [
  { top: '7%', left: '6%' },
  { top: '7%', left: '37%' },
  { top: '7%', right: '6%' },
  { top: '39%', left: '6%' },
  { top: '39%', left: '37%' },
  { top: '39%', right: '6%' },
  { top: '71%', left: '6%' },
  { top: '71%', left: '37%' },
  { top: '71%', right: '6%' },
];

function BackgroundGrid() {
  return (
    <View pointerEvents="none" style={styles.gridLayer}>
      {gridCells.map((cell, index) => (
        <View key={index} style={[styles.gridCell, cell]} />
      ))}
    </View>
  );
}

function PaginationDots({ activeIndex }: { activeIndex: number }) {
  return (
    <View style={styles.pagination}>
      {slides.map((_, index) => (
        <View
          key={index}
          style={[
            styles.paginationDot,
            index === activeIndex
              ? styles.paginationDotActive
              : styles.paginationDotInactive,
          ]}
        />
      ))}
    </View>
  );
}

function FirstIllustration() {
  return (
    <View style={styles.illustrationCanvas}>
      <BackgroundGrid />

      <View style={[styles.iconWrap, styles.cupWrap]}>
        <View style={styles.cupLid} />
        <View style={styles.cupCup}>
          <View style={styles.cupBand} />
          <View style={styles.cupSleeve} />
          <View style={styles.cupBand} />
        </View>
        <View style={styles.cookie} />
      </View>

      <View style={[styles.iconWrap, styles.headphonesWrap]}>
        <View style={styles.headphonesBand} />
        <View style={[styles.headphonesPad, styles.headphonesPadLeft]} />
        <View style={[styles.headphonesPad, styles.headphonesPadRight]} />
      </View>

      <View style={[styles.iconWrap, styles.lollipopWrap]}>
        <View style={styles.lollipopLeaf} />
        <View style={styles.lollipopHead} />
        <View style={styles.lollipopStick} />
      </View>

      <View style={[styles.iconWrap, styles.socksWrap]}>
        <View style={[styles.sock, styles.sockLeft]} />
        <View style={[styles.sock, styles.sockRight]} />
      </View>

      <View style={[styles.iconWrap, styles.capsuleWrap]}>
        <View style={styles.capsuleShell}>
          <View style={styles.capsuleLeft} />
          <View style={styles.capsuleRight} />
        </View>
      </View>

      <View style={styles.shopperWrap}>
        <View style={styles.shopperHead}>
          <View style={styles.shopperHair} />
        </View>
        <View style={styles.shopperTorso}>
          <View style={styles.shopperTorsoStripe} />
        </View>
        <View style={[styles.shopperArm, styles.shopperArmLeft]} />
        <View style={[styles.shopperArm, styles.shopperArmRight]}>
          <View style={styles.phone} />
        </View>
      </View>
    </View>
  );
}

function MapPin({ color, style }: { color: string; style?: object }) {
  return (
    <View style={style}>
      <View style={[styles.mapPin, { backgroundColor: color }]}>
        <View style={styles.mapPinInner} />
      </View>
    </View>
  );
}

function SecondIllustration() {
  return (
    <View style={styles.illustrationCanvas}>
      <BackgroundGrid />

      <View style={styles.routePrimary} />
      <View style={styles.routeSecondary} />

      <MapPin color="#FF9B4A" style={styles.pinStart} />
      <MapPin color="#16C0B7" style={styles.pinEnd} />

      <View style={styles.helmetWrap}>
        <View style={styles.helmetBody} />
        <View style={styles.helmetVisor} />
      </View>
    </View>
  );
}

function EcoBadge() {
  return (
    <View style={styles.ecoBadge}>
      <View style={styles.ecoHand} />
      <View style={[styles.ecoLeaf, styles.ecoLeafLeft]} />
      <View style={[styles.ecoLeaf, styles.ecoLeafCenter]} />
      <View style={[styles.ecoLeaf, styles.ecoLeafRight]} />
      <View style={styles.ecoStem} />
    </View>
  );
}

export default function OnboardingScreen() {
  const insets = useSafeAreaInsets();
  const { theme } = useTheme();
  const [activeIndex, setActiveIndex] = useState(0);

  const currentSlide = slides[activeIndex];

  const handlePrimaryAction = () => {
    setActiveIndex(current => Math.min(current + 1, slides.length - 1));
  };

  return (
    <ScreenWrapper
      padded={false}
      safeAreaEdges={['left', 'right']}
      statusBarStyle="dark-content"
      statusBarBackground={theme.colors.primary}
      style={[styles.screen, { backgroundColor: theme.colors.primary }]}
    >
      <View style={styles.heroSection}>
        {activeIndex === 0 ? <FirstIllustration /> : <SecondIllustration />}
      </View>

      <View style={styles.bodySection}>
        <PaginationDots activeIndex={activeIndex} />

        <AppText
          variant="bodyLarge"
          color={palette.textWhite}
          style={styles.title}
        >
          {currentSlide.title}
        </AppText>

        {currentSlide.note ? (
          <View style={styles.noteRow}>
            <EcoBadge />
            <AppText
              variant="bodyLarge"
              color={palette.textWhite}
              style={styles.noteText}
            >
              {currentSlide.note}
            </AppText>
          </View>
        ) : (
          <View style={styles.noteSpacer} />
        )}
      </View>

      <View
        style={[styles.footer, { paddingBottom: Math.max(insets.bottom, 18) }]}
      >
        <AppButton
          title={currentSlide.buttonLabel}
          onPress={handlePrimaryAction}
          variant="secondary"
          size="lg"
          textVariant="h3"
        />
      </View>
    </ScreenWrapper>
  );
}
