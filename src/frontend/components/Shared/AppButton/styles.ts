import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  base: {
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },

  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  /* ================= SIZES ================= */

  sm: {
    height: 40,
    paddingHorizontal: 16,
  },

  md: {
    height: 48,
    paddingHorizontal: 20,
  },

  lg: {
    height: 56,
    paddingHorizontal: 24,
  },

  /* ================= VARIANTS ================= */

  outline: {
    borderWidth: 1,
  },

  /* ================= LOADER ================= */

  loader: {
    marginLeft: 8,
  },
});
