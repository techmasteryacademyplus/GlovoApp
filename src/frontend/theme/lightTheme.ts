import { palette } from './colors';

export const lightTheme = {
  isDark: false,

  colors: {
    /* ---------------- SCREEN ---------------- */
    splashBackground: palette.primaryBase,
    background: palette.bgWhite, // main clean background
    surface: '#FFFFFF', // full white surface
    card: '#FAFAFA', // subtle card separation

    /* ---------------- TEXT ---------------- */
    textPrimary: palette.textMain,
    textSecondary: '#6B6B6B',
    textMuted: palette.textSoft,
    textDisabled: palette.textDisabled,
    textInverse: palette.textWhite,

    /* ---------------- BRAND ---------------- */
    primary: palette.primaryBase,
    primarySoft: palette.primaryLight,

    secondary: palette.secondaryBase,
    secondarySoft: palette.secondaryLight,

    /* ---------------- BUTTONS ---------------- */
    buttonPrimary: palette.primaryBase,
    buttonPrimaryText: '#1D1D1F', // dark text on yellow (Glovo style)

    buttonSecondary: palette.secondaryBase,
    buttonSecondaryText: palette.textWhite,

    buttonDisabled: '#F1F1F1',
    buttonDisabledText: palette.textDisabled,

    /* ---------------- INPUTS ---------------- */
    inputBackground: '#F9F9F9',
    inputBorder: palette.strokeSub,
    inputBorderFocus: palette.primaryBase,
    placeholder: '#9CA3AF',

    /* ---------------- BORDERS ---------------- */
    border: palette.strokeSub,
    divider: '#F1F1F1',

    /* ---------------- ICONS ---------------- */
    iconPrimary: palette.iconStrong,
    iconSecondary: '#6B6B6B',
    iconDisabled: palette.iconDisabled,

    /* ---------------- STATUS ---------------- */
    success: palette.secondaryBase,
    warning: palette.primaryBase,
    danger: '#EF4444',

    /* ---------------- OVERLAYS ---------------- */
    overlay: 'rgba(0,0,0,0.4)',
  },
};
