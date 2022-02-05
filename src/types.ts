export type MessageType = 'success' | 'warning' | 'error' | 'info';
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
