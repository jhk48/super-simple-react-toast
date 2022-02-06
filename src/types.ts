export type MessageType = 'success' | 'warning' | 'error' | 'info';
export type ToastPosition = 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight';
export type Theme = 'light' | 'dark';

interface ToastTheme {
  backgroundColor: string;
  progressBarColor: string;
  color: string;
}

interface ToastStyle {
  success: ToastTheme;
  warning: ToastTheme;
  error: ToastTheme;
  info: ToastTheme;
}

export interface ToastStyles {
  light: ToastStyle,
  dark: ToastStyle
}

export interface Message {
  id: string;
  message: string;
  type: MessageType;
  theme: Theme;
  duration: number;
}

interface ToastPositionValues {
  left?: string;
  right?: string;
  top?: string;
  bottom?: string;
}

export type ToastPositions = {
  [key in ToastPosition]: ToastPositionValues;
}
