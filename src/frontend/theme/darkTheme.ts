import { palette } from './colors';

export const darkTheme = {
  isDark: true,

  colors: {
    /* ---------------- SCREEN ---------------- */
    background: palette.bgStrong, // main app background
    surface: '#121212', // elevated surface
    card: '#1A1A1A', // cards (slightly lifted)

    /* ---------------- TEXT ---------------- */
    textPrimary: palette.textWhite,
    textSecondary: '#B3B3B3',
    textMuted: palette.textSoft,
    textDisabled: palette.textDisabled,
    textInverse: palette.textMain,

    /* ---------------- BRAND ---------------- */
    primary: palette.primaryBase, // yellow pops on dark
    primarySoft: palette.primaryDark,

    secondary: palette.secondaryBase,
    secondarySoft: palette.secondaryDark,

    /* ---------------- BUTTONS ---------------- */
    buttonPrimary: palette.primaryBase,
    buttonPrimaryText: '#1D1D1F', // dark text on yellow (better UX)

    buttonSecondary: palette.secondaryBase,
    buttonSecondaryText: palette.textWhite,

    buttonDisabled: '#2A2A2A',
    buttonDisabledText: palette.textDisabled,

    /* ---------------- INPUTS ---------------- */
    inputBackground: '#1A1A1A',
    inputBorder: '#2C2C2C',
    inputBorderFocus: palette.primaryBase,
    placeholder: '#8E8E93',

    /* ---------------- BORDERS ---------------- */
    border: '#2C2C2C',
    divider: '#1F1F1F',

    /* ---------------- ICONS ---------------- */
    iconPrimary: palette.iconWhite,
    iconSecondary: '#B3B3B3',
    iconDisabled: palette.iconDisabled,

    /* ---------------- STATUS ---------------- */
    success: palette.secondaryBase,
    warning: palette.primaryBase,
    danger: '#EF4444',

    /* ---------------- OVERLAYS ---------------- */
    overlay: 'rgba(0,0,0,0.7)',
  },
};
