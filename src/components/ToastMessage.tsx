import * as Style from './styles';
import * as Icon from '../icons';
import { MessageType, Theme } from '../types';

interface Props {
  theme: Theme;
  message: string;
  type: MessageType;
}

export default function ToastMessage({ theme, message, type }: Props) {
  function getIcon() {
    if (type === 'success') return <Icon.Success />;
    if (type === 'warning') return <Icon.Warning />;
    if (type === 'error') return <Icon.Error />;
    if (type === 'info') return <Icon.Info />;
  }

  return (
    <Style.Container currentTheme={theme} messageType={type}>
      {getIcon()}
      <Style.Message currentTheme={theme} messageType={type}>{message}</Style.Message>
      <Style.CloseButton type="button" currentTheme={theme} messageType={type}>
        <Icon.Close />
      </Style.CloseButton>
    </Style.Container>
  );
}
