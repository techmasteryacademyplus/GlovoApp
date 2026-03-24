import { FontFamily } from './fonts';

type Colors = {
  textPrimary: string;
  textSecondary: string;
  textMuted: string;
  textDisabled: string;
  textInverse: string;
};

export function createTypography(colors: Colors) {
  return {
    montserrat: {
      /* ---------------- DISPLAY ---------------- */

      displayLarge: {
        fontFamily: FontFamily.montserrat.bold,
        fontSize: 40,
        lineHeight: 48,
        color: colors.textPrimary,
      },

      displayMedium: {
        fontFamily: FontFamily.montserrat.bold,
        fontSize: 34,
        lineHeight: 42,
        color: colors.textPrimary,
      },

      displaySmall: {
        fontFamily: FontFamily.montserrat.bold,
        fontSize: 30,
        lineHeight: 38,
        color: colors.textPrimary,
      },

      /* ---------------- HEADINGS ---------------- */

      h1: {
        fontFamily: FontFamily.montserrat.bold,
        fontSize: 28,
        lineHeight: 36,
        color: colors.textPrimary,
      },

      h2: {
        fontFamily: FontFamily.montserrat.bold,
        fontSize: 24,
        lineHeight: 32,
        color: colors.textPrimary,
      },

      h3: {
        fontFamily: FontFamily.montserrat.bold,
        fontSize: 20,
        lineHeight: 28,
        color: colors.textPrimary,
      },

      h4: {
        fontFamily: FontFamily.montserrat.medium,
        fontSize: 18,
        lineHeight: 26,
        color: colors.textPrimary,
      },

      /* ---------------- BODY ---------------- */

      bodyLarge: {
        fontFamily: FontFamily.montserrat.regular,
        fontSize: 18,
        lineHeight: 26,
        color: colors.textPrimary,
      },

      body: {
        fontFamily: FontFamily.montserrat.regular,
        fontSize: 16,
        lineHeight: 24,
        color: colors.textPrimary,
      },

      bodySmall: {
        fontFamily: FontFamily.montserrat.regular,
        fontSize: 14,
        lineHeight: 20,
        color: colors.textSecondary,
      },

      /* ---------------- LABELS ---------------- */

      labelLarge: {
        fontFamily: FontFamily.montserrat.medium,
        fontSize: 12,
        lineHeight: 20,
        color: colors.textPrimary,
      },

      label: {
        fontFamily: FontFamily.montserrat.medium,
        fontSize: 10,
        lineHeight: 18,
        color: colors.textSecondary,
      },

      labelSmall: {
        fontFamily: FontFamily.montserrat.medium,
        fontSize: 8,
        lineHeight: 16,
        color: colors.textMuted,
      },

      /* ---------------- BUTTON TEXT ---------------- */

      buttonLarge: {
        fontFamily: FontFamily.montserrat.bold,
        fontSize: 16,
        lineHeight: 20,
        letterSpacing: 0.4,
        color: colors.textInverse,
      },

      button: {
        fontFamily: FontFamily.montserrat.bold,
        fontSize: 14,
        lineHeight: 18,
        letterSpacing: 0.3,
        color: colors.textInverse,
      },

      /* ---------------- CAPTIONS ---------------- */

      caption: {
        fontFamily: FontFamily.montserrat.regular,
        fontSize: 12,
        lineHeight: 16,
        color: colors.textSecondary,
      },

      captionMuted: {
        fontFamily: FontFamily.montserrat.regular,
        fontSize: 11,
        lineHeight: 14,
        color: colors.textMuted,
      },

      /* ---------------- OVERLINE ---------------- */

      overline: {
        fontFamily: FontFamily.montserrat.medium,
        fontSize: 10,
        letterSpacing: 1,
        textTransform: 'uppercase' as const,
        color: colors.textSecondary,
      },
    },
  };
}
