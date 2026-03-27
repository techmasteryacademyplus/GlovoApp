import { StyleSheet } from 'react-native';
import { palette } from '@/frontend/theme/colors';

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },

  heroSection: {
    height: '45%',
    justifyContent: 'flex-end',
    // paddingHorizontal: 18,
    paddingTop: 12,
  },

  illustrationCanvas: {
    flex: 1,
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },

  gridLayer: {
    ...StyleSheet.absoluteFillObject,
  },

  gridCell: {
    position: 'absolute',
    width: 92,
    height: 92,
    backgroundColor: 'rgba(214, 155, 13, 0.18)',
    borderRadius: 20,
  },

  iconWrap: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },

  cupWrap: {
    top: 32,
    left: 96,
    width: 110,
    height: 96,
  },

  cupLid: {
    width: 76,
    height: 16,
    borderRadius: 10,
    backgroundColor: '#F8F7F4',
    borderWidth: 5,
    borderColor: '#5C5C60',
    zIndex: 2,
  },

  cupCup: {
    marginTop: -4,
    width: 62,
    height: 74,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#F8F7F4',
    borderWidth: 5,
    borderColor: '#5C5C60',
  },

  cupBand: {
    height: 14,
    backgroundColor: '#2D8B80',
  },

  cupSleeve: {
    flex: 1,
    backgroundColor: '#F4D79B',
  },

  cookie: {
    position: 'absolute',
    left: 6,
    bottom: 22,
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#E8B35B',
    borderWidth: 4,
    borderColor: '#5C5C60',
  },

  headphonesWrap: {
    top: 44,
    right: 72,
    width: 110,
    height: 90,
  },

  headphonesBand: {
    width: 74,
    height: 74,
    borderWidth: 6,
    borderColor: '#5C5C60',
    borderBottomWidth: 0,
    borderTopLeftRadius: 42,
    borderTopRightRadius: 42,
    transform: [{ rotate: '24deg' }],
  },

  headphonesPad: {
    position: 'absolute',
    width: 22,
    height: 38,
    borderRadius: 12,
    backgroundColor: '#6F6F74',
    borderWidth: 5,
    borderColor: '#5C5C60',
    bottom: 6,
  },

  headphonesPadLeft: {
    left: 18,
    transform: [{ rotate: '22deg' }],
  },

  headphonesPadRight: {
    right: 16,
    transform: [{ rotate: '-18deg' }],
  },

  lollipopWrap: {
    top: 156,
    left: 30,
    width: 100,
    height: 94,
  },

  lollipopHead: {
    position: 'absolute',
    top: 4,
    left: 6,
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#E94F66',
    borderWidth: 5,
    borderColor: '#5C5C60',
  },

  lollipopStick: {
    position: 'absolute',
    left: 40,
    bottom: 16,
    width: 16,
    height: 64,
    borderRadius: 8,
    backgroundColor: '#4DBBB1',
    borderWidth: 5,
    borderColor: '#5C5C60',
    transform: [{ rotate: '-48deg' }],
  },

  lollipopLeaf: {
    position: 'absolute',
    left: 48,
    bottom: 18,
    width: 28,
    height: 20,
    borderRadius: 14,
    backgroundColor: '#A2E4D7',
    borderWidth: 5,
    borderColor: '#5C5C60',
    transform: [{ rotate: '-20deg' }],
  },

  socksWrap: {
    top: 190,
    right: 46,
    width: 100,
    height: 82,
  },

  sock: {
    position: 'absolute',
    width: 42,
    height: 60,
    borderRadius: 10,
    backgroundColor: '#F8B5D0',
    borderWidth: 5,
    borderColor: '#5C5C60',
  },

  sockLeft: {
    left: 12,
    transform: [{ rotate: '12deg' }],
  },

  sockRight: {
    right: 8,
    top: 6,
    backgroundColor: '#F06C8E',
    transform: [{ rotate: '14deg' }],
  },

  capsuleWrap: {
    bottom: 72,
    left: 32,
    width: 98,
    height: 64,
    justifyContent: 'center',
  },

  capsuleShell: {
    width: 86,
    height: 44,
    borderRadius: 22,
    overflow: 'hidden',
    borderWidth: 5,
    borderColor: '#5C5C60',
    transform: [{ rotate: '32deg' }],
    flexDirection: 'row',
  },

  capsuleLeft: {
    flex: 1,
    backgroundColor: '#E9E9EA',
  },

  capsuleRight: {
    flex: 1,
    backgroundColor: '#C58AD0',
  },

  shopperWrap: {
    position: 'absolute',
    bottom: 18,
    width: 200,
    height: 210,
    alignItems: 'center',
  },

  shopperHead: {
    width: 96,
    height: 110,
    borderRadius: 42,
    backgroundColor: '#F5D89A',
    borderWidth: 5,
    borderColor: '#5C5C60',
    zIndex: 2,
  },

  shopperHair: {
    position: 'absolute',
    top: 8,
    left: 4,
    width: 66,
    height: 56,
    borderTopLeftRadius: 34,
    borderTopRightRadius: 26,
    borderBottomLeftRadius: 26,
    borderBottomRightRadius: 20,
    backgroundColor: '#A9753A',
    transform: [{ rotate: '-20deg' }],
  },

  shopperTorso: {
    marginTop: -14,
    width: 154,
    height: 104,
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
    backgroundColor: '#E84F63',
    borderWidth: 5,
    borderColor: '#5C5C60',
    overflow: 'hidden',
  },

  shopperTorsoStripe: {
    width: 14,
    height: '100%',
    marginLeft: 18,
    backgroundColor: palette.bgWhite,
  },

  shopperArm: {
    position: 'absolute',
    width: 38,
    height: 92,
    borderRadius: 18,
    backgroundColor: '#F5D89A',
    borderWidth: 5,
    borderColor: '#5C5C60',
    bottom: 8,
  },

  shopperArmLeft: {
    left: 12,
  },

  shopperArmRight: {
    right: 14,
    transform: [{ rotate: '24deg' }],
    justifyContent: 'center',
    alignItems: 'center',
  },

  phone: {
    width: 22,
    height: 36,
    borderRadius: 6,
    backgroundColor: '#27C1B8',
    borderWidth: 4,
    borderColor: '#5C5C60',
  },

  routePrimary: {
    position: 'absolute',
    width: 222,
    height: 48,
    borderRadius: 28,
    backgroundColor: '#F5F5F5',
    top: 118,
    left: 124,
    transform: [{ rotate: '-34deg' }],
  },

  routeSecondary: {
    position: 'absolute',
    width: 168,
    height: 44,
    borderRadius: 24,
    backgroundColor: '#F5F5F5',
    top: 218,
    left: 62,
    transform: [{ rotate: '-34deg' }],
  },

  pinStart: {
    position: 'absolute',
    left: 54,
    bottom: 66,
    transform: [{ rotate: '6deg' }],
  },

  pinEnd: {
    position: 'absolute',
    right: 56,
    top: 22,
    transform: [{ rotate: '-8deg' }],
  },

  mapPin: {
    width: 56,
    height: 56,
    borderRadius: 28,
    borderWidth: 5,
    borderColor: '#5C5C60',
    alignItems: 'center',
    justifyContent: 'center',
  },

  mapPinInner: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: palette.primaryBase,
    borderWidth: 5,
    borderColor: '#5C5C60',
  },

  helmetWrap: {
    position: 'absolute',
    top: 168,
    left: '50%',
    marginLeft: -34,
    width: 68,
    height: 56,
  },

  helmetBody: {
    width: 68,
    height: 48,
    borderTopLeftRadius: 26,
    borderTopRightRadius: 26,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: '#C88BCF',
    borderWidth: 5,
    borderColor: '#5C5C60',
  },

  helmetVisor: {
    position: 'absolute',
    right: 3,
    top: 16,
    width: 32,
    height: 18,
    borderRadius: 9,
    backgroundColor: '#9D9CA1',
    borderWidth: 5,
    borderColor: '#5C5C60',
  },

  bodySection: {
    flex: 1,
    paddingHorizontal: 26,
    alignItems: 'center',
  },

  pagination: {
    flexDirection: 'row',
    gap: 22,
    marginTop: 18,
    marginBottom: 36,
  },

  paginationDot: {
    width: 18,
    height: 18,
    borderRadius: 9,
  },

  paginationDotActive: {
    backgroundColor: palette.bgWhite,
  },

  paginationDotInactive: {
    backgroundColor: 'rgba(255, 230, 170, 0.82)',
  },

  title: {
    textAlign: 'center',
    maxWidth: 360,
  },

  noteRow: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 82,
    paddingHorizontal: 8,
    gap: 18,
  },

  noteText: {
    flex: 1,
  },

  noteSpacer: {
    flex: 1,
  },

  ecoBadge: {
    width: 68,
    height: 68,
    borderRadius: 34,
    backgroundColor: 'rgba(255, 245, 210, 0.6)',
    alignItems: 'center',
    justifyContent: 'center',
  },

  ecoHand: {
    position: 'absolute',
    bottom: 12,
    width: 38,
    height: 12,
    borderRadius: 8,
    backgroundColor: '#C58C4D',
  },

  ecoLeaf: {
    position: 'absolute',
    width: 14,
    height: 22,
    borderRadius: 12,
    backgroundColor: '#57C882',
  },

  ecoLeafLeft: {
    top: 14,
    left: 18,
    transform: [{ rotate: '-26deg' }],
  },

  ecoLeafCenter: {
    top: 8,
    left: 28,
  },

  ecoLeafRight: {
    top: 14,
    right: 18,
    transform: [{ rotate: '26deg' }],
  },

  ecoStem: {
    position: 'absolute',
    top: 26,
    width: 4,
    height: 18,
    borderRadius: 2,
    backgroundColor: '#369C60',
  },

  footer: {
    paddingHorizontal: 28,
    paddingTop: 20,
  },
});
