import Toast from 'react-native-toast-message';

type ToastPosition = 'top' | 'bottom';

export const showSuccess = (
  message: string,
  title = 'Success',
  position: ToastPosition = 'top',
) =>
  Toast.show({
    type: 'success',
    text1: title,
    text2: message,
    position,
    visibilityTime: 3000,
  });

export const showError = (
  message: string,
  title = 'Error',
  position: ToastPosition = 'top',
) =>
  Toast.show({
    type: 'error',
    text1: title,
    text2: message,
    position,
    visibilityTime: 3500,
  });

export const showInfo = (
  message: string,
  title = 'Info',
  position: ToastPosition = 'top',
) =>
  Toast.show({
    type: 'info',
    text1: title,
    text2: message,
    position,
  });
